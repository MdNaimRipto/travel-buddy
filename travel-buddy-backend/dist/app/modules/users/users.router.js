"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
const express_1 = __importDefault(require("express"));
const users_controller_1 = require("./users.controller");
const zodValidationRequest_1 = __importDefault(require("../../../middlewares/zodValidationRequest"));
const users_validation_1 = require("./users.validation");
const router = express_1.default.Router();
router.post("/register", (0, zodValidationRequest_1.default)(users_validation_1.UserValidation.usersZodSchema), users_controller_1.UserController.userRegister);
router.post("/login", (0, zodValidationRequest_1.default)(users_validation_1.UserValidation.loginUserZodSchema), users_controller_1.UserController.userLogin);
router.patch("/updateUser/:id", (0, zodValidationRequest_1.default)(users_validation_1.UserValidation.userUpdateZodSchema), users_controller_1.UserController.updatedUser);
router.get("/findUser", users_controller_1.UserController.findUserForForgotPassword);
router.patch("/forgotPassword", users_controller_1.UserController.forgotPassword);
exports.UserRouter = router;
