import { create } from 'zustand';
import {axiosInstance} from '../lib/axios.js';
import toast from "react-hot-toast"


// Helper to get token from localStorage
const getStoredToken = () => localStorage.getItem('tokenSchool');
const setStoredToken = (token) => {
  if (token) {
    localStorage.setItem('tokenSchool', token);
  } else {
    localStorage.removeItem('tokenSchool');
  }
};

const userStore = create((set, get) => ({
  allUsers:[],
  user: null,
  singleUser:null,
  loading: false,
  isAuth: false,
  isCheckingAuth:true,



checkAuth:async ()=>{
    try {
      // First try with cookie-based auth
      const res = await axiosInstance.get("/user/me")
      set({isAuth:true, user:res.data.user})
      // console.log(res.data.user)
  } catch (error) {
    console.log("Cookie auth failed, checking localStorage token:", error)
    
    // Fallback: Check if we have a token in localStorage
    const token = getStoredToken();
    if (token) {
      try {
        // Try to verify token with the server
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        const res = await axiosInstance.get("/user/me");
        set({isAuth:true, user:res.data.user});
      } catch (tokenError) {
        console.log("Token verification failed, clearing auth:", tokenError)
        // Token is invalid, clear everything
        setStoredToken(null);
        delete axiosInstance.defaults.headers.common['Authorization'];
        set({isAuth:false, user:null});
      }
    } else {
      // No token found, user is not authenticated
      console.log("No token found, user not authenticated")
      set({isAuth:false, user:null});
    }
    }finally{
        set({isCheckingAuth:false})
    }
},

getAllUsers:async ()=>{
    try {
    const res = await axiosInstance.get("/user/getAllUsers")
    set({allUsers:res.data.users})
} catch (error) {
    console.log("Error in checkAuth:",error)
        set({user:null})
    }finally{
        set({isCheckingAuth:false})
    }
},
  /* ================= GET USER BY ID ================= */
  getUserById: async (id) => {
    console.log("store",id)
    try {
      set({ loading: true });

      const res = await axiosInstance.get(`/user/${id}`);
      set({ singleUser:res.data.user });
    } catch (error) {
      toast.error(error?.response?.data?.message || "User not found");
    } finally {
      set({ loading: false });
    }
  },

  /* ================= REGISTER ================= */
  registerUser: async (formData) => {
    console.log("formData",formData)
    try {
      set({ loading: true });
      await axiosInstance.post('/user/register', formData);

toast.success("Registration successful! Please verify your email.");


      return true;
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return false;
    } finally {
      set({ loading: false });
    }
  },
  

  /* ================= LOGIN ================= */
  loginUser: async (formData) => {
    try {
      set({ loading: true });
      const { data } = await axiosInstance.post('/user/login', formData);
      
      // Store token in localStorage for production reliability
      if (data.token) {
        setStoredToken(data.token);
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
      }
      
      set({
        user: data.user,
        isAuth: true,
      });

      toast.success(data.message);
      return true;
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return false;
    } finally {
      set({ loading: false });
    }
  },


  
  /* ================= VERIFY EMAIL ================= */
  verifyUser: async (formData) => {
    try {
      set({ loading: true });

      const { data } = await axiosInstance.post('/user/verifyEmail', formData);

      // Store token in localStorage for production reliability
      if (data.token) {
        setStoredToken(data.token);
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
      }

      set({
        user: data.user,
        isAuth: true,
      });

      toast.success('Email verified successfully!');
      return true;
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return false;
    } finally {
      set({ loading: false });
    }
  },

  /* ================= LOGOUT ================= */
  logoutUser: async () => {
    // ALWAYS clear localStorage first, regardless of API success/failure
    setStoredToken(null);
    delete axiosInstance.defaults.headers.common['Authorization'];
    
    try {
      set({ loading: true });
      await axiosInstance.get("/user/logout");
    } catch (error) {
      // Ignore logout API errors - we already cleared local state
      console.log("Logout API call failed (ignoring):", error);
    } finally {
      // Always clear auth state, even if logout API failed
      set({
        user: null,
        isAuth: false,
        loading: false,
      });
      toast.success('Logged out successfully');
    }
  },

  /* ================= FORGOT PASSWORD ================= */
  forgotPassword: async (formData) => {
    try {
      set({ loading: true });

      const { data } = await axiosInstance.post('/user/forgot', formData);

      toast.success(
        'Success',data.message
      );

      return true;
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return false;
    } finally {
      set({ loading: false });
    }
  },



  /* ================= VERIFY FORGOT CODE ================= */
  verifyForgotCode: async (formData) => {
    try {
      set({ loading: true });

      const { data } = await axiosInstance.post('/user/verifyForgot', formData);

      toast.success(
        'Success',
        data.message
      );

      return true;
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return false;
    } finally {
      set({ loading: false });
    }
  },

  /* ================= NEW PASSWORD ================= */
  newPassword: async ({ password, code }) => {
    try {
      set({ loading: true });

      const { data } = await axiosInstance.post('/user/newPassword', {
        password,
        code,
      });

      toast.success(data.message);
      return true;
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return false;
    } finally {
      set({ loading: false });
    }
  },


  /* ================= Update Profile ================= */

  updateAmount: async (amount) => {
    console.log("object",amount)
    try {
      set({ loading: true });

      const { data } = await axiosInstance.put('/user/update-amount', { amount });
  set({ user: data.user });
      toast.success(data.message);
      return true;
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return false;
    } finally {
      set({ loading: false });
    }
  },

  updateCash: async (amount) => {
    console.log("frontend amount", amount)
    try {
      set({ loading: true });

      const { data } = await axiosInstance.put('/user/update-cash', { amount });
  set({ user: data.user });
      toast.success(data.message);
      return true;
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return false;
    } finally {
      set({ loading: false });
    }
  },

deleteUser: async (id) => {
    try {
      set({ loading: true });
      await axiosInstance.delete(`/user/${id}`);
      toast.success('User deleted successfully');
      return true;
    }
      catch (error) {
      toast.error(error?.response?.data?.message || 'Failed to delete user');
      return false;
    } finally {
      set({ loading: false });
    }},


updateAmountInvite: async (email, amount) => {
  console.log("Updating amount for email:", email, "amount:", amount);
  
  // Validation
  if (!email) {
    toast.error("Email is required");
    return false;
  }
  
  if (!amount || amount <= 0) {
    toast.error("Please enter a valid positive amount");
    return false;
  }

  try {
    set({ loading: true });

    const { data } = await axiosInstance.post('/user/update-amount-invite', { 
      email, 
      amount: Number(amount) 
    });

    // Update user in state if it's the same user
    const currentUser = get().user;
    if (currentUser && currentUser.email === email) {
      set({ user: data.user });
    }

    // Also update in allUsers list if present
    const allUsers = get().allUsers;
    if (allUsers && allUsers.length > 0) {
      const updatedUsers = allUsers.map(user => 
        user.email === email ? { ...user, amount: data.user.amount } : user
      );
      set({ allUsers: updatedUsers });
    }

    toast.success(data.message);
    return true;
  } catch (error) {
    console.error("Update amount error:", error);
    toast.error(error?.response?.data?.message || "Failed to update amount");
    return false;
  } finally {
    set({ loading: false });
  }
},



})

);

export default userStore;
