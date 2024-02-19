"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminRouter = void 0;
const express_1 = __importDefault(require("express"));
const admin_controller_1 = require("./admin.controller");
const router = express_1.default.Router();
router.get("/getDashboardInfo", admin_controller_1.AdminController.getDashboardInfo);
router.get("/getAllOwners", admin_controller_1.AdminController.getAllOwners);
router.get("/getAllCustomers", admin_controller_1.AdminController.getAllCustomers);
router.get("/getAllReservations", admin_controller_1.AdminController.getAllReservations);
router.get("/getAllBookings", admin_controller_1.AdminController.getAllBookings);
router.get("/getAllReviews", admin_controller_1.AdminController.getAllReviews);
router.get("/getAllReports", admin_controller_1.AdminController.getAllReports);
router.get("/getReportsCount", admin_controller_1.AdminController.getReportsCount);
router.patch("/blockReservation", admin_controller_1.AdminController.blockReservation);
exports.AdminRouter = router;
