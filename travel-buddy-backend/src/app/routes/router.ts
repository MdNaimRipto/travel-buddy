import express from "express";
import { UserRouter } from "../modules/users/users.router";
import { businessProfileRouter } from "../modules/hotels/businessProfile/businessProfile.router";
import { ReservationRouter } from "../modules/hotels/reservations/reservations.router";

const router = express.Router();

const routes = [
  {
    path: "/users",
    route: UserRouter,
  },
  {
    path: "/hotel/businessProfile",
    route: businessProfileRouter,
  },
  {
    path: "/hotel/reservations",
    route: ReservationRouter,
  },
];

routes.map(r => router.use(r.path, r.route));

export const Routers = router;
