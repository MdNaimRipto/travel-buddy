import { colorConfig } from "@/configs/colorConfig";
import React, { useState } from "react";
import { DateRange } from "react-date-range";

interface IBookingCalendar {
  today: Date;
  tomorrow: Date;
  dates: {
    startDate: Date; // Change from string to Date
    endDate: Date; // Change from string to Date
    key: "selection";
    color: string;
  }[];
  setDates: any;
  getDateWithTime: any;
}

const BookCalendar = ({
  today,
  tomorrow,
  dates,
  setDates,
  getDateWithTime,
}: IBookingCalendar) => {
  const handleSelect = (ranges: any) => {
    const { selection } = ranges;
    const startDate = getDateWithTime(selection.startDate, 9, 0);
    let endDate = getDateWithTime(selection.endDate, 9, 0);

    const diffInTime = endDate.getTime() - startDate.getTime();
    const diffInDays = Math.ceil(diffInTime / (1000 * 3600 * 24)) + 1;

    if (diffInDays > 5) {
      endDate = getDateWithTime(
        new Date(startDate.getTime() + 4 * 24 * 60 * 60 * 1000),
        9,
        0
      );
    }

    setDates([
      {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
        color: colorConfig.secondary,
      },
    ]);
  };

  console.log({ dates });

  return (
    <DateRange
      editableDateInputs={true}
      onChange={handleSelect}
      moveRangeOnFirstSelection={false}
      ranges={dates}
      minDate={tomorrow}
      disabledDates={[today]}
      rangeColors={[colorConfig.secondary]}
    />
  );
};

export default BookCalendar;
