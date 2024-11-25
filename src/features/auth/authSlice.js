import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import api from "../../utils/axiosConfig";

// async thunk for session validation
export const validateSession = createAsyncThunk(
    'auth/validateSession',
    async (_, { getState, dispatch }) => {
        try {
            const { token } = getState().auth;
            if (!token) throw new Error('No token found');

            const response = await axios.get(`${import.meta.env.VITE_API_URL}/auth/validate`,  {
                headers: { Authorization: `Bearer ${token}` }
            });
            return response.data.user;
        } catch (error) {
            // If validation fails, log out the user
            dispatch(logout());
            throw error;
        }
    }
);

// async thunk for login
export const loginUser = createAsyncThunk('auth/login',
    async ({email, password}, {rejectWithValue}) => {
        try {
            const response = await api.post(`/auth/login`, {email, password});
           
            // Make sure the token is being stored correctly
            const { token, user } = response.data;

            if (token) {
                localStorage.setItem('token', token);
                return { token, user };
            } else {
                throw new Error('No token received');
            }
        } catch (error) {
            return rejectWithValue(
                error.response?.data || {
                    message: 'An error occurred during login'
                }
            );
        }
    }
);

// async thunk for getting user data
export const getUserData = createAsyncThunk(
    'auth/getUserData',
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.get('/api/auth/me');
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error.response?.data || {
                    message: 'Failed to fetch user data'
                }
            );
        }
    }
);


const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        token: localStorage.getItem('token') ?? null,
        isAuthenticated: false,
        isLoading: false,
        error: null,
        sessionValidated: false
    },
    reducers: {
        logout: (state) => {
            localStorage.removeItem('token');
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
            state.error = null;
            state.sessionValidated = false;
        },
        clearError: (state) => {
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            // login
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isAuthenticated = true;
                state.token = action.payload.token;
                state.user = action.payload.user;
                localStorage.setItem('token', action.payload.token);
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
                state.isAuthenticated = false;
                state.token = null;
                state.user = null;
                localStorage.removeItem('token');
            })
            // get user data
            .addCase(getUserData.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getUserData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload;
                state.isAuthenticated = true;
            })
            .addCase(getUserData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(validateSession.pending, (state) => {
                state.isLoading = true;
                state.sessionValidated = false;
            })
            // validate session
            .addCase(validateSession.fulfilled, (state, action) => {
                state.isLoading = false;
                state.sessionValidated = true;
                state.user = action.payload;
                state.isAuthenticated = true;
            })
            .addCase(validateSession.rejected, (state) => {
                state.isLoading = false;
                state.sessionValidated = false;
                state.isAuthenticated = false;
                state.user = null;
                state.token = null;
            });

    }
})

export const { logout, clearError } = authSlice.actions;
export default authSlice.reducer;