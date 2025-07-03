import { create } from 'zustand';

export const usePatientStore = create((set, get) => ({
  medications: [
    {
      id: '1',
      name: 'Metformin',
      dosage: '500mg',
      frequency: 'Twice daily',
      times: ['08:00', '20:00'],
      purpose: 'Diabetes management',
      nextDue: '2024-01-15T08:00:00Z',
      streak: 12,
      taken: false,
      color: '#22c55e'
    },
    {
      id: '2',
      name: 'Lisinopril',
      dosage: '10mg',
      frequency: 'Once daily',
      times: ['09:00'],
      purpose: 'Blood pressure',
      nextDue: '2024-01-15T09:00:00Z',
      streak: 8,
      taken: true,
      color: '#3b82f6'
    }
  ],
  
  appointments: [
    {
      id: '1',
      title: 'Dr. Smith - Cardiology',
      date: '2024-01-20T10:00:00Z',
      location: 'Main Hospital',
      type: 'Follow-up',
      notes: 'Bring recent test results'
    }
  ],
  
  adherenceData: {
    today: 85,
    week: 92,
    month: 88,
    streak: 12
  },
  
  rewards: {
    points: 1250,
    level: 'Gold',
    badges: ['7-day streak', 'Perfect week', 'Early bird'],
    nextReward: 'Pharmacy discount',
    progress: 75
  },
  
  takeMedication: (medicationId) => {
    set(state => ({
      medications: state.medications.map(med => 
        med.id === medicationId 
          ? { ...med, taken: true, streak: med.streak + 1 }
          : med
      )
    }));
  },
  
  addMedication: (medication) => {
    set(state => ({
      medications: [...state.medications, { ...medication, id: Date.now().toString() }]
    }));
  },
  
  updateAdherence: (data) => {
    set(state => ({
      adherenceData: { ...state.adherenceData, ...data }
    }));
  }
}));