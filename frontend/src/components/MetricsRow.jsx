import React from 'react';
import { TrendingUp, TrendingDown, Activity, Clock } from 'lucide-react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

const MetricCard = ({ title, value, trend, trendDirection, color, chartData, unit = '' }) => {
  const TrendIcon = trendDirection === 'up' ? TrendingUp : TrendingDown;
  const trendColor = trendDirection === 'up' ? 'text-red-400' : 'text-green-400';

  return (
    <div className="bg-[#252538] rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-colors">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-gray-400 text-sm mb-1">{title}</p>
          <h3 className="text-3xl font-bold">
            {value}
            {unit && <span className="text-lg text-gray-400 ml-1">{unit}</span>}
          </h3>
        </div>
        {trend !== undefined && (
          <div className={`flex items-center gap-1 ${trendColor} text-sm`}>
            <TrendIcon className="w-4 h-4" />
            <span>{trend}%</span>
          </div>
        )}
      </div>

      {chartData && (
        <ResponsiveContainer width="100%" height={50}>
          <LineChart data={chartData}>
            <Line
              type="monotone"
              dataKey="value"
              stroke={color}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

const MetricsRow = () => {
  const vulnerabilityData = Array.from({ length: 7 }, (_, i) => ({
    value: Math.floor(Math.random() * 20) + 120
  }));

  const incidentData = Array.from({ length: 7 }, (_, i) => ({
    value: Math.floor(Math.random() * 5) + 10
  }));

  const complianceData = Array.from({ length: 7 }, (_, i) => ({
    value: Math.floor(Math.random() * 10) + 85
  }));

  const remediateData = Array.from({ length: 7 }, (_, i) => ({
    value: Math.floor(Math.random() * 2) + 3
  }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      <MetricCard
        title="Open Vulnerabilities"
        value={147}
        trend={12}
        trendDirection="up"
        color="#FF6B35"
        chartData={vulnerabilityData}
      />
      <MetricCard
        title="Active Incidents"
        value={23}
        trend={8}
        trendDirection="down"
        color="#FF6B35"
        chartData={incidentData}
      />
      <MetricCard
        title="Compliance Score"
        value={94}
        unit="%"
        trend={5}
        trendDirection="down"
        color="#3ACF91"
        chartData={complianceData}
      />
      <MetricCard
        title="Time to Remediate"
        value={4.2}
        unit="hrs"
        trend={15}
        trendDirection="down"
        color="#3ACF91"
        chartData={remediateData}
      />
    </div>
  );
};

export default MetricsRow;
