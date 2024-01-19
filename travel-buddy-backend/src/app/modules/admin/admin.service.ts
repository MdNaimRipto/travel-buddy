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

const getAllOwners = async (): Promise<IUser[]> => {
  const result = await Users.find({ role: "hotelOwner" });
  return result;
};

const getAllCustomers = async (): Promise<IUser[]> => {
  const result = await Users.find({ role: "customer" });
  return result;
};

const getAllReservations = async (): Promise<IReservations[]> => {
  const result = await Reservations.find();
  return result;
};

const getAllBookings = async (): Promise<IBooking[]> => {
  const result = await Booking.find();
  return result;
};

const getAllReviews = async (): Promise<IReview[]> => {
  const result = await Reviews.find();
  return result;
};

const getAllReports = async (reservationId: string): Promise<IReport[]> => {
  const result = await Report.find({ reservationId });
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
};
