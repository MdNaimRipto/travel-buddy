export const getDateWithTime = (date: Date, hours: number, minutes: number) => {
  const newDate = new Date(date);
  newDate.setHours(hours, minutes, 0, 0);
  return newDate;
};

export const formatDateTime = (date: Date) => {
  return date.toLocaleString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};

// Function to calculate the total number of nights
export const calculateTotalNights = (startDate: Date, endDate: Date) => {
  const millisecondsPerDay = 24 * 60 * 60 * 1000; // Number of milliseconds in a day
  const timeDifference = endDate.getTime() - startDate.getTime();
  return Math.round(timeDifference / millisecondsPerDay);
};
