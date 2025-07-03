import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { 
  FiTrendingUp, FiUsers, FiDollarSign, FiTarget,
  FiBarChart3, FiGift, FiStar, FiActivity,
  FiShoppingBag, FiCreditCard, FiCalendar, FiEye
} = FiIcons;

const Dashboard = () => {
  const campaigns = [
    { id: 1, name: 'Diabetes Care Program', patients: 245, engagement: 87, budget: 5000, spent: 3200, status: 'active' },
    { id: 2, name: 'Heart Health Initiative', patients: 189, engagement: 92, budget: 3500, spent: 2100, status: 'active' },
    { id: 3, name: 'Senior Wellness', patients: 156, engagement: 78, budget: 2800, spent: 2800, status: 'completed' },
  ];

  const recentEngagements = [
    { id: 1, patient: 'Faisal A.', action: 'Redeemed pharmacy discount', points: 500, time: '2 hours ago' },
    { id: 2, patient: 'Amina H.', action: 'Completed 7-day streak', points: 200, time: '4 hours ago' },
    { id: 3, patient: 'Omar A.', action: 'Joined wellness program', points: 100, time: '6 hours ago' },
    { id: 4, patient: 'Fatima S.', action: 'Shared health milestone', points: 150, time: '1 day ago' },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-accent-500 to-warning-500 rounded-2xl p-6 text-white"
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-2">Partner Dashboard 🏥</h1>
            <p className="text-accent-100 mb-4">
              Building stronger community health partnerships
            </p>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiUsers} className="h-5 w-5" />
                <span className="text-sm">590 Active Patients</span>
              </div>
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiTrendingUp} className="h-5 w-5" />
                <span className="text-sm">85% Engagement Rate</span>
              </div>
            </div>
          </div>
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="bg-white/20 p-4 rounded-full"
          >
            <SafeIcon icon={FiTarget} className="h-8 w-8" />
          </motion.div>
        </div>
      </motion.div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-primary-50 to-primary-100 border-primary-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-primary-600">Total Patients</p>
                <p className="text-2xl font-bold text-primary-700">590</p>
                <p className="text-xs text-primary-500">+12% this month</p>
              </div>
              <div className="bg-primary-500 p-3 rounded-full">
                <SafeIcon icon={FiUsers} className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-success-50 to-success-100 border-success-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-success-600">Engagement Rate</p>
                <p className="text-2xl font-bold text-success-700">85%</p>
                <p className="text-xs text-success-500">+5% from last month</p>
              </div>
              <div className="bg-success-500 p-3 rounded-full">
                <SafeIcon icon={FiTrendingUp} className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-warning-50 to-warning-100 border-warning-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-warning-600">Campaign ROI</p>
                <p className="text-2xl font-bold text-warning-700">324%</p>
                <p className="text-xs text-warning-500">Above target</p>
              </div>
              <div className="bg-warning-500 p-3 rounded-full">
                <SafeIcon icon={FiBarChart3} className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-purple-600">Monthly Spend</p>
                <p className="text-2xl font-bold text-purple-700">$8.3K</p>
                <p className="text-xs text-purple-500">72% of budget</p>
              </div>
              <div className="bg-purple-500 p-3 rounded-full">
                <SafeIcon icon={FiDollarSign} className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Active Campaigns */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <SafeIcon icon={FiTarget} className="h-5 w-5 text-primary-600" />
              <span>Active Campaigns</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {campaigns.map((campaign) => (
                <motion.div
                  key={campaign.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-gray-900">{campaign.name}</h3>
                    <Badge 
                      variant={campaign.status === 'active' ? 'success' : 'secondary'}
                      className="text-xs"
                    >
                      {campaign.status}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">Patients</p>
                      <p className="font-medium">{campaign.patients}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Engagement</p>
                      <p className="font-medium">{campaign.engagement}%</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Budget</p>
                      <p className="font-medium">${campaign.spent}/${campaign.budget}</p>
                    </div>
                  </div>
                  <div className="mt-2">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-primary-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${(campaign.spent / campaign.budget) * 100}%` }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Patient Engagements */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <SafeIcon icon={FiActivity} className="h-5 w-5 text-primary-600" />
              <span>Recent Engagements</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentEngagements.map((engagement) => (
                <motion.div
                  key={engagement.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                      <SafeIcon icon={FiGift} className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-sm text-gray-900">{engagement.patient}</p>
                      <p className="text-xs text-gray-600">{engagement.action}</p>
                      <p className="text-xs text-gray-500">{engagement.time}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-primary-600">+{engagement.points}</p>
                    <p className="text-xs text-gray-500">points</p>
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
            <SafeIcon icon={FiStar} className="h-5 w-5 text-primary-600" />
            <span>Quick Actions</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <Button className="h-20 flex-col space-y-2">
              <SafeIcon icon={FiTarget} className="h-6 w-6" />
              <span className="text-sm">New Campaign</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2">
              <SafeIcon icon={FiBarChart3} className="h-6 w-6" />
              <span className="text-sm">View Analytics</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2">
              <SafeIcon icon={FiUsers} className="h-6 w-6" />
              <span className="text-sm">Patient Insights</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2">
              <SafeIcon icon={FiCreditCard} className="h-6 w-6" />
              <span className="text-sm">Billing</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2">
              <SafeIcon icon={FiEye} className="h-6 w-6" />
              <span className="text-sm">Reports</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;