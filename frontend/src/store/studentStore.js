import { create } from 'zustand';
import { axiosInstance } from '../lib/axios.js';
import toast from "react-hot-toast";

const useStudentStore = create((set, get) => ({
  // State
  students: [],
  loading: false,
  error: null,
  totalStudents: 0,
  currentPage: 1,
  totalPages: 1,

  // ✅ NEW: Get total students count (without filters)
  getTotalStudentsCount: async () => {
    set({ loading: true, error: null });
    try {
      // Sirf count lene ke liye ek simple request
      const response = await axiosInstance.get('/students?limit=1');
      
      if (response.data.success) {
        set({ 
          totalStudents: response.data.total || 0,
          loading: false 
        });
        return { success: true, total: response.data.total };
      } else {
        set({ loading: false, error: response.data.message });
        return { success: false, error: response.data.message };
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Error fetching total count';
      toast.error(errorMessage);
      set({ loading: false, error: errorMessage });
      return { success: false, error: errorMessage };
    }
  },

  // Add single student
  addStudent: async (studentData) => {
    set({ loading: true, error: null });
    try {
      const response = await axiosInstance.post('/students/add', studentData);
      
      if (response.data.success) {
        toast.success('Student added successfully!');
        // Update students list and total count
        set((state) => ({
          students: [...state.students, response.data.student],
          totalStudents: state.totalStudents + 1, // ✅ Increment total
          loading: false
        }));
        return { success: true, data: response.data };
      } else {
        toast.error(response.data.message || 'Failed to add student');
        set({ loading: false, error: response.data.message });
        return { success: false, error: response.data.message };
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Error adding student';
      toast.error(errorMessage);
      set({ loading: false, error: errorMessage });
      return { success: false, error: errorMessage };
    }
  },

  // Add multiple students (bulk upload)
  addBulkStudents: async (studentsData) => {
    set({ loading: true, error: null });
    try {
      const response = await axiosInstance.post('/students/bulk-add', { students: studentsData });
      
      if (response.data.success) {
        toast.success(`${response.data.count || studentsData.length} students added successfully!`);
        set((state) => ({
          students: [...state.students, ...(response.data.students || [])],
          totalStudents: state.totalStudents + (response.data.count || studentsData.length), // ✅ Increment total
          loading: false
        }));
        return { success: true, data: response.data };
      } else {
        toast.error(response.data.message || 'Failed to add students');
        set({ loading: false, error: response.data.message });
        return { success: false, error: response.data.message };
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Error adding students';
      toast.error(errorMessage);
      set({ loading: false, error: errorMessage });
      return { success: false, error: errorMessage };
    }
  },

  // Get all students with filters
  getStudents: async (filters = {}) => {
    set({ loading: true, error: null });
    try {
      const queryParams = new URLSearchParams(filters).toString();
      const response = await axiosInstance.get(`/students?${queryParams}`);
      
      if (response.data.success) {
        set({
          students: response.data.students || [],
          currentPage: response.data.currentPage || 1,
          totalPages: response.data.totalPages || 1,
          loading: false
        });
        return { success: true, data: response.data };
      } else {
        set({ loading: false, error: response.data.message });
        return { success: false, error: response.data.message };
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Error fetching students';
      toast.error(errorMessage);
      set({ loading: false, error: errorMessage });
      return { success: false, error: errorMessage };
    }
  },

  // Get student by ID
  getStudentById: async (studentId) => {
    set({ loading: true, error: null });
    try {
      const response = await axiosInstance.get(`/students/${studentId}`);
      
      if (response.data.success) {
        set({ loading: false });
        return { success: true, student: response.data.student };
      } else {
        set({ loading: false, error: response.data.message });
        return { success: false, error: response.data.message };
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Error fetching student';
      toast.error(errorMessage);
      set({ loading: false, error: errorMessage });
      return { success: false, error: errorMessage };
    }
  },

  // Update student
  updateStudent: async (studentId, updatedData) => {
    set({ loading: true, error: null });
    try {
      const response = await axiosInstance.put(`/students/${studentId}`, updatedData);
      
      if (response.data.success) {
        toast.success('Student updated successfully!');
        // Update the student in the local state
        set((state) => ({
          students: state.students.map(student => 
            student._id === studentId ? response.data.student : student
          ),
          loading: false
        }));
        return { success: true, data: response.data };
      } else {
        toast.error(response.data.message || 'Failed to update student');
        set({ loading: false, error: response.data.message });
        return { success: false, error: response.data.message };
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Error updating student';
      toast.error(errorMessage);
      set({ loading: false, error: errorMessage });
      return { success: false, error: errorMessage };
    }
  },

  // Delete student
  deleteStudent: async (studentId) => {
    set({ loading: true, error: null });
    try {
      const response = await axiosInstance.delete(`/students/${studentId}`);
      
      if (response.data.success) {
        toast.success('Student deleted successfully!');
        // Remove student from local state and decrement total
        set((state) => ({
          students: state.students.filter(student => student._id !== studentId),
          totalStudents: state.totalStudents - 1, // ✅ Decrement total
          loading: false
        }));
        return { success: true, data: response.data };
      } else {
        toast.error(response.data.message || 'Failed to delete student');
        set({ loading: false, error: response.data.message });
        return { success: false, error: response.data.message };
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Error deleting student';
      toast.error(errorMessage);
      set({ loading: false, error: errorMessage });
      return { success: false, error: errorMessage };
    }
  },

  // Check roll number
  checkRollNumber: async (rollNumber, className, section) => {
    try {
      const response = await axiosInstance.get(
        `/students/check-roll/${rollNumber}?class=${className}&section=${section}`
      );
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Error checking roll number';
      toast.error(errorMessage);
      return { success: false, exists: false, error: errorMessage };
    }
  },

  // Get students by class
  getStudentsByClass: async (className, section = '') => {
    set({ loading: true, error: null });
    try {
      const url = section 
        ? `/students/class/${className}?section=${section}`
        : `/students/class/${className}`;
      
      const response = await axiosInstance.get(url);
      
      if (response.data.success) {
        set({
          students: response.data.students || [],
          // ✅ Don't update totalStudents here because it's filtered
          loading: false
        });
        return { success: true, students: response.data.students };
      } else {
        set({ loading: false, error: response.data.message });
        return { success: false, error: response.data.message };
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Error fetching students by class';
      toast.error(errorMessage);
      set({ loading: false, error: errorMessage });
      return { success: false, error: errorMessage };
    }
  },

  // Search students
  searchStudents: async (searchTerm) => {
    set({ loading: true, error: null });
    try {
      const response = await axiosInstance.get(`/students/search?q=${encodeURIComponent(searchTerm)}`);
      
      if (response.data.success) {
        set({
          students: response.data.students || [],
          // ✅ Don't update totalStudents here because it's filtered
          loading: false
        });
        return { success: true, students: response.data.students };
      } else {
        set({ loading: false, error: response.data.message });
        return { success: false, error: response.data.message };
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Error searching students';
      toast.error(errorMessage);
      set({ loading: false, error: errorMessage });
      return { success: false, error: errorMessage };
    }
  },

  // Get my students (created by current teacher)
  getMyStudents: async (page = 1, limit = 10) => {
    set({ loading: true, error: null });
    try {
      const response = await axiosInstance.get(`/students/my-students?page=${page}&limit=${limit}`);
      
      if (response.data.success) {
        set({
          students: response.data.students || [],
          currentPage: response.data.currentPage || 1,
          totalPages: response.data.totalPages || 1,
          loading: false
        });
        return { success: true, data: response.data };
      } else {
        set({ loading: false, error: response.data.message });
        return { success: false, error: response.data.message };
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Error fetching your students';
      toast.error(errorMessage);
      set({ loading: false, error: errorMessage });
      return { success: false, error: errorMessage };
    }
  },

  // Get students by class AND section with pagination
  getStudentsByClassAndSection: async (className, section, page = 1, limit = 10) => {
    set({ loading: true, error: null });
    try {
      const response = await axiosInstance.get(
        `/students/class/${className}?section=${section}&page=${page}&limit=${limit}`
      );
      
      if (response.data.success) {
        set({
          students: response.data.students || [],
          currentPage: response.data.currentPage || 1,
          totalPages: response.data.totalPages || 1,
          loading: false
        });
        return { success: true, data: response.data };
      } else {
        set({ loading: false, error: response.data.message });
        return { success: false, error: response.data.message };
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Error fetching students by class and section';
      toast.error(errorMessage);
      set({ loading: false, error: errorMessage });
      return { success: false, error: errorMessage };
    }
  },

  // Update student status
  updateStudentStatus: async (studentId, status) => {
    set({ loading: true, error: null });
    try {
      const response = await axiosInstance.patch(`/students/${studentId}/status`, { status });
      
      if (response.data.success) {
        toast.success(`Student status updated to ${status}`);
        // Update the student in the local state
        set((state) => ({
          students: state.students.map(student => 
            student._id === studentId ? response.data.student : student
          ),
          loading: false
        }));
        return { success: true, data: response.data };
      } else {
        toast.error(response.data.message || 'Failed to update status');
        set({ loading: false, error: response.data.message });
        return { success: false, error: response.data.message };
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Error updating status';
      toast.error(errorMessage);
      set({ loading: false, error: errorMessage });
      return { success: false, error: errorMessage };
    }
  },

  // Clear students list
  clearStudents: () => set({ students: [], error: null }),

  // Reset store
  resetStore: () => set({
    students: [],
    loading: false,
    error: null,
    totalStudents: 0,
    currentPage: 1,
    totalPages: 1
  })
}));

export default useStudentStore;