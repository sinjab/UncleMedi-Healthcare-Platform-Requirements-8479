import React from 'react';
import { motion } from 'framer-motion';
import { useAuthStore } from '../../store/authStore';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiUser, FiBell, FiSettings, FiLogOut, FiHeart } = FiIcons;

const Header = ({ title, subtitle }) => {
  const { user, userType, logout } = useAuthStore();

  const userTypeColors = {
    patient: 'bg-primary-500',
    caregiver: 'bg-secondary-500',
    partner: 'bg-accent-500',
    admin: 'bg-gray-500'
  };

  const userTypeLabels = {
    patient: 'Patient',
    caregiver: 'Caregiver',
    partner: 'Partner',
    admin: 'Administrator'
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Title */}
          <div className="flex items-center space-x-4">
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-2 rounded-xl">
                <SafeIcon icon={FiHeart} className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">UncleMedi</h1>
                <p className="text-xs text-gray-500">{userTypeLabels[userType]}</p>
              </div>
            </motion.div>
            
            {title && (
              <div className="hidden md:block border-l border-gray-200 pl-4">
                <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
                {subtitle && (
                  <p className="text-sm text-gray-600">{subtitle}</p>
                )}
              </div>
            )}
          </div>

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <SafeIcon icon={FiBell} className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-error-500 text-white text-xs rounded-full flex items-center justify-center">
                3
              </span>
            </motion.button>

            {/* Settings */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <SafeIcon icon={FiSettings} className="h-5 w-5" />
            </motion.button>

            {/* User Profile */}
            <div className="flex items-center space-x-3">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-medium text-gray-900">{user?.name}</p>
                <p className="text-xs text-gray-500">{user?.email}</p>
              </div>
              
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`h-10 w-10 rounded-full ${userTypeColors[userType]} flex items-center justify-center cursor-pointer`}
                >
                  <SafeIcon icon={FiUser} className="h-5 w-5 text-white" />
                </motion.div>
              </div>
            </div>

            {/* Logout */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={logout}
              className="p-2 text-gray-600 hover:text-error-600 hover:bg-error-50 rounded-lg transition-colors"
            >
              <SafeIcon icon={FiLogOut} className="h-5 w-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;