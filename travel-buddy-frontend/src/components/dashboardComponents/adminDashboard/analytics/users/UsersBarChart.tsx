import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { IAdmin } from "@/types/adminTypes";

const UsersBarChart = ({ stats }: { stats: IAdmin }) => {
  const data = [
    {
      name: "Total",
      value: stats.totalUsers,
      fill: "#6366f1",
    },
    {
      name: "Owners",
      value: stats.totalOwners,
      fill: "#4f46e5",
    },
    {
      name: "Customers",
      value: stats.totalCustomers,
      fill: "#a855f7",
    },
  ];

  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" radius={[6, 6, 0, 0]} barSize={48} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UsersBarChart;
