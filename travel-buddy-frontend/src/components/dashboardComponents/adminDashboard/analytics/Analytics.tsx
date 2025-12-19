import Loader from "@/components/common/loader/Loader";
import { useGetAdminStatisticsQuery } from "@/redux/features/adminApis";
import { IAdmin } from "@/types/adminTypes";
import HeroMetrics from "./HeroMetrics";
import BookingsSection from "./booking/BookingsSection";
import UsersSection from "./users/UsersSection";

const AnalyticsMain = () => {
  const { data, isLoading } = useGetAdminStatisticsQuery({});

  if (isLoading) return <Loader />;

  const stats = data?.data as IAdmin;

  const bookingRate = (value: number) =>
    stats.totalBookings
      ? ((value / stats.totalBookings) * 100).toFixed(1)
      : "0";

  return (
    <div className="space-y-14">
      {/* HERO METRICS */}
      <HeroMetrics stats={stats} />

      {/* BOOKINGS */}
      <BookingsSection stats={stats} />

      {/* USERS */}
      <UsersSection stats={stats} />
    </div>
  );
};

export default AnalyticsMain;
