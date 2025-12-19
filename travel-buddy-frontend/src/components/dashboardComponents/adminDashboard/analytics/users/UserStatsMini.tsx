import { IAdmin } from "@/types/adminTypes";
import { HeroCard } from "../StateCards";

const UserStatsMini = ({ stats }: { stats: IAdmin }) => {
  const items = [
    {
      label: "Hotel Owners",
      value: stats.totalOwners,
      text: "text-indigo-600",
      bg: "indigo",
    },
    {
      label: "Customers",
      value: stats.totalCustomers,
      text: "text-purple-600",
      bg: "purple",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4">
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

export default UserStatsMini;
