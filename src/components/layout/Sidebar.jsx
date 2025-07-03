import React from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import { cn } from '../../utils/cn';

const { 
  FiHome, FiPill, FiCalendar, FiUsers, FiBarChart3, 
  FiSettings, FiAward, FiMessageCircle, FiHelpCircle,
  FiShield, FiDollarSign, FiTrendingUp, FiDatabase
} = FiIcons;

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { userType } = useAuthStore();

  const navigationItems = {
    patient: [
      { name: 'Dashboard', path: '/patient', icon: FiHome },
      { name: 'Medications', path: '/patient/medications', icon: FiPill },
      { name: 'Appointments', path: '/patient/appointments', icon: FiCalendar },
      { name: 'Rewards', path: '/patient/rewards', icon: FiAward },
      { name: 'AI Assistant', path: '/patient/chat', icon: FiMessageCircle },
      { name: 'Settings', path: '/patient/settings', icon: FiSettings },
    ],
    caregiver: [
      { name: 'Dashboard', path: '/caregiver', icon: FiHome },
      { name: 'Patients', path: '/caregiver/patients', icon: FiUsers },
      { name: 'Analytics', path: '/caregiver/analytics', icon: FiBarChart3 },
      { name: 'Alerts', path: '/caregiver/alerts', icon: FiShield },
      { name: 'Reports', path: '/caregiver/reports', icon: FiTrendingUp },
      { name: 'Settings', path: '/caregiver/settings', icon: FiSettings },
    ],
    partner: [
      { name: 'Dashboard', path: '/partner', icon: FiHome },
      { name: 'Campaigns', path: '/partner/campaigns', icon: FiTrendingUp },
      { name: 'Analytics', path: '/partner/analytics', icon: FiBarChart3 },
      { name: 'Patients', path: '/partner/patients', icon: FiUsers },
      { name: 'Billing', path: '/partner/billing', icon: FiDollarSign },
      { name: 'Settings', path: '/partner/settings', icon: FiSettings },
    ],
    admin: [
      { name: 'Dashboard', path: '/admin', icon: FiHome },
      { name: 'Users', path: '/admin/users', icon: FiUsers },
      { name: 'Partners', path: '/admin/partners', icon: FiShield },
      { name: 'Analytics', path: '/admin/analytics', icon: FiBarChart3 },
      { name: 'System', path: '/admin/system', icon: FiDatabase },
      { name: 'Settings', path: '/admin/settings', icon: FiSettings },
    ]
  };

  const items = navigationItems[userType] || [];

  return (
    <aside className="bg-white border-r border-gray-200 w-64 flex-shrink-0 overflow-y-auto">
      <div className="h-full px-3 py-4 space-y-2">
        {items.map((item, index) => {
          const isActive = location.pathname === item.path;
          
          return (
            <motion.button
              key={item.name}
              onClick={() => navigate(item.path)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={cn(
                'w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-left transition-all duration-200',
                isActive 
                  ? 'bg-primary-50 text-primary-700 border-r-2 border-primary-500' 
                  : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
              )}
            >
              <SafeIcon 
                icon={item.icon} 
                className={cn(
                  'h-5 w-5 flex-shrink-0',
                  isActive ? 'text-primary-600' : 'text-gray-500'
                )} 
              />
              <span className="font-medium">{item.name}</span>
            </motion.button>
          );
        })}

        {/* Help Section */}
        <div className="pt-4 mt-4 border-t border-gray-200">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-left text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
          >
            <SafeIcon icon={FiHelpCircle} className="h-5 w-5 text-gray-500" />
            <span className="font-medium">Help & Support</span>
          </motion.button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;