import { createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

import { logIn, logOut, refreshUser, register } from './authOperations';

const initialState = {
  // user: { name: null, email: null },
  // token: null,
  // isLoggedIn: false,
  // isRefreshing: false,
  id: '',
  login: '',
  email: '',

  error: null,
};

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const handlerAuthFulfilled = (state, action) => {
  const { user, token } = action.payload;
  state.user = user;
  state.token = token;
  state.isLoggedIn = true;
};

const handleLogOutFulfilled = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

const handleRefreshPending = state => {
  state.isRefreshing = true;
};

const handleRefreshFulfilled = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

const handleRefreshRejected = state => {
  state.isRefreshing = false;
};

const handleError = (state, action) => {
  state.error = action.payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, handlerAuthFulfilled)
      .addCase(register.rejected, handleError)
      .addCase(logIn.fulfilled, handlerAuthFulfilled)
      .addCase(logIn.rejected, handleError)
      .addCase(logOut.fulfilled, handleLogOutFulfilled)
      .addCase(refreshUser.pending, handleRefreshPending)
      .addCase(refreshUser.fulfilled, handleRefreshFulfilled)
      .addCase(refreshUser.rejected, handleRefreshRejected),
});

export const authReducer = persistReducer(persistConfig, authSlice.reducer);

// import { createSlice } from '@reduxjs/toolkit';

// const authSlice = createSlice({
//   name: 'auth',
//   initialState: {
//     userId: null,
//     userName: null,
//   },
//   reducers: {},
// });

// export const authReducer = authSlice.reducer;
