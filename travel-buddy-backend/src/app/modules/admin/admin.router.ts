import express from "express";
import { AdminController } from "./admin.controller";

const router = express.Router();

router.get("/getDashboardInfo", AdminController.getDashboardInfo);

router.get("/getAllOwners", AdminController.getAllOwners);

router.get("/getAllCustomers", AdminController.getAllCustomers);

router.get("/getAllReservations", AdminController.getAllReservations);

router.get("/getAllBookings", AdminController.getAllBookings);

router.get("/getAllReviews", AdminController.getAllReviews);

router.get("/getAllReports", AdminController.getAllReports);

router.get("/getReportsCount", AdminController.getReportsCount);

router.patch("/blockReservation", AdminController.blockReservation);

export const AdminRouter = router;
