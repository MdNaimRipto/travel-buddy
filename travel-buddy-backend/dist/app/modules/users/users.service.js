"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const users_schema_1 = require("./users.schema");
const users_utils_1 = require("./users.utils");
const jwtHelpers_1 = require("../../../helpers/jwtHelpers");
const config_1 = __importDefault(require("../../../config/config"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const userRegister = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, contactNumber, role } = payload;
    const isExistsUser = yield users_schema_1.Users.findOne({
        $or: [{ email }, { contactNumber }],
    });
    if (isExistsUser) {
        throw new ApiError_1.default(http_status_1.default.CONFLICT, "Email or Contact Already Exists");
    }
    const uid = (0, users_utils_1.generateUID)(role);
    // Check UID Exists or Not
    const isUIDExists = yield users_schema_1.Users.findOne({ uid: uid });
    if (isUIDExists) {
        throw new ApiError_1.default(http_status_1.default.CONFLICT, "Something went wrong! Please try again");
    }
    // Save UID
    payload.uid = uid;
    const user = yield users_schema_1.Users.create(payload);
    const { uid: userUid } = user;
    const accessToken = jwtHelpers_1.jwtHelpers.createToken({
        id: userUid,
    }, config_1.default.jwt_secret, config_1.default.jwt_expires_in);
    const encryptedUserData = (0, users_utils_1.encryptData)(user);
    return {
        token: accessToken,
        userData: encryptedUserData,
    };
});
const userLogin = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = payload;
    const isExists = yield users_schema_1.Users.findOne({ email: email });
    if (!isExists) {
        throw new ApiError_1.default(http_status_1.default.UNAUTHORIZED, "Invalid Email Or Password");
    }
    const checkPassword = yield bcrypt_1.default.compare(password, isExists.password);
    if (!checkPassword) {
        throw new ApiError_1.default(http_status_1.default.UNAUTHORIZED, "Invalid Email Or Password");
    }
    const accessToken = jwtHelpers_1.jwtHelpers.createToken({
        id: isExists.uid,
    }, config_1.default.jwt_secret, config_1.default.jwt_expires_in);
    const encryptedUserData = (0, users_utils_1.encryptData)(isExists);
    return {
        token: accessToken,
        userData: encryptedUserData,
    };
});
const updateUser = (userID, payload, token) => __awaiter(void 0, void 0, void 0, function* () {
    jwtHelpers_1.jwtHelpers.jwtVerify(token, config_1.default.jwt_secret);
    const isExistsUser = yield users_schema_1.Users.findById({ _id: userID });
    if (!isExistsUser) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "User Not Found");
    }
    const { role, uid, location } = payload, updatePayload = __rest(payload, ["role", "uid", "location"]);
    if (role !== undefined || uid !== undefined) {
        throw new ApiError_1.default(http_status_1.default.UNAUTHORIZED, "Permission Denied! Please Try Again.");
    }
    if (payload.email) {
        const isExists = yield users_schema_1.Users.findOne({ email: payload.email });
        if (isExists) {
            throw new ApiError_1.default(http_status_1.default.FORBIDDEN, "Email Already Exists! Try Another One.");
        }
        updatePayload.email = payload.email;
    }
    if (payload.contactNumber) {
        const isExists = yield users_schema_1.Users.findOne({
            contactNumber: payload.contactNumber,
        });
        if (isExists) {
            throw new ApiError_1.default(http_status_1.default.FORBIDDEN, "Contact Number Already Exists! Try Another One.");
        }
        updatePayload.contactNumber = payload.contactNumber;
    }
    if (payload.password) {
        const isPreviousPass = yield bcrypt_1.default.compare(payload.password, isExistsUser.password);
        if (isPreviousPass) {
            throw new ApiError_1.default(http_status_1.default.FORBIDDEN, "New Password Cannot be The Previous Password");
        }
        const newPassword = yield bcrypt_1.default.hash(payload.password, Number(config_1.default.salt_round));
        updatePayload.password = newPassword;
    }
    if (location && Object.keys(location).length > 0) {
        Object.keys(location).map(key => {
            const locationsKey = `location.${key}`;
            updatePayload[locationsKey] =
                location[key];
        });
    }
    const user = yield users_schema_1.Users.findOneAndUpdate({ _id: userID }, updatePayload, {
        new: true,
    });
    const updatedUser = (0, users_utils_1.encryptData)(user);
    return updatedUser;
});
//* Forgot Password Part-1 Find user via email
const findUserForForgotPassword = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield users_schema_1.Users.findOne({ email: email }, {
        _id: 0,
        email: 1,
    }).lean();
    if (!user) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "User Not Found");
    }
    return user;
});
//* Forgot Password Part-2
const forgotPassword = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = payload;
    const isExistsUser = yield users_schema_1.Users.findOne({ email: email });
    if (!isExistsUser) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "User Not Found");
    }
    const isPreviousPass = yield bcrypt_1.default.compare(password, isExistsUser.password);
    if (isPreviousPass) {
        throw new ApiError_1.default(http_status_1.default.FORBIDDEN, "New Password Cannot be The Previous Password");
    }
    const newPass = yield bcrypt_1.default.hash(password, Number(config_1.default.salt_round));
    payload.password = newPass;
    const updatedUser = yield users_schema_1.Users.findOneAndUpdate({ email: email }, payload, {
        new: true,
    });
    const result = (0, users_utils_1.encryptData)(updatedUser);
    return result;
});
exports.UserService = {
    userRegister,
    userLogin,
    updateUser,
    findUserForForgotPassword,
    forgotPassword,
};
