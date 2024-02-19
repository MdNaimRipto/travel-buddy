import express, { Application, Request, Response } from "express";
import cors from "cors";
import httpStatus from "http-status";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import pathNotFoundErrorHandler from "./errors/pathNotFoundErrorHandler";
import { Routers } from "./app/routes/router";
import { updateBooking } from "./app/modules/booking/booking.utils";
import { Server } from "socket.io";
import { instrument } from "@socket.io/admin-ui";

const app: Application = express();

// ? Middlewares:
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ? Socket IO Configuration
export const io = new Server(5835, {
  cors: {
    origin: [
      "http://localhost:3000",
      "https://admin.socket.io",
      "https://travel-buddy-backend-et1k.onrender.com",
    ],
    credentials: true,
  },
});

io.on("connection", socket => {
  console.log(`Socket Connected At ${socket.id}`);
});

// * Socket IO Admin UI
instrument(io, {
  auth: false,
});

// * Basic Page
app.get("/", async (req: Request, res: Response) => {
  res.status(httpStatus.OK).send({
    message: "Travel-Buddy Server Running Successfully",
    statusCode: httpStatus.OK,
  });
});

// * Function for Update Booking and Reservation's
updateBooking();

//* Main endpoint
app.use("/api/v1.0", Routers);

//* Global error Handler
app.use(globalErrorHandler);

//* Path Not Found Error Handler
app.use(pathNotFoundErrorHandler);

export default app;
