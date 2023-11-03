import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../../firebase/config';

export const register = createAsyncThunk(
  'auth/signup',
  async (userData, thunkAPI) => {
    try {
      const { email, password, login, avatar = '' } = userData;
      console.log('registerOperation, userData', userData);
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log('user', user);
      if (user) {
        await updateProfile(auth.currentUser, {
          displayName: login,
          photoURL: avatar,
        });
      }
      const data = {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      };
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/signin',
  async (userData, thunkAPI) => {
    try {
      const { email, password } = userData;
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      const data = {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      };
      // console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    return await signOut(auth);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const updateUser = createAsyncThunk(
  'auth/update',
  async (avatar, thunkAPI) => {
    try {
      const user = auth.currentUser;
      // console.log(user);
      if (user) {
        const newAva = await updateProfile(user, { photoURL: avatar });
        return newAva;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const register = createAsyncThunk(
//   'auth/signup',
//   async (credentials, thunkAPI) => {
//     try {
//       // const { data } = await axios.post('/users/signup', credentials);
//       const { email, password, login, avatar } = credentials;
//       const user = await registerDB(email, password, login, avatar);
//       console.log(user);
//       //   token.set(data.token);
//       const data = {
//         uid: user.uid,
//         displayName: user.displayName,
//         email: user.email,
//         photoURL: user.photoURL,
//       };
//       // console.log(data);
//       return data;
//     } catch (error) {
//       console.log(thunkAPI.rejectWithValue(error));
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

// export const logIn = createAsyncThunk(
//   'auth/signin',
//   async (credentials, thunkAPI) => {
//     try {
//       const { email, password } = credentials;
//       const user = await loginDB(email, password);
//       const data = {
//         uid: user.uid,
//         displayName: user.displayName,
//         email: user.email,
//         photoURL: user.photoURL,
//       };
//       console.log(data);
//       //   token.set(data.token);
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
//   try {
//     // const { data } = await axios.post('/users/logout');
//     const data = await logoutDB();
//     // console.log(data);
//     // token.unset();
//     return data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });

// export const updateUser = createAsyncThunk(
//   'auth/update',
//   async (_, thunkAPI) => {}
// );

// export const refreshUser = createAsyncThunk(
//   'auth/refresh',
//   async (_, thunkAPI) => {
//     const state = thunkAPI.getState();
//     const persistedToken = state.auth.token;

//     if (persistedToken === null) {
//       return thunkAPI.rejectWithValue('Unable to fetch user');
//     }

//     try {
//       //   token.set(persistedToken);
//       const { data } = await axios.get('/users/current');
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
