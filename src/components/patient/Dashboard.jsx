import React from 'react';
import { motion } from 'framer-motion';
import { usePatientStore } from '../../store/patientStore';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import { format } from 'date-fns';

const { 
  FiClock, FiCheckCircle, FiCalendar, FiTrendingUp, 
  FiAward, FiMessageCircle, FiHeart, FiAlertCircle,
  FiBell, FiStar, FiTarget, FiActivity
} = FiIcons;

const Dashboard = () => {
  const { medications, appointments, adherenceData, rewards, takeMedication } = usePatientStore();

  const todaysMedications = medications.filter(med => 
    med.times.some(time => {
      const now = new Date();
      const [hours, minutes] = time.split(':');
      const medTime = new Date();
      medTime.setHours(parseInt(hours), parseInt(minutes), 0, 0);
      return medTime.getTime() > now.getTime() - 3600000 && medTime.getTime() < now.getTime() + 3600000;
    })
  );

  const upcomingAppointments = appointments.filter(apt => new Date(apt.date) > new Date());

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-6 text-white"
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-2">Good morning, Faisal! 🌅</h1>
            <p className="text-primary-100 mb-4">
              How are you feeling today? Ready to take charge of your health?
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiTarget} className="h-5 w-5" />
                <span className="text-sm">Today's Goal: {adherenceData.today}%</span>
              </div>
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiActivity} className="h-5 w-5" />
                <span className="text-sm">{adherenceData.streak} day streak</span>
              </div>
            </div>
          </div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
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
                <p className="text-sm font-medium text-success-600">Today's Adherence</p>
                <p className="text-2xl font-bold text-success-700">{adherenceData.today}%</p>
              </div>
              <div className="bg-success-500 p-3 rounded-full">
                <SafeIcon icon={FiCheckCircle} className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-primary-50 to-primary-100 border-primary-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-primary-600">Current Streak</p>
                <p className="text-2xl font-bold text-primary-700">{adherenceData.streak} days</p>
              </div>
              <div className="bg-primary-500 p-3 rounded-full">
                <SafeIcon icon={FiTrendingUp} className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-warning-50 to-warning-100 border-warning-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-warning-600">Reward Points</p>
                <p className="text-2xl font-bold text-warning-700">{rewards.points}</p>
              </div>
              <div className="bg-warning-500 p-3 rounded-full">
                <SafeIcon icon={FiAward} className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-secondary-50 to-secondary-100 border-secondary-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-secondary-600">Member Level</p>
                <p className="text-2xl font-bold text-secondary-700">{rewards.level}</p>
              </div>
              <div className="bg-secondary-500 p-3 rounded-full">
                <SafeIcon icon={FiStar} className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Today's Medications */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <SafeIcon icon={FiClock} className="h-5 w-5 text-primary-600" />
              <span>Today's Medications</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {todaysMedications.length > 0 ? (
                todaysMedications.map((medication) => (
                  <motion.div
                    key={medication.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center space-x-3">
                      <div 
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: medication.color }}
                      />
                      <div>
                        <p className="font-medium text-gray-900">{medication.name}</p>
                        <p className="text-sm text-gray-600">{medication.dosage} - {medication.purpose}</p>
                        <p className="text-xs text-gray-500">Next: {medication.times[0]}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {medication.taken ? (
                        <Badge variant="success">Taken</Badge>
                      ) : (
                        <Button 
                          size="sm" 
                          onClick={() => takeMedication(medication.id)}
                          className="bg-success-600 hover:bg-success-700"
                        >
                          <SafeIcon icon={FiCheckCircle} className="h-4 w-4 mr-1" />
                          Take
                        </Button>
                      )}
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <SafeIcon icon={FiCheckCircle} className="h-12 w-12 mx-auto mb-4 text-success-400" />
                  <p>All medications for today are complete!</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Appointments */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <SafeIcon icon={FiCalendar} className="h-5 w-5 text-primary-600" />
              <span>Upcoming Appointments</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingAppointments.length > 0 ? (
                upcomingAppointments.map((appointment) => (
                  <motion.div
                    key={appointment.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-medium text-gray-900">{appointment.title}</p>
                        <p className="text-sm text-gray-600">{appointment.location}</p>
                        <p className="text-xs text-gray-500">
                          {format(new Date(appointment.date), 'MMM dd, yyyy - h:mm a')}
                        </p>
                      </div>
                      <Badge variant="outline">{appointment.type}</Badge>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <SafeIcon icon={FiCalendar} className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                  <p>No upcoming appointments</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* AI Assistant & Rewards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* AI Assistant */}
        <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <SafeIcon icon={FiMessageCircle} className="h-5 w-5 text-blue-600" />
              <span>AI Health Assistant</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-sm text-gray-600 mb-3">
                  "Hello Faisal! I noticed you've been consistent with your medications. 
                  How are you feeling today? Any side effects or concerns?"
                </p>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline">I feel great!</Button>
                  <Button size="sm" variant="outline">Ask a question</Button>
                </div>
              </div>
              <Button className="w-full" variant="primary">
                <SafeIcon icon={FiMessageCircle} className="h-4 w-4 mr-2" />
                Chat with AI Assistant
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Rewards Progress */}
        <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <SafeIcon icon={FiAward} className="h-5 w-5 text-yellow-600" />
              <span>Rewards Progress</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Progress to next reward</span>
                  <span className="text-sm text-gray-600">{rewards.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div 
                    className="bg-gradient-to-r from-yellow-400 to-orange-400 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${rewards.progress}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {rewards.badges.map((badge, index) => (
                  <Badge key={index} variant="warning" className="text-xs">
                    {badge}
                  </Badge>
                ))}
              </div>
              
              <Button className="w-full" variant="warning">
                <SafeIcon icon={FiAward} className="h-4 w-4 mr-2" />
                View All Rewards
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;