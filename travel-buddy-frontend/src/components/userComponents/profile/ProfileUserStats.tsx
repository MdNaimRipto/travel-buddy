import React from "react";

const ProfileUserStats = () => {
  const stats = [
    {
      bg: "from-[#007bff] to-[#0056b3]",
      title: "Total Bookings",
      value: "330",
    },
    {
      bg: "from-[#28a745] to-[#1e7e34]",
      title: "Successful Bookings",
      value: "300",
    },
    {
      bg: "from-[#dc3545] to-[#c82333]",
      title: "Canceled Bookings",
      value: "30",
    },
    {
      bg: "from-[#ffc107] to-[#e0a800]",
      title: "Wishlisted Hotels",
      value: "20",
    },
    {
      bg: "from-[#6f42c1] to-[#563d7c]",
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
