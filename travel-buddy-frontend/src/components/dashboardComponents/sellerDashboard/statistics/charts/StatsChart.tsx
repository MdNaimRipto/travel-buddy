import { colorConfig } from "@/configs/colorConfig";
import React from "react";
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const StatsChart = ({ stats }: { stats: any }) => {
  return (
    <div className="w-full md:w-[63%] h-[500px]">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          layout="vertical"
          width={500}
          height={400}
          data={stats}
          margin={{
            top: 40,
            left: 5,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" />
          <YAxis
            dataKey="title"
            type="category"
            scale="band"
            tick={{
              fontSize: 12,
            }}
          />
          <Tooltip />
          <Legend />
          <Bar
            fill={colorConfig.gray}
            dataKey="value"
            name="Booking Statistics"
            barSize={30}
          ></Bar>
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StatsChart;
