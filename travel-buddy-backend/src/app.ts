import express, { Application, Request, Response } from "express";
import cors from "cors";
import httpStatus from "http-status";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import pathNotFoundErrorHandler from "./errors/pathNotFoundErrorHandler";
import { Routers } from "./app/routes/router";
import Pusher from "pusher";
import config from "./config/config";
import { updateBooking } from "./app/modules/booking/booking.utils";

const app: Application = express();

// ? Middlewares:
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ? Pusher Configuration
export const pusher = new Pusher({
  appId: config.pusher_app_id,
  key: config.pusher_key,
  secret: config.pusher_secret,
  cluster: "ap2",
  useTLS: true,
});

// * Basic Page
app.get("/", async (req: Request, res: Response) => {
  res.status(httpStatus.OK).send({
    message: "Travel-Buddy Server Running Successfully",
    statusCode: httpStatus.OK,
  });
});

// ? Function for Update Booking and Reservation's
updateBooking();

//* Main endpoint
app.use("/api/v1.0", Routers);

//* Global error Handler
app.use(globalErrorHandler);

//* Path Not Found Error Handler
app.use(pathNotFoundErrorHandler);

export default app;
