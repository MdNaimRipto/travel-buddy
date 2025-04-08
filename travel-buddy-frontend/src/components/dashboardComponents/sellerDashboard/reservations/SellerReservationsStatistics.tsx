import React from "react";

const SellerReservationsStatistics = () => {
  const stats = [
    {
      bg: "from-[#0091ff] to-[#237ddf]",
      color: "#0091ff",
      title: "Total Reservations",
      value: 50,
    },
    {
      bg: "from-[#24b650] to-[#36b74e]",
      color: "#24b650",
      title: "Booked Reservations",
      value: 40,
    },
    {
      bg: "from-[#8a46ff] to-[#6d44ca]",
      color: "#8a46ff",
      title: "Available Reservations",
      value: 10,
    },
  ];

  return (
    <>
      <h4 className="font-inter mb-8 text-lg lg:text-base xl:text-xl underline inline-block text-darkGray">
        Reservation Statistics:
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
    </>
  );
};

export default SellerReservationsStatistics;
