import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { IAdmin } from "@/types/adminTypes";

const BookingsBarChart = ({ stats }: { stats: IAdmin }) => {
  const data = [
    {
      name: "Total",
      value: stats.totalBookings,
      fill: "#8b5cf6", // purple
    },
    {
      name: "Successful",
      value: stats.totalSuccessfulBookings,
      fill: "#22c55e", // green
    },
    {
      name: "Pending",
      value: stats.totalOnboardBookings,
      fill: "#eab308", // yellow
    },
    {
      name: "Canceled",
      value: stats.totalCancelledBookings,
      fill: "#ef4444", // red
    },
  ];

  return (
    <div className="h-56">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 10, right: 20, left: 20, bottom: 10 }}
        >
          <XAxis type="number" hide />
          <YAxis
            type="category"
            dataKey="name"
            axisLine={false}
            tickLine={false}
            width={80}
          />
          <Tooltip cursor={{ fill: "rgba(0,0,0,0.04)" }} />
          <Bar dataKey="value" radius={[0, 6, 6, 0]} barSize={24}>
            {data.map((entry, index) => (
              <Cell key={index} fill={entry.fill} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BookingsBarChart;
