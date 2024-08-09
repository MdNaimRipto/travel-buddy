import { useState } from "react";
import BookCalendar from "./BookCalendar";
import { colorConfig } from "@/configs/colorConfig";

const BookReservation = () => {
  const today = new Date();

  const getDateWithTime = (date: Date, hours: number, minutes: number) => {
    const newDate = new Date(date);
    newDate.setHours(hours, minutes, 0, 0);
    return newDate;
  };

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
  return (
    <div className="px-3 py-4 border border-lightGray rounded-lg">
      <h6 className="text-xl text-black font-medium font-inter mt-1 mb-3">
        Book Reservation
      </h6>
      <BookCalendar
        today={today}
        tomorrow={tomorrow}
        dates={dates}
        setDates={setDates}
        getDateWithTime={getDateWithTime}
      />
      <div>
        <h5>Check-In: {dates[0].startDate.toLocaleString()}</h5>
        <h5>Check-Out: {dates[0].endDate.toLocaleString()}</h5>
      </div>
    </div>
  );
};

export default BookReservation;
