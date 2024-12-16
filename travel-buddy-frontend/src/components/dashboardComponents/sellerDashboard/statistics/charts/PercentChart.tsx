import React, { useEffect, useState } from "react";
import { PieChart, Pie, ResponsiveContainer, Cell } from "recharts";

const RADIAN = Math.PI / 180;

interface RenderLabelProps {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  index: number;
}

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
  payload,
}: RenderLabelProps & { payload: { title: string } }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <g>
      <text
        x={x}
        y={y}
        fill="white"
        fontSize={16}
        fontWeight={500}
        textAnchor="middle"
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
      <text
        x={x}
        y={y + 24}
        fill="#fff"
        fontSize={16}
        fontWeight={500}
        textAnchor="middle"
        dominantBaseline="central"
      >
        {payload.title}
      </text>
    </g>
  );
};

const PercentChart = ({ data }: { data: any }) => {
  const [outerRadius, setOuterRadius] = useState(150); // Default radius for regular devices

  useEffect(() => {
    const updateRadius = () => {
      if (window.innerWidth < 1280) {
        setOuterRadius(120); // Smaller radius for small devices
      } else {
        setOuterRadius(150); // Regular radius for larger screens
      }
    };

    // Set radius on initial load
    updateRadius();

    // Add resize event listener
    window.addEventListener("resize", updateRadius);

    // Cleanup event listener
    return () => window.removeEventListener("resize", updateRadius);
  }, []);
  return (
    <div className="w-full md:w-[35%] h-[500px]">
      <h4 className="font-inter mb-0 md:mb-8 text-lg lg:text-base xl:text-xl underline inline-block text-darkGray">
        Overall Percentage:
      </h4>
      <ResponsiveContainer width="100%" height="70%">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={outerRadius}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry: any, index: number) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PercentChart;
