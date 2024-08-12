import { useState } from "react";
import BookCalendar from "./BookCalendar";
import { colorConfig } from "@/configs/colorConfig";
import { Button, Divider } from "@mui/material";
import {
  calculateTotalNights,
  formatDateTime,
  getDateWithTime,
} from "@/utils/bookReservation/bookReservationUtils";

const BookReservation = () => {
  const today = new Date();
  const tomorrow = getDateWithTime(new Date(today), 9, 0);

  tomorrow.setDate(tomorrow.getDate() + 1);

  const [dates, setDates] = useState([
    {
      startDate: tomorrow,
      endDate: getDateWithTime(
        new Date(tomorrow.getTime() + 4 * 24 * 60 * 60 * 1000),
        9,
        0
      ),
      key: "selection" as const,
      color: colorConfig.secondary,
    },
  ]);

  // Calculate the total nights
  const totalNights = calculateTotalNights(
    dates[0].startDate,
    dates[0].endDate
  );

  // Calculate total price (assuming the price is 2400 per night)
  const pricePerNight = 2800;
  const discount = 15;
  const totalPrice = totalNights * pricePerNight;

  const discountAmount = (totalPrice * discount) / 100;
  const totalBill = totalPrice - discountAmount;

  return (
    <div className="px-3 py-4 border border-lightGray rounded-lg">
      <h3 className="text-lg text-black font-medium mt-2 mb-3 titleFont">
        BDT{" "}
        <span className="line-through text-gray text-sm titleFont font-normal">
          2800
        </span>{" "}
        <span className="titleFont">2400 Night</span>
      </h3>
      <BookCalendar
        today={today}
        tomorrow={tomorrow}
        dates={dates}
        setDates={setDates}
        getDateWithTime={getDateWithTime}
      />
      <>
        <h3 className="text-xl text-black font-medium titleFont mt-5 mb-3">
          Booking Details
        </h3>
        <div className="booking-details p-3">
          <div className="flex items-center justify-evenly border border-lightGray rounded-lg p-2">
            <h5 className="flex flex-col gap-2">
              <span className="text-xs font-medium font-inter text-black">
                Check-In:
              </span>{" "}
              <span className="text-sm font-medium font-poppins text-black">
                {formatDateTime(dates[0].startDate)}
              </span>
            </h5>
            <span className="h-[50px] w-[1px] bg-lightGray block mx-3"></span>
            <h5 className="flex flex-col gap-2">
              <span className="text-xs font-medium font-inter text-black">
                Check-Out:
              </span>{" "}
              <span className="text-sm font-medium font-poppins text-black">
                {formatDateTime(dates[0].endDate)}
              </span>
            </h5>
          </div>
          <div className="px-2">
            <p className="flex items-center justify-between text-sm font-inter font-medium mt-5 mb-2">
              <span className="underline font-normal">Check-In Time:</span>
              <span>09:00 AM</span>
            </p>
            <p className="flex items-center justify-between text-sm font-inter font-medium mb-2">
              <span className="underline font-normal">Total Nights:</span>
              <span>{totalNights}</span>
            </p>
            <p className="flex items-center justify-between text-sm font-inter font-medium mb-2">
              <span className="underline font-normal">Discount:</span>
              <span>{discount}%</span>
            </p>
            <p className="flex items-center justify-between text-sm font-inter font-medium mb-2">
              <span className="underline font-normal">{`${totalNights} x ${`2800BDT`}:`}</span>
              <span>{totalPrice}BDT</span>
            </p>
            <Divider orientation="horizontal" />
            <p className="flex items-center justify-between text-sm font-inter font-medium mt-2">
              <span className="underline font-normal">Total Bill:</span>
              <span>{totalBill}BDT</span>
            </p>
          </div>
        </div>
        <Button
          variant="contained"
          sx={{
            width: "100%",
            py: 1.5,
            mt: 2,
            background: `${colorConfig.secondary} !important`,
            color: colorConfig.white,
            "&:hover": {
              background: `${colorConfig.secondary} !important`,
              color: colorConfig.white,
            },
          }}
        >
          <span className="font-poppins text-xl normal-case">Book Now</span>
        </Button>
      </>
    </div>
  );
};

export default BookReservation;
