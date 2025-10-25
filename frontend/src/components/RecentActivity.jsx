import React from 'react';
import {
  AlertTriangle,
  AlertCircle,
  CheckCircle,
  Download,
  Shield,
  Clock,
  FileText
} from 'lucide-react';

const RecentActivity = () => {
  const activities = [
    {
      id: 1,
      type: 'critical',
      icon: AlertTriangle,
      title: 'Critical vulnerability detected',
      description: 'SQL injection vulnerability in payment gateway',
      time: '2 minutes ago',
      color: 'text-red-400',
      bgColor: 'bg-red-400/10',
    },
    {
      id: 2,
      type: 'warning',
      icon: Clock,
      title: 'SLA breach',
      description: 'Incident #1247 exceeded response time SLA',
      time: '15 minutes ago',
      color: 'text-orange-400',
      bgColor: 'bg-orange-400/10',
    },
    {
      id: 3,
      type: 'success',
      icon: CheckCircle,
      title: 'Patch deployed successfully',
      description: 'Security patch applied to production servers',
      time: '1 hour ago',
      color: 'text-green-400',
      bgColor: 'bg-green-400/10',
    },
    {
      id: 4,
      type: 'info',
      icon: Download,
      title: 'Export completed',
      description: 'Compliance report Q4 2024 exported',
      time: '2 hours ago',
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
    },
    {
      id: 5,
      type: 'warning',
      icon: Shield,
      title: 'Firewall rule updated',
      description: 'New rule added to block suspicious IPs',
      time: '3 hours ago',
      color: 'text-orange-400',
      bgColor: 'bg-orange-400/10',
    },
    {
      id: 6,
      type: 'info',
      icon: FileText,
      title: 'Audit log generated',
      description: 'Monthly security audit completed',
      time: '5 hours ago',
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
    },
    {
      id: 7,
      type: 'critical',
      icon: AlertCircle,
      title: 'DDoS attack mitigated',
      description: 'Automated defense blocked 2.4M requests',
      time: '6 hours ago',
      color: 'text-red-400',
      bgColor: 'bg-red-400/10',
    },
  ];

  return (
    <div className="bg-[#252538] rounded-xl p-6 border border-gray-800 h-full">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">Recent Activity</h2>
        <button className="text-sm text-gray-400 hover:text-white transition-colors">
          View All
        </button>
      </div>

      <div className="space-y-3 overflow-y-auto pr-2" style={{ maxHeight: '600px' }}>
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="group p-4 rounded-lg bg-[#1e1e2f] border border-gray-800 hover:border-gray-700 transition-all cursor-pointer"
          >
            <div className="flex gap-4">
              <div className={`${activity.bgColor} ${activity.color} rounded-lg p-2 h-fit`}>
                <activity.icon className="w-5 h-5" />
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-sm mb-1 group-hover:text-orange-400 transition-colors">
                  {activity.title}
                </h3>
                <p className="text-xs text-gray-400 mb-2 line-clamp-2">
                  {activity.description}
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Clock className="w-3 h-3" />
                  <span>{activity.time}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
