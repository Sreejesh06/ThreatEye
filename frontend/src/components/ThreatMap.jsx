import React from 'react';
import { MapPin } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from 'recharts';

const ThreatMap = () => {
  const threatLocations = [
    { name: 'United States', count: 342, lat: 37, lng: -95 },
    { name: 'China', count: 287, lat: 35, lng: 105 },
    { name: 'Russia', count: 198, lat: 60, lng: 100 },
    { name: 'Germany', count: 156, lat: 51, lng: 10 },
    { name: 'Brazil', count: 134, lat: -10, lng: -55 },
    { name: 'India', count: 112, lat: 20, lng: 77 },
  ];

  const hotspots = [
    { x: 25, y: 35, size: 'large', intensity: 0.9 },
    { x: 65, y: 25, size: 'large', intensity: 0.8 },
    { x: 75, y: 40, size: 'medium', intensity: 0.7 },
    { x: 15, y: 55, size: 'small', intensity: 0.5 },
    { x: 35, y: 70, size: 'medium', intensity: 0.6 },
    { x: 55, y: 60, size: 'small', intensity: 0.4 },
  ];

  const getSizeClass = (size) => {
    switch (size) {
      case 'large': return 'w-8 h-8';
      case 'medium': return 'w-6 h-6';
      case 'small': return 'w-4 h-4';
      default: return 'w-6 h-6';
    }
  };

  const getOpacity = (intensity) => {
    return intensity;
  };

  return (
    <div className="bg-[#252538] rounded-xl p-6 border border-gray-800">
      <h2 className="text-xl font-bold mb-6">Global Threat Map</h2>

      <div className="relative bg-[#1e1e2f] rounded-lg p-8 mb-6 overflow-hidden" style={{ height: '400px' }}>
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%" viewBox="0 0 1000 500">
            <path d="M 100 150 Q 150 100 200 150 L 250 130 L 300 160 L 350 140 L 400 150 L 450 120 L 500 140 L 550 130 L 600 150 L 650 140 L 700 160 L 750 150 L 800 140 L 850 130 L 900 150"
                  stroke="#4a5568" strokeWidth="1" fill="none" />
            <path d="M 80 200 L 150 180 L 200 210 L 280 190 L 350 220 L 420 200 L 500 230 L 600 210 L 700 240 L 800 220 L 900 230"
                  stroke="#4a5568" strokeWidth="1" fill="none" />
            <path d="M 100 280 Q 200 260 300 280 L 400 290 L 500 270 L 600 290 L 700 280 L 800 300 L 900 290"
                  stroke="#4a5568" strokeWidth="1" fill="none" />
            <ellipse cx="300" cy="200" rx="80" ry="60" stroke="#4a5568" strokeWidth="1" fill="none" />
            <ellipse cx="700" cy="180" rx="70" ry="50" stroke="#4a5568" strokeWidth="1" fill="none" />
            <ellipse cx="150" cy="320" rx="60" ry="40" stroke="#4a5568" strokeWidth="1" fill="none" />
          </svg>
        </div>

        {hotspots.map((hotspot, index) => (
          <div
            key={index}
            className={`absolute ${getSizeClass(hotspot.size)} animate-pulse`}
            style={{
              left: `${hotspot.x}%`,
              top: `${hotspot.y}%`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <div
              className="w-full h-full rounded-full bg-orange-500"
              style={{
                opacity: getOpacity(hotspot.intensity),
                boxShadow: `0 0 ${20 * hotspot.intensity}px rgba(255, 107, 53, ${hotspot.intensity})`,
              }}
            />
          </div>
        ))}
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-semibold text-gray-400 mb-3">THREAT DISTRIBUTION BY REGION</h3>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={threatLocations} layout="vertical">
            <XAxis type="number" stroke="#666" fontSize={12} />
            <YAxis dataKey="name" type="category" stroke="#666" fontSize={12} width={100} />
            <Bar dataKey="count" radius={[0, 4, 4, 0]}>
              {threatLocations.map((entry, index) => (
                <Cell key={`cell-${index}`} fill="#FF6B35" />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ThreatMap;
