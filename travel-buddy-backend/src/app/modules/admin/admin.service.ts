import httpStatus from "http-status";
import ApiError from "../../../errors/ApiError";
import { IBooking } from "../booking/booking.interface";
import { Booking } from "../booking/booking.schema";
import { IReservations } from "../hotels/reservations/reservations.interface";
import { Reservations } from "../hotels/reservations/reservations.schema";
import { IReport } from "../report/report.interface";
import { Report } from "../report/report.schema";
import { IReview } from "../reviews/reviews.interface";
import { Reviews } from "../reviews/reviews.schema";
import { IUser } from "../users/users.interface";
import { Users } from "../users/users.schema";
import { IAdmin } from "./admin.interface";
import {
  IGenericPaginationResponse,
  IPaginationOptions,
} from "../../../interface/pagination";
import { calculatePaginationFunction } from "../../../helpers/paginationHelpers";
import { SortOrder } from "mongoose";

const getDashboardInfo = async (): Promise<IAdmin> => {
  const totalUsers = await Users.countDocuments();
  const totalOwners = await Users.countDocuments({ role: "hotelOwner" });
  const totalCustomers = await Users.countDocuments({ role: "customer" });

  const totalBookings = await Booking.countDocuments();
  const totalOnboardBookings = await Booking.countDocuments({
    status: "onboard",
  });
  const totalSuccessfulBookings = await Booking.countDocuments({
    status: "completed",
  });
  const totalCancelledBookings = await Booking.countDocuments({
    status: "cancelled",
  });

  const totalReviews = await Reviews.countDocuments();
  const totalPositiveReviews = await Reviews.countDocuments({
    rating: "positive",
  });
  const totalNegativeReviews = await Reviews.countDocuments({
    rating: "negative",
  });

  const bookingInfoOutput: {
    checkoutDate: string;
    totalBooking: number;
    totalSuccess: number;
    totalCancelled: number;
  }[] = [];

  const bookingsInfo = await Booking.find();
  for (let i = 0; i < bookingsInfo.length; i++) {
    const { expireDate } = bookingsInfo[i];

    const totalBooking = await Booking.countDocuments({ expireDate });

    const totalSuccess = await Booking.countDocuments({
      expireDate,
      status: "completed",
    });
    const totalCancelled = await Booking.countDocuments({
      expireDate,
      status: "cancelled",
    });

    const existingBooking = bookingInfoOutput.find(
      booking => booking.checkoutDate === expireDate,
    );

    if (existingBooking) {
      // If bookingDate is already in the output, update the totals
      existingBooking.totalBooking = totalBooking;
      existingBooking.totalSuccess = totalSuccess;
      existingBooking.totalCancelled = totalCancelled;
    } else {
      // If bookingDate is not already in the output, add a new entry
      bookingInfoOutput.push({
        checkoutDate: expireDate,
        totalBooking: totalBooking,
        totalSuccess: totalSuccess,
        totalCancelled,
      });
    }
  }

  const dashboardInfo: IAdmin = {
    totalUsers,
    totalOwners,
    totalCustomers,
    totalBookings,
    totalOnboardBookings,
    totalSuccessfulBookings,
    totalCancelledBookings,
    totalReviews,
    totalPositiveReviews,
    totalNegativeReviews,
    bookingsInfo: bookingInfoOutput,
  };

  return dashboardInfo;
};

const getAllOwners = async (
  paginationOptions: IPaginationOptions,
): Promise<IGenericPaginationResponse<IUser[]>> => {
  const andConditions: string | any[] = [];

  const { page, limit, skip, sortBy, sortOrder } =
    calculatePaginationFunction(paginationOptions);

  const sortConditions: { [key: string]: SortOrder } = {};

  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }
  //
  const checkAndCondition =
    andConditions?.length > 0 ? { $and: andConditions } : {};

  const query = {
    role: "hotelOwner",
    ...checkAndCondition,
  };

  const owners = await Users.find(query)
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);
  const total = await Users.countDocuments({ role: "hotelOwner" });

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: owners,
  };
};

