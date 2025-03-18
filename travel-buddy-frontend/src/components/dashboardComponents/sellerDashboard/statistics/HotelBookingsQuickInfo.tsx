import React from "react";
import PercentChart from "./charts/PercentChart";
import StatsChart from "./charts/StatsChart";

const HotelBookingsQuickInfo = () => {
  const stats = [
    {
      bg: "from-[#0091ff] to-[#237ddf]",
      color: "#0091ff",
      title: "Total Bookings",
      value: 350,
    },
    {
      bg: "from-[#24b650] to-[#36b74e]",
      color: "#24b650",
      title: "Successful Bookings",
      value: 150,
    },
    {
      bg: "from-[#fc4d4d] to-[#ff2f2f]",
      color: "#fc4d4d",
      title: "Canceled Bookings",
      value: 50,
    },
    {
      bg: "from-[#ffd300] to-[#f2b300]",
      color: "#ffd300",
      title: "Pending Bookings",
      value: 60,
    },
    {
      bg: "from-[#8a46ff] to-[#6d44ca]",
      color: "#8a46ff",
      title: "Ongoing Bookings",
      value: 90,
    },
  ];

  const totalBookings =
    stats.find(item => item.title === "Total Bookings")?.value || 0;
  const successfulBookings =
    stats.find(item => item.title === "Successful Bookings")?.value || 0;
  const canceledBookings =
    stats.find(item => item.title === "Canceled Bookings")?.value || 0;

  // Calculate percentages
  const successRate = ((successfulBookings / totalBookings) * 100).toFixed(2);
  const cancelRate = ((canceledBookings / totalBookings) * 100).toFixed(2);
  const othersRate = (100 - Number(successRate) - Number(cancelRate)).toFixed(
    2
  );

  const percentStats = [
    {
      color: "#24b650",
      title: "Success rate",
      value: parseInt(successRate),
    },
    {
      color: "#fc4d4d",
      title: "Cancel rate",
      value: parseInt(cancelRate),
    },
    {
      color: "#8a46ff",
      title: "Left/Others",
      value: Number(othersRate),
    },
  ];

  return (
    <div className="mt-5">
      <h4 className="font-inter mb-8 text-lg lg:text-base xl:text-xl underline inline-block text-darkGray">
        Booking Statistics:
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 xl:px-4">
        {stats.map((state, i) => (
          <div
            key={i}
            className={`bg-gradient-to-l ${state.bg} rounded-lg px-5 py-6 text-white shadow-md`}
          >
            <h2 className="text-base mb-3 font-inter">{state.title}</h2>
            <p className="titleFont font-medium text-4xl">{state.value}</p>
          </div>
        ))}
      </div>
      <div className="md:px-4 mb-8 flex flex-col md:flex-row gap-4">
        <StatsChart stats={stats} />
        <PercentChart data={percentStats} />
      </div>
    </div>
  );
};

export default HotelBookingsQuickInfo;
