export const KpiCard = ({ title, value }: { title: string; value: number }) => (
  <div className="rounded-xl bg-white p-6 shadow-sm border">
    <p className="text-sm text-gray-500 mb-2">{title}</p>
    <h3 className="text-3xl font-semibold text-gray-900">{value}</h3>
  </div>
);

export const StatCard = ({
  title,
  value,
  percent,
  color,
}: {
  title: string;
  value: number;
  percent: string;
  color: "green" | "yellow" | "red" | "purple";
}) => {
  const colorMap = {
    green: "text-green-600 bg-green-50",
    yellow: "text-yellow-600 bg-yellow-50",
    red: "text-red-600 bg-red-50",
    purple: "text-purple-600 bg-purple-50",
  };

  return (
    <div className={`rounded-xl p-6 ${colorMap[color]} border`}>
      <p className="text-sm mb-2">{title}</p>
      <h3 className="text-3xl font-semibold">{value}</h3>
      <p className="mt-2 text-xs opacity-80">{percent}% of total bookings</p>
    </div>
  );
};

export const ReviewCard = ({
  title,
  value,
  color,
}: {
  title: string;
  value: number;
  color: "blue" | "green" | "red";
}) => {
  const colorMap = {
    blue: "bg-blue-50 text-blue-700",
    green: "bg-green-50 text-green-700",
    red: "bg-red-50 text-red-700",
  };

  return (
    <div className={`rounded-xl p-6 ${colorMap[color]} border`}>
      <p className="text-sm mb-2">{title}</p>
      <h3 className="text-3xl font-semibold">{value}</h3>
    </div>
  );
};

type HeroCardProps = {
  title: string;
  value: number;
  sub?: string;
  accent: "blue" | "green" | "yellow" | "purple" | "indigo" | "emerald";
};

const accentMap = {
  blue: "border-blue-500 text-blue-600 bg-blue-100/40",
  green: "border-green-500 text-green-600 bg-green-100/40",
  yellow: "border-yellow-500 text-yellow-600 bg-yellow-100/40",
  purple: "border-purple-500 text-purple-600 bg-purple-100/40",
  indigo: "border-indigo-500 text-indigo-600 bg-indigo-100/40",
  emerald: "border-emerald-500 text-emerald-600 bg-emerald-100/40",
  red: "border-red-500 text-red-600 bg-red-100/40",
};

export const HeroCard = ({ title, value, sub, accent }: HeroCardProps) => {
  return (
    <div
      className={`relative rounded-xl bg-white p-6 border-l-4 shadow-sm ${accentMap[accent]}`}
    >
      <p className="text-sm text-gray-500 mb-2">{title}</p>

      <div className="flex items-end justify-between">
        <h3 className="text-3xl font-semibold text-gray-900">{value}</h3>
      </div>

      {sub && <p className="mt-2 text-xs font-medium opacity-80">{sub}</p>}
    </div>
  );
};
