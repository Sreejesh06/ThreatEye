import React from 'react';
import {
  LayoutDashboard,
  AlertTriangle,
  Shield,
  CheckSquare,
  Lock,
  Boxes,
  HelpCircle,
  Plus,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const Sidebar = ({ collapsed, setCollapsed }) => {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', active: true },
    { icon: AlertTriangle, label: 'Findings', active: false },
    { icon: Shield, label: 'Incidents', active: false },
    { icon: CheckSquare, label: 'Compliance', active: false },
    { icon: Lock, label: 'Vault', active: false },
    { icon: Boxes, label: 'Integrations', active: false },
    { icon: HelpCircle, label: 'Help & Docs', active: false },
  ];

  return (
    <aside
      className={`bg-[#181825] border-r border-gray-800 transition-all duration-300 flex flex-col ${
        collapsed ? 'w-20' : 'w-64'
      }`}
    >
      <div className="p-6 border-b border-gray-800 flex items-center justify-between">
        {!collapsed && (
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5" />
            </div>
            <span className="font-bold text-lg">CyberDefender</span>
          </div>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1 hover:bg-gray-800 rounded-lg transition-colors"
        >
          {collapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
        </button>
      </div>

      <div className="p-4">
        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors">
          <Plus className="w-5 h-5" />
          {!collapsed && <span className="font-semibold">New Task</span>}
        </button>
      </div>

      <nav className="flex-1 px-4 py-2">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-colors ${
              item.active
                ? 'bg-orange-500/10 text-orange-500'
                : 'text-gray-400 hover:bg-gray-800 hover:text-white'
            }`}
          >
            <item.icon className="w-5 h-5 flex-shrink-0" />
            {!collapsed && <span className="text-sm font-medium">{item.label}</span>}
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-800">
        <div className={`flex items-center gap-3 ${collapsed ? 'justify-center' : ''}`}>
          <div className="w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center text-sm font-semibold">
            AD
          </div>
          {!collapsed && (
            <div className="flex-1">
              <p className="text-sm font-medium">Admin User</p>
              <p className="text-xs text-gray-400">admin@cyberdefender.io</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
