import React, { useState } from 'react';
import Sidebar from './Sidebar';
import MetricsRow from './MetricsRow';
import ThreatMap from './ThreatMap';
import RecentActivity from './RecentActivity';

const Dashboard = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="flex h-screen bg-[#1e1e2f] text-white overflow-hidden">
      <Sidebar collapsed={sidebarCollapsed} setCollapsed={setSidebarCollapsed} />

      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Security Dashboard</h1>
            <p className="text-gray-400">Real-time threat monitoring and analysis</p>
          </div>

          <MetricsRow />

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-8">
            <div className="xl:col-span-2">
              <ThreatMap />
            </div>
            <div className="xl:col-span-1">
              <RecentActivity />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
