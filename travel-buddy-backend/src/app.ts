import express, { Application, Request, Response } from "express";
import cors from "cors";
import httpStatus from "http-status";

const app: Application = express();

// ? Middlewares:
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req: Request, res: Response) => {
  res.status(httpStatus.OK).send({
    message: "Travel-Buddy Server Running Successfully",
    statusCode: httpStatus.OK,
  });
});

export default app;
