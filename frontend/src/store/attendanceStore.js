import { create } from 'zustand';
import { axiosInstance } from '../lib/axios.js';
import toast from 'react-hot-toast';

const useAttendanceStore = create((set, get) => ({

  attendanceRecords: [],
  loading: false,
  error: null,
  stats: null,
  studentStats: null, // Add this
  selectedDate: new Date().toISOString().split('T')[0],

  // Mark attendance for a single student
  markAttendance: async (attendanceData) => {
    set({ loading: true, error: null });
    try {
      const response = await axiosInstance.post('/attendance/mark', attendanceData);
      
      if (response.data.success) {
        toast.success('Attendance marked successfully');
        set((state) => ({
          attendanceRecords: [...state.attendanceRecords, response.data.attendance],
          loading: false
        }));
        return { success: true, data: response.data };
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Error marking attendance';
      toast.error(errorMessage);
      set({ loading: false, error: errorMessage });
      return { success: false, error: errorMessage };
    }
  },

  // Mark bulk attendance
  markBulkAttendance: async (bulkData) => {
    set({ loading: true, error: null });
    try {
      const response = await axiosInstance.post('/attendance/bulk-mark', bulkData);
      
      if (response.data.success) {
        toast.success(response.data.message);
        set({ loading: false });
        return { success: true, data: response.data };
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Error marking attendance';
      toast.error(errorMessage);
      set({ loading: false, error: errorMessage });
      return { success: false, error: errorMessage };
    }
  },



// Add to your useAttendanceStore
getAllAttendanceByClass: async (className, section) => {
  set({ loading: true, error: null });
  try {
    const response = await axiosInstance.get('/attendance/class/all', {
      params: { class: className, section }
    });
    
    if (response.data.success) {
      set({
        attendanceRecords: response.data.attendance,
        studentStats: response.data.studentStats,
        loading: false
      });
      return { 
        success: true, 
        attendance: response.data.attendance,
        studentStats: response.data.studentStats 
      };
    }
  } catch (error) {
    const errorMessage = error.response?.data?.message || 'Error fetching all attendance';
    toast.error(errorMessage);
    set({ loading: false, error: errorMessage });
    return { success: false, error: errorMessage };
  }
},





  // Get attendance by date
  getAttendanceByDate: async (date, className, section) => {
    set({ loading: true, error: null });
    try {
      const response = await axiosInstance.get('/attendance/by-date', {
        params: { date, class: className, section }
      });
      
      if (response.data.success) {
        set({
          attendanceRecords: response.data.attendance,
          loading: false
        });
        return { success: true, data: response.data };
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Error fetching attendance';
      toast.error(errorMessage);
      set({ loading: false, error: errorMessage });
      return { success: false, error: errorMessage };
    }
  },

  // Get student attendance history
  getStudentAttendance: async (studentId, month, year) => {
    set({ loading: true, error: null });
    try {
      const response = await axiosInstance.get(`/attendance/student/${studentId}`, {
        params: { month, year }
      });
      
      if (response.data.success) {
        set({ loading: false });
        return { 
          success: true, 
          attendance: response.data.attendance,
          stats: response.data.stats 
        };
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Error fetching student attendance';
      toast.error(errorMessage);
      set({ loading: false, error: errorMessage });
      return { success: false, error: errorMessage };
    }
  },

  // Update attendance
  updateAttendance: async (attendanceId, updateData) => {
    set({ loading: true, error: null });
    try {
      const response = await axiosInstance.put(`/attendance/${attendanceId}`, updateData);
      
      if (response.data.success) {
        toast.success('Attendance updated successfully');
        set((state) => ({
          attendanceRecords: state.attendanceRecords.map(record =>
            record._id === attendanceId ? response.data.attendance : record
          ),
          loading: false
        }));
        return { success: true, data: response.data };
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Error updating attendance';
      toast.error(errorMessage);
      set({ loading: false, error: errorMessage });
      return { success: false, error: errorMessage };
    }
  },

  // Delete attendance
  deleteAttendance: async (attendanceId) => {
    set({ loading: true, error: null });
    try {
      const response = await axiosInstance.delete(`/attendance/${attendanceId}`);
      
      if (response.data.success) {
        toast.success('Attendance record deleted');
        set((state) => ({
          attendanceRecords: state.attendanceRecords.filter(record => record._id !== attendanceId),
          loading: false
        }));
        return { success: true };
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Error deleting attendance';
      toast.error(errorMessage);
      set({ loading: false, error: errorMessage });
      return { success: false, error: errorMessage };
    }
  },

  // Get attendance stats
  getAttendanceStats: async (className, section, month, year) => {
    set({ loading: true, error: null });
    try {
      const response = await axiosInstance.get('/attendance/stats', {
        params: { class: className, section, month, year }
      });
      
      if (response.data.success) {
        set({
          stats: response.data.stats,
          loading: false
        });
        return { success: true, stats: response.data.stats };
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Error fetching stats';
      toast.error(errorMessage);
      set({ loading: false, error: errorMessage });
      return { success: false, error: errorMessage };
    }
  },

  // Clear records
  clearAttendance: () => set({ attendanceRecords: [], error: null, stats: null })
}));

export default useAttendanceStore;