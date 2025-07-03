import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuthStore } from '../../store/authStore';
import Button from '../ui/Button';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMail, FiLock, FiHeart, FiUser, FiUsers, FiBuilding, FiShield } = FiIcons;

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    userType: 'patient'
  });
  const { login, isLoading } = useAuthStore();

  const userTypes = [
    { value: 'patient', label: 'Patient', icon: FiUser, color: 'bg-primary-500' },
    { value: 'caregiver', label: 'Caregiver', icon: FiUsers, color: 'bg-secondary-500' },
    { value: 'partner', label: 'Partner', icon: FiBuilding, color: 'bg-accent-500' },
    { value: 'admin', label: 'Admin', icon: FiShield, color: 'bg-gray-500' }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(formData.email, formData.password, formData.userType);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-secondary-50 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full space-y-8"
      >
        {/* Logo and Header */}
        <div className="text-center">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mx-auto h-16 w-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mb-4"
          >
            <SafeIcon icon={FiHeart} className="h-8 w-8 text-white" />
          </motion.div>
          <h2 className="text-3xl font-bold text-gray-900">Welcome to UncleMedi</h2>
          <p className="mt-2 text-sm text-gray-600">
            Your caring companion for health management
          </p>
        </div>

        {/* Login Form */}
        <motion.form 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 space-y-6 bg-white p-8 rounded-2xl shadow-lg"
          onSubmit={handleSubmit}
        >
          {/* User Type Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Select User Type
            </label>
            <div className="grid grid-cols-2 gap-3">
              {userTypes.map((type) => (
                <motion.button
                  key={type.value}
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setFormData({...formData, userType: type.value})}
                  className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                    formData.userType === type.value
                      ? 'border-primary-500 bg-primary-50 text-primary-700'
                      : 'border-gray-200 hover:border-gray-300 text-gray-700'
                  }`}
                >
                  <div className="flex flex-col items-center space-y-2">
                    <div className={`p-2 rounded-lg ${
                      formData.userType === type.value ? type.color : 'bg-gray-100'
                    }`}>
                      <SafeIcon 
                        icon={type.icon} 
                        className={`h-4 w-4 ${
                          formData.userType === type.value ? 'text-white' : 'text-gray-500'
                        }`} 
                      />
                    </div>
                    <span className="text-sm font-medium">{type.label}</span>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <div className="mt-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <SafeIcon icon={FiMail} className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="mt-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <SafeIcon icon={FiLock} className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Enter your password"
              />
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            size="lg"
            className="w-full"
            loading={isLoading}
          >
            Sign In
          </Button>

          {/* Demo Credentials */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-2">Demo Credentials:</p>
            <div className="text-xs text-gray-500 space-y-1">
              <p>Email: demo@unclemedi.com</p>
              <p>Password: demo123</p>
              <p>Select any user type above</p>
            </div>
          </div>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default LoginForm;