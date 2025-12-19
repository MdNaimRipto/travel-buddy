import { IAdmin } from "@/types/adminTypes";
import UsersStatsMini from "./UserStatsMini";
import UsersBarChart from "./UsersBarChart";
import LatestUsersTable from "./LatestUsersTable";

const UsersSection = ({ stats }: { stats: IAdmin }) => {
  return (
    <section className="space-y-6">
      <h4 className="font-inter mb-8 text-lg lg:text-base xl:text-xl underline inline-block text-darkGray">
        Users Statistics:
      </h4>

      {/* MINI STATS + CHART */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 2 mini cards */}

        <UsersStatsMini stats={stats} />

        {/* Vertical bar chart */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h4 className="mb-4 font-medium">User Distribution</h4>
          <UsersBarChart stats={stats} />
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h4 className="mb-4 font-medium">Latest Users</h4>
        <LatestUsersTable />
      </div>
    </section>
  );
};

export default UsersSection;
