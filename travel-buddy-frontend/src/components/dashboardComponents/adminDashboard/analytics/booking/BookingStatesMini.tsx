import { IAdmin } from "@/types/adminTypes";
import HeroMetrics from "../HeroMetrics";
import { HeroCard } from "../StateCards";

const BookingStatsMini = ({ stats }: { stats: IAdmin }) => {
  const items = [
    {
      label: "Total",
      value: stats.totalBookings,
      bg: "purple",
    },
    {
      label: "Successful",
      value: stats.totalSuccessfulBookings,
      bg: "green",
    },
    {
      label: "Pending",
      value: stats.totalOnboardBookings,
      bg: "yellow",
    },
    {
      label: "Canceled",
      value: stats.totalCancelledBookings,
      bg: "red",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {items.map((item, i) => (
        <HeroCard
          key={i}
          title={item.label}
          value={item.value}
          accent={item.bg as any}
        />
      ))}
    </div>
  );
};

export default BookingStatsMini;