const getAllCustomers = async (
  paginationOptions: IPaginationOptions,
): Promise<IGenericPaginationResponse<IUser[]>> => {
  const andConditions: string | any[] = [];

  const { page, limit, skip, sortBy, sortOrder } =
    calculatePaginationFunction(paginationOptions);

  const sortConditions: { [key: string]: SortOrder } = {};

  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }
  //
  const checkAndCondition =
    andConditions?.length > 0 ? { $and: andConditions } : {};

  const query = {
    role: "customer",
    ...checkAndCondition,
  };

  const owners = await Users.find(query)
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);

  const total = await Users.countDocuments({ role: "customer" });

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: owners,
  };
};

const getAllReservations = async (
  paginationOptions: IPaginationOptions,
): Promise<IGenericPaginationResponse<IReservations[]>> => {
  const andConditions: string | any[] = [];

  const { page, limit, skip, sortBy, sortOrder } =
    calculatePaginationFunction(paginationOptions);

  const sortConditions: { [key: string]: SortOrder } = {};

  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }
  //
  const checkAndCondition =
    andConditions?.length > 0 ? { $and: andConditions } : {};

  const result = await Reservations.find(checkAndCondition)
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);

  const total = await Reservations.countDocuments();

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const getAllBookings = async (
  paginationOptions: IPaginationOptions,
): Promise<IGenericPaginationResponse<IBooking[]>> => {
  const andConditions: string | any[] = [];

  const { page, limit, skip, sortBy, sortOrder } =
    calculatePaginationFunction(paginationOptions);

  const sortConditions: { [key: string]: SortOrder } = {};

  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }
  //
  const checkAndCondition =
    andConditions?.length > 0 ? { $and: andConditions } : {};

  const result = await Booking.find(checkAndCondition)
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);

  const total = await Booking.countDocuments();

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const getAllReviews = async (
  paginationOptions: IPaginationOptions,
): Promise<IGenericPaginationResponse<IReview[]>> => {
  const andConditions: string | any[] = [];

  const { page, limit, skip, sortBy, sortOrder } =
    calculatePaginationFunction(paginationOptions);

  const sortConditions: { [key: string]: SortOrder } = {};

  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }
  //
  const checkAndCondition =
    andConditions?.length > 0 ? { $and: andConditions } : {};

  const result = await Reviews.find(checkAndCondition)
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);

  const total = await Reviews.countDocuments();

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const getAllReports = async (
  paginationOptions: IPaginationOptions,
): Promise<IGenericPaginationResponse<IReport[]>> => {
  const andConditions: string | any[] = [];

  const { page, limit, skip, sortBy, sortOrder } =
    calculatePaginationFunction(paginationOptions);

  const sortConditions: { [key: string]: SortOrder } = {};

  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }
  //
  const checkAndCondition =
    andConditions?.length > 0 ? { $and: andConditions } : {};

  const result = await Report.find(checkAndCondition)
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);

  const total = await Report.countDocuments();

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const getReportsCount = async (reservationId: string): Promise<Number> => {
  const count = await Report.countDocuments({ reservationId });
  return count;
};

const blockReservation = async (
  reservationId: string,
): Promise<IReservations | null> => {
  const isReservationExists = await Reservations.findOne({ reservationId });
  if (!isReservationExists) {
    throw new ApiError(httpStatus.NOT_FOUND, "Reservation Doesn't Exists!");
  }

  if (isReservationExists.status === "Blocked") {
    throw new ApiError(httpStatus.BAD_REQUEST, "Reservation Already Blocked");
  }

  isReservationExists.status = "Blocked";

  const result = await Reservations.findOneAndUpdate(
    { reservationId },
    isReservationExists,
    {
      new: true,
    },
  );

  return result;
};

export const AdminService = {
  getDashboardInfo,
  getAllOwners,
  getAllCustomers,
  getAllReservations,
  getAllBookings,
  getAllReviews,
  getAllReports,
  getReportsCount,
  blockReservation,
};
