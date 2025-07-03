import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { 
  FiUsers, FiAlertTriangle, FiCheckCircle, FiClock,
  FiTrendingUp, FiHeart, FiPhone, FiMessageCircle,
  FiCalendar, FiActivity, FiShield, FiEye
} = FiIcons;

const Dashboard = () => {
  const patients = [
    { id: 1, name: 'Faisal Ahmed', age: 63, adherence: 92, status: 'excellent', lastCheck: '2 hours ago', alerts: 0 },
    { id: 2, name: 'Amina Hassan', age: 58, adherence: 78, status: 'good', lastCheck: '5 hours ago', alerts: 1 },
    { id: 3, name: 'Omar Ali', age: 71, adherence: 65, status: 'needs-attention', lastCheck: '1 day ago', alerts: 3 },
    { id: 4, name: 'Fatima Said', age: 45, adherence: 88, status: 'good', lastCheck: '3 hours ago', alerts: 0 },
  ];

  const recentAlerts = [
    { id: 1, patient: 'Omar Ali', type: 'missed-dose', message: 'Missed morning medication', time: '30 min ago', severity: 'high' },
    { id: 2, patient: 'Amina Hassan', type: 'appointment', message: 'Appointment reminder needed', time: '2 hours ago', severity: 'medium' },
    { id: 3, patient: 'Faisal Ahmed', type: 'side-effect', message: 'Reported mild dizziness', time: '4 hours ago', severity: 'low' },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'excellent': return 'text-success-600 bg-success-50';
      case 'good': return 'text-primary-600 bg-primary-50';
      case 'needs-attention': return 'text-warning-600 bg-warning-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getAlertSeverityColor = (severity) => {
    switch (severity) {
      case 'high': return 'bg-error-100 border-error-200 text-error-800';
      case 'medium': return 'bg-warning-100 border-warning-200 text-warning-800';
      case 'low': return 'bg-blue-100 border-blue-200 text-blue-800';
      default: return 'bg-gray-100 border-gray-200 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-secondary-500 to-primary-500 rounded-2xl p-6 text-white"
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-2">Welcome back, Aisha! 👋</h1>
            <p className="text-secondary-100 mb-4">
              Caring for 4 patients with dedication and love
            </p>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiUsers} className="h-5 w-5" />
                <span className="text-sm">4 Active Patients</span>
              </div>
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiShield} className="h-5 w-5" />
                <span className="text-sm">3 Alerts Today</span>
              </div>
            </div>
          </div>
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="bg-white/20 p-4 rounded-full"
          >
            <SafeIcon icon={FiHeart} className="h-8 w-8" />
          </motion.div>
        </div>
      </motion.div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-success-50 to-success-100 border-success-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-success-600">Overall Adherence</p>
                <p className="text-2xl font-bold text-success-700">81%</p>
              </div>
              <div className="bg-success-500 p-3 rounded-full">
                <SafeIcon icon={FiTrendingUp} className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-primary-50 to-primary-100 border-primary-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-primary-600">Active Patients</p>
                <p className="text-2xl font-bold text-primary-700">4</p>
              </div>
              <div className="bg-primary-500 p-3 rounded-full">
                <SafeIcon icon={FiUsers} className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-warning-50 to-warning-100 border-warning-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-warning-600">Pending Alerts</p>
                <p className="text-2xl font-bold text-warning-700">3</p>
              </div>
              <div className="bg-warning-500 p-3 rounded-full">
                <SafeIcon icon={FiAlertTriangle} className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-600">Appointments</p>
                <p className="text-2xl font-bold text-blue-700">2</p>
              </div>
              <div className="bg-blue-500 p-3 rounded-full">
                <SafeIcon icon={FiCalendar} className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Patient Overview */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <SafeIcon icon={FiUsers} className="h-5 w-5 text-primary-600" />
              <span>Patient Overview</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {patients.map((patient) => (
                <motion.div
                  key={patient.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-medium text-sm">
                        {patient.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{patient.name}</p>
                      <p className="text-sm text-gray-600">Age {patient.age} • {patient.adherence}% adherence</p>
                      <p className="text-xs text-gray-500">Last check: {patient.lastCheck}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge 
                      variant={patient.status === 'excellent' ? 'success' : 
                              patient.status === 'good' ? 'default' : 'warning'}
                      className="text-xs"
                    >
                      {patient.status.replace('-', ' ')}
                    </Badge>
                    {patient.alerts > 0 && (
                      <Badge variant="error" className="text-xs">
                        {patient.alerts} alerts
                      </Badge>
                    )}
                    <div className="flex space-x-1">
                      <Button size="sm" variant="ghost" className="p-1">
                        <SafeIcon icon={FiEye} className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="p-1">
                        <SafeIcon icon={FiPhone} className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Alerts */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <SafeIcon icon={FiAlertTriangle} className="h-5 w-5 text-warning-600" />
              <span>Recent Alerts</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentAlerts.map((alert) => (
                <motion.div
                  key={alert.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`p-3 rounded-lg border ${getAlertSeverityColor(alert.severity)}`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="font-medium text-sm">{alert.patient}</p>
                      <p className="text-sm mt-1">{alert.message}</p>
                      <p className="text-xs opacity-70 mt-1">{alert.time}</p>
                    </div>
                    <Badge 
                      variant={alert.severity === 'high' ? 'error' : 
                              alert.severity === 'medium' ? 'warning' : 'default'}
                      className="text-xs ml-2"
                    >
                      {alert.severity}
                    </Badge>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <SafeIcon icon={FiActivity} className="h-5 w-5 text-primary-600" />
            <span>Quick Actions</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Button className="h-20 flex-col space-y-2">
              <SafeIcon icon={FiMessageCircle} className="h-6 w-6" />
              <span className="text-sm">Send Message</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2">
              <SafeIcon icon={FiPhone} className="h-6 w-6" />
              <span className="text-sm">Make Call</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2">
              <SafeIcon icon={FiCalendar} className="h-6 w-6" />
              <span className="text-sm">Schedule</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2">
              <SafeIcon icon={FiTrendingUp} className="h-6 w-6" />
              <span className="text-sm">View Reports</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;