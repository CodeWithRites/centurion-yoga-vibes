import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

export default function LoginAnalytics({ data }) {

  // GROUP BY DATE
  const chartData = Object.values(
    data.reduce((acc, cur) => {
      if (!cur.loginTime) return acc;

      const date = cur.loginTime.toDate().toDateString();
      acc[date] = acc[date] || { date, count: 0 };
      acc[date].count += 1;
      return acc;
    }, {})
  );

  return (
    <div className="pages-section">
      <h2>📊 Login Activity</h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="count"
            stroke="#2e7d32"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
