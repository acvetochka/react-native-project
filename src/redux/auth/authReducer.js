import { createSlice } from '@reduxjs/toolkit';
// import persistReducer from 'redux-persist/es/persistReducer';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

import { logIn, logOut, updateUser, register } from './authOperations';
import { updateProfile } from 'firebase/auth';

const initialState = {
  // user: { uid: '', login: '', email: '', avatar: null},
  id: '',
  login: '',
  email: '',
  avatar: '',
  auth: false,
  error: null,
};

// const persistConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['token'],
// };

const handlerAuthFulfilled = (state, action) => {
  console.log('registerFullfild, payload', action.payload);
  const { uid, displayName, email, photoURL } = action.payload;
  state.id = uid;
  state.login = displayName;
  state.email = email;
  state.avatar = photoURL;
  // state.user = action.payload;
  state.auth = true;
  state.error = null;
 console.log("fullfild, state", state);
};

const handleLogOutFulfilled = state => {
  // Object.assign(state, initialState);
  return initialState;
  // state.user = { name: null, email: null };
  // state.token = null;
  // state.isLoggedIn = false;
};

// const handleRefreshPending = state => {
//   state.isRefreshing = true;
// };

// const handleRefreshFulfilled = (state, action) => {
//   state.user = action.payload;
//   state.isLoggedIn = true;
//   state.isRefreshing = false;
// };

// const handleRefreshRejected = state => {
//   state.isRefreshing = false;
// };
const handleUpdateUser = (state, action) => {
  // console.log(action.payload);
  // console.log("state", state);
  state.avatar = action.payload.photoURL;
};

const handleError = (state, action) => {
  // console.log(action.payload);
  state.error = action.payload.message;
  // state.someNonSerializableValue = null;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  // reducers: {
  //   setAvatar: (state, action) => {
  //     state.avatar = action.payload; // mutate the state all you want with immer
  //   },
  // },
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, handlerAuthFulfilled)
      .addCase(register.rejected, handleError)
      .addCase(logIn.fulfilled, handlerAuthFulfilled)
      .addCase(logIn.rejected, handleError)
      .addCase(logOut.fulfilled, handleLogOutFulfilled)
      .addCase(logOut.rejected, handleError)
      .addCase(updateUser.fulfilled, handleUpdateUser)
      .addCase(updateUser.rejected, handleError)
  // .addCase(refreshUser.pending, handleRefreshPending)
  // .addCase(refreshUser.fulfilled, handleRefreshFulfilled)
  // .addCase(refreshUser.rejected, handleRefreshRejected),
});

console.log('authSlice', authSlice);
export const authReducer = authSlice.reducer;

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
