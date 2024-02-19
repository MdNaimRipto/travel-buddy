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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const users_schema_1 = require("../users/users.schema");
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const notification_schema_1 = require("./notification.schema");
const sendNotification = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { receiverId } = payload;
    const isReceiverExists = yield users_schema_1.Users.findOne({ uid: receiverId });
    if (!isReceiverExists) {
        throw new ApiError_1.default(http_status_1.default.UNAUTHORIZED, "Receiver Dose not Exists!");
    }
    const result = yield notification_schema_1.Notification.create(payload);
    return result;
});
const getNotification = (receiverId) => __awaiter(void 0, void 0, void 0, function* () {
    const notifications = yield notification_schema_1.Notification.find({ receiverId }, {
        _id: 1,
        message: 1,
    });
    return notifications;
});
const deleteNotification = (notificationId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield notification_schema_1.Notification.findOneAndDelete({ _id: notificationId }, {
        new: true,
    });
    return result;
});
exports.NotificationService = {
    sendNotification,
    getNotification,
    deleteNotification,
};
