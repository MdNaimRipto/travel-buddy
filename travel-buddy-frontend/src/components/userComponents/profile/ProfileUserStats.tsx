import React from "react";

const ProfileUserStats = () => {
  const stats = [
    {
      bg: "from-[#0091ff] to-[#237ddf]",
      title: "Total Bookings",
      value: "330",
    },
    {
      bg: "from-[#24b650] to-[#36b74e]",
      title: "Successful Bookings",
      value: "300",
    },
    {
      bg: "from-[#fc4d4d] to-[#ff2f2f]",
      title: "Canceled Bookings",
      value: "30",
    },
    {
      bg: "from-[#ffd300] to-[#f2b300]",
      title: "Wishlisted Hotels",
      value: "20",
    },
    {
      bg: "from-[#8a46ff] to-[#6d44ca]",
      title: "Wishlisted Reservations",
      value: "48",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 xl:px-4">
      {stats.map((state, i) => (
        <div
          key={i}
          className={`bg-gradient-to-l ${state.bg} rounded-lg px-5 py-6 text-white`}
        >
          <h2 className="text-xl mb-3 font-inter">{state.title}</h2>
          <p className="titleFont font-medium text-5xl">{state.value}</p>
        </div>
      ))}
    </div>
  );
};

export default ProfileUserStats;
