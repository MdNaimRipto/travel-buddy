import { IAdmin } from "@/types/adminTypes";
import BookingStatsMini from "./BookingStatesMini";
import BookingsPieChart from "./BookingsBarChart";
import LatestBookingsTable from "./LatestBookingsTable";

const BookingsSection = ({ stats }: { stats: IAdmin }) => {
  return (
    <section className="space-y-6">
      <h4 className="font-inter mb-8 text-lg lg:text-base xl:text-xl underline inline-block text-darkGray">
        Booking Statistics:
      </h4>

      {/* MINI STATS + CHART */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Mini cards: 2x2 */}

        <BookingStatsMini stats={stats} />

        {/* Circular chart */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h4 className="mb-4 font-medium">Booking Status</h4>
          <BookingsPieChart stats={stats} />
        </div>
      </div>

      {/* TABLE FULL WIDTH */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h4 className="mb-4 font-medium">Latest Bookings</h4>
        <LatestBookingsTable data={stats.bookingsInfo.slice(0, 3)} />
      </div>
    </section>
  );
};

export default BookingsSection;
