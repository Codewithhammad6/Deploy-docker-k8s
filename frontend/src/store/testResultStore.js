import { create } from 'zustand';
import { axiosInstance } from '../lib/axios.js';
import toast from 'react-hot-toast';

const useTestResultStore = create((set, get) => ({
  // State
  testResults: [],
  loading: false,
  error: null,
  studentStats: null,
  classReport: null,

  // Add test result
  addTestResult: async (testData) => {
    set({ loading: true, error: null });
    try {
      const response = await axiosInstance.post('/test-results/add', testData);
      
      if (response.data.success) {
        console.log('Test result added successfully');
        set((state) => ({
          testResults: [...state.testResults, response.data.testResult],
          loading: false
        }));
        return { success: true, data: response.data };
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Error adding test result';
      toast.error(errorMessage);
      set({ loading: false, error: errorMessage });
      return { success: false, error: errorMessage };
    }
  },
// Get test results by class
getTestResultsByClass: async (className, section, subject, testName) => {
  set({ loading: true, error: null });
  try {
    const params = { class: className, section };
    if (subject) params.subject = subject;
    if (testName) params.testName = testName;

    const response = await axiosInstance.get('/test-results/by-class', { params });
    
    if (response.data.success) {
      set({
        testResults: response.data.results,
        loading: false
      });
      return { success: true, data: response.data };
    } else {
      set({ loading: false, error: 'Failed to load test results' });
      return { success: false, error: 'Failed to load test results' };
    }
  } catch (error) {
    const errorMessage = error.response?.data?.message || 'Error fetching test results';
    toast.error(errorMessage);
    set({ loading: false, error: errorMessage });
    return { success: false, error: errorMessage };
  }
},
  // Add to your useTestResultStore
addBulkTestResults: async (bulkData) => {
  set({ loading: true, error: null });
  try {
    const response = await axiosInstance.post('/test-results/bulk-add', bulkData);
    
    if (response.data.success) {
      toast.success(response.data.message);
      set((state) => ({
        testResults: [...state.testResults, ...response.data.results],
        loading: false
      }));
      return { success: true, data: response.data };
    }
  } catch (error) {
    const errorMessage = error.response?.data?.message || 'Error adding bulk test results';
    toast.error(errorMessage);
    set({ loading: false, error: errorMessage });
    return { success: false, error: errorMessage };
  }
},


  // Get student test results
  getStudentTestResults: async (studentId) => {
    set({ loading: true, error: null });
    try {
      const response = await axiosInstance.get(`/test-results/student/${studentId}`);
      
      if (response.data.success) {
        set({
          testResults: response.data.results,
          studentStats: response.data.stats,
          loading: false
        });
        return { 
          success: true, 
          results: response.data.results,
          stats: response.data.stats 
        };
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Error fetching student results';
      toast.error(errorMessage);
      set({ loading: false, error: errorMessage });
      return { success: false, error: errorMessage };
    }
  },

  // Update test result
  updateTestResult: async (resultId, updateData) => {
    set({ loading: true, error: null });
    try {
      const response = await axiosInstance.put(`/test-results/${resultId}`, updateData);
      
      if (response.data.success) {
        console.log('Test result updated successfully');
        set((state) => ({
          testResults: state.testResults.map(result =>
            result._id === resultId ? response.data.testResult : result
          ),
          loading: false
        }));
        return { success: true, data: response.data };
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Error updating test result';
      toast.error(errorMessage);
      set({ loading: false, error: errorMessage });
      return { success: false, error: errorMessage };
    }
  },

  // Delete test result
  deleteTestResult: async (resultId) => {
    set({ loading: true, error: null });
    try {
      const response = await axiosInstance.delete(`/test-results/${resultId}`);
      
      if (response.data.success) {
        console.log('Test result deleted successfully');
        set((state) => ({
          testResults: state.testResults.filter(result => result._id !== resultId),
          loading: false
        }));
        return { success: true };
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Error deleting test result';
      toast.error(errorMessage);
      set({ loading: false, error: errorMessage });
      return { success: false, error: errorMessage };
    }
  },

  // Get class report
  getClassReport: async (className, section) => {
    set({ loading: true, error: null });
    try {
      const response = await axiosInstance.get('/test-results/class-report', {
        params: { class: className, section }
      });
      
      if (response.data.success) {
        set({
          classReport: response.data.report,
          loading: false
        });
        return { 
          success: true, 
          report: response.data.report,
          classAverage: response.data.classAverage 
        };
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Error fetching class report';
      toast.error(errorMessage);
      set({ loading: false, error: errorMessage });
      return { success: false, error: errorMessage };
    }
  },

  // Clear results
  clearResults: () => set({ testResults: [], error: null, studentStats: null, classReport: null })
}));

export default useTestResultStore;