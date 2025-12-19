import { IAdmin } from "@/types/adminTypes";
import { HeroCard } from "./StateCards";

const HeroMetrics = ({ stats }: { stats: IAdmin }) => {
  return (
    <div className="mt-5">
      <h4 className="font-inter mb-8 text-lg lg:text-base xl:text-xl underline inline-block text-darkGray">
        Quick Statistics:
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
        <HeroCard
          title="Total Bookings"
          value={stats.totalBookings}
          accent="blue"
        />
        <HeroCard
          title="Successful"
          value={stats.totalSuccessfulBookings}
          accent="green"
        />
        <HeroCard
          title="Pending"
          value={stats.totalOnboardBookings}
          accent="yellow"
        />
        <HeroCard
          title="Total Users"
          value={stats.totalUsers}
          accent="purple"
        />
        <HeroCard title="Owners" value={stats.totalOwners} accent="indigo" />
        <HeroCard title="Reviews" value={stats.totalReviews} accent="emerald" />
      </div>
    </div>
  );
};

export default HeroMetrics;
