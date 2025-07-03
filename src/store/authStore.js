import { create } from 'zustand';

export const useAuthStore = create((set, get) => ({
  user: null,
  userType: null, // 'patient', 'caregiver', 'partner', 'admin'
  isAuthenticated: false,
  isLoading: false,
  
  setUser: (user, userType) => set({ 
    user, 
    userType, 
    isAuthenticated: !!user 
  }),
  
  setLoading: (isLoading) => set({ isLoading }),
  
  logout: () => set({ 
    user: null, 
    userType: null, 
    isAuthenticated: false 
  }),
  
  // Mock authentication for demo
  login: async (email, password, userType) => {
    set({ isLoading: true });
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const mockUser = {
      id: '1',
      email,
      name: userType === 'patient' ? 'Faisal Ahmed' : 
            userType === 'caregiver' ? 'Aisha Hassan' :
            userType === 'partner' ? 'Pharmacy Manager' : 'Admin User',
      avatar: null,
      phone: '+1234567890',
      language: 'en'
    };
    
    set({ 
      user: mockUser, 
      userType, 
      isAuthenticated: true, 
      isLoading: false 
    });
    
    return { success: true, user: mockUser };
  }
}));