import React from "react";
import img1 from "@/assets/reservations/fakeReservationImage.jpg";
import img2 from "@/assets/reservations/fakeReservationImage2.jpg";
import img3 from "@/assets/reservations/fakeReservationImage3.jpg";
import img4 from "@/assets/reservations/fakeReservationImage4.jpg";
import VerticalReservationCard from "@/components/reservations/reservationCards/VerticalReservationCard";

const ReservationsWishlist = () => {
  const reservations = [
    {
      img: img1,
    },
    {
      img: img2,
    },
    {
      img: img3,
    },
    {
      img: img4,
    },
  ];

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-1 overflow-hidden`}
    >
      {[...reservations, ...reservations].map((r, i) => (
        <VerticalReservationCard reservation={r} key={i} />
      ))}
    </div>
  );
};

export default ReservationsWishlist;
