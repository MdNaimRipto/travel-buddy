import React from "react";
import PercentChart from "./charts/PercentChart";
import StatsChart from "./charts/StatsChart";
import { IHotelStatistics } from "@/types/hotelTypes";

const HotelReviewQuickInfo = ({
  statistics,
}: {
  statistics: IHotelStatistics;
}) => {
  const stats = [
    {
      bg: "from-[#8a46ff] to-[#6d44ca]",
      title: "Total Reviews",
      value: statistics?.totalReviews,
    },
    {
      bg: "from-[#24b650] to-[#36b74e]",
      title: "Positive Reviews",
      value: statistics?.totalPositiveReviews,
    },
    {
      bg: "from-[#fc4d4d] to-[#ff2f2f]",
      title: "Negative Reviews",
      value: statistics?.totalNegativeReviews,
    },
    {
      bg: "from-[#ffa3ff] to-[#d98cd0]",
      title: "Mixed Reviews",
      value: statistics?.totalMixedReviews,
    },
  ];

  const totalReviews =
    stats.find(item => item.title === "Total Reviews")?.value || 0;
  const positiveReviews =
    stats.find(item => item.title === "Positive Reviews")?.value || 0;
  const negativeReviews =
    stats.find(item => item.title === "Negative Reviews")?.value || 0;
  const mixedReviews =
    stats.find(item => item.title === "Mixed Reviews")?.value || 0;

  // Calculate percentages
  const successRate = ((positiveReviews / totalReviews) * 100).toFixed(2);
  const cancelRate = ((negativeReviews / totalReviews) * 100).toFixed(2);
  const mixedRate = ((mixedReviews / totalReviews) * 100).toFixed(2);

  const percentStats = [
    {
      color: "#24b650",
      title: "Positive",
      value: parseInt(successRate),
    },
    {
      color: "#fc4d4d",
      title: "Negative",
      value: parseInt(cancelRate),
    },
    {
      color: "#8a46ff",
      title: "Mixed",
      value: Number(mixedRate),
    },
  ];

  return (
    <div className="mt-8">
      <h4 className="font-inter mb-8 text-lg lg:text-base xl:text-xl underline inline-block text-darkGray">
        Review Statistics:
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 xl:px-4">
        {stats.map((state, i) => (
          <div
            key={i}
            className={`bg-gradient-to-l ${state.bg} rounded-lg px-5 py-6 text-white shadow-md`}
          >
            <h2 className="text-base mb-3 font-inter">{state.title}</h2>
            <p className="titleFont font-medium text-4xl">{state.value}</p>
          </div>
        ))}
      </div>
      <div className="md:px-4 mb-8 flex flex-col md:flex-row gap-4">
        <StatsChart stats={stats} />
        <PercentChart data={percentStats} />
      </div>
    </div>
  );
};

export default HotelReviewQuickInfo;
