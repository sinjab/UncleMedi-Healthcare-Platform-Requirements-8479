import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { 
  FiDatabase, FiUsers, FiShield, FiTrendingUp,
  FiServer, FiAlertTriangle, FiCheckCircle, FiClock,
  FiActivity, FiDollarSign, FiGlobe, FiSettings
} = FiIcons;

const Dashboard = () => {
  const systemMetrics = [
    { label: 'Total Users', value: '12,847', change: '+8.2%', color: 'primary' },
    { label: 'Active Partners', value: '47', change: '+12.1%', color: 'success' },
    { label: 'Monthly Revenue', value: '$48.2K', change: '+15.7%', color: 'warning' },
    { label: 'System Uptime', value: '99.9%', change: '+0.1%', color: 'blue' },
  ];

  const systemAlerts = [
    { id: 1, type: 'warning', message: 'Database backup completed with warnings', time: '2 hours ago' },
    { id: 2, type: 'info', message: 'New partner application received', time: '4 hours ago' },
    { id: 3, type: 'success', message: 'System update deployed successfully', time: '6 hours ago' },
  ];

  const recentActivity = [
    { id: 1, action: 'New partner onboarded', details: 'City Hospital Group', time: '1 hour ago' },
    { id: 2, action: 'User support ticket resolved', details: 'Medication sync issue', time: '3 hours ago' },
    { id: 3, action: 'System maintenance completed', details: 'Database optimization', time: '5 hours ago' },
    { id: 4, action: 'New feature deployed', details: 'AI chat improvements', time: '1 day ago' },
  ];

  const getColorClasses = (color) => {
    const colors = {
      primary: 'from-primary-50 to-primary-100 border-primary-200 text-primary-700',
      success: 'from-success-50 to-success-100 border-success-200 text-success-700',
      warning: 'from-warning-50 to-warning-100 border-warning-200 text-warning-700',
      blue: 'from-blue-50 to-blue-100 border-blue-200 text-blue-700',
    };
    return colors[color] || colors.primary;
  };

  const getAlertIcon = (type) => {
    switch (type) {
      case 'warning': return FiAlertTriangle;
      case 'success': return FiCheckCircle;
      case 'info': return FiDatabase;
      default: return FiAlertTriangle;
    }
  };

  const getAlertColor = (type) => {
    switch (type) {
      case 'warning': return 'bg-warning-100 text-warning-800';
      case 'success': return 'bg-success-100 text-success-800';
      case 'info': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-gray-800 to-gray-600 rounded-2xl p-6 text-white"
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-2">System Administration 🛠️</h1>
            <p className="text-gray-300 mb-4">
              Managing UncleMedi platform operations and performance
            </p>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiServer} className="h-5 w-5" />
                <span className="text-sm">All Systems Operational</span>
              </div>
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiGlobe} className="h-5 w-5" />
                <span className="text-sm">Global Platform</span>
              </div>
            </div>
          </div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="bg-white/20 p-4 rounded-full"
          >
            <SafeIcon icon={FiSettings} className="h-8 w-8" />
          </motion.div>
        </div>
      </motion.div>

      {/* System Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {systemMetrics.map((metric, index) => (
          <Card key={index} className={`bg-gradient-to-br ${getColorClasses(metric.color)}`}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium opacity-80">{metric.label}</p>
                  <p className="text-2xl font-bold">{metric.value}</p>
                  <p className="text-xs opacity-70">{metric.change} vs last month</p>
                </div>
                <div className={`bg-${metric.color}-500 p-3 rounded-full`}>
                  <SafeIcon 
                    icon={index === 0 ? FiUsers : index === 1 ? FiShield : index === 2 ? FiDollarSign : FiTrendingUp} 
                    className="h-6 w-6 text-white" 
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* System Alerts */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <SafeIcon icon={FiAlertTriangle} className="h-5 w-5 text-warning-600" />
              <span>System Alerts</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {systemAlerts.map((alert) => (
                <motion.div
                  key={alert.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`p-3 rounded-lg ${getAlertColor(alert.type)}`}
                >
                  <div className="flex items-start space-x-3">
                    <SafeIcon icon={getAlertIcon(alert.type)} className="h-5 w-5 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{alert.message}</p>
                      <p className="text-xs opacity-70 mt-1">{alert.time}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <SafeIcon icon={FiActivity} className="h-5 w-5 text-primary-600" />
              <span>Recent Activity</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentActivity.map((activity) => (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg"
                >
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                    <p className="text-xs text-gray-600">{activity.details}</p>
                    <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* System Status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <SafeIcon icon={FiServer} className="h-5 w-5 text-primary-600" />
            <span>System Status</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-success-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <SafeIcon icon={FiCheckCircle} className="h-8 w-8 text-success-600" />
              </div>
              <h3 className="font-medium text-gray-900 mb-1">API Services</h3>
              <p className="text-sm text-gray-600">All systems operational</p>
              <Badge variant="success" className="mt-2">Healthy</Badge>
            </div>
            
            <div className="text-center">
              <div className="bg-success-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <SafeIcon icon={FiDatabase} className="h-8 w-8 text-success-600" />
              </div>
              <h3 className="font-medium text-gray-900 mb-1">Database</h3>
              <p className="text-sm text-gray-600">Performance optimal</p>
              <Badge variant="success" className="mt-2">Healthy</Badge>
            </div>
            
            <div className="text-center">
              <div className="bg-warning-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <SafeIcon icon={FiClock} className="h-8 w-8 text-warning-600" />
              </div>
              <h3 className="font-medium text-gray-900 mb-1">Background Jobs</h3>
              <p className="text-sm text-gray-600">Minor delays detected</p>
              <Badge variant="warning" className="mt-2">Monitoring</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <SafeIcon icon={FiSettings} className="h-5 w-5 text-primary-600" />
            <span>Admin Actions</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <Button className="h-20 flex-col space-y-2">
              <SafeIcon icon={FiUsers} className="h-6 w-6" />
              <span className="text-sm">Manage Users</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2">
              <SafeIcon icon={FiShield} className="h-6 w-6" />
              <span className="text-sm">Partners</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2">
              <SafeIcon icon={FiTrendingUp} className="h-6 w-6" />
              <span className="text-sm">Analytics</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2">
              <SafeIcon icon={FiDatabase} className="h-6 w-6" />
              <span className="text-sm">Database</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2">
              <SafeIcon icon={FiSettings} className="h-6 w-6" />
              <span className="text-sm">Settings</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;