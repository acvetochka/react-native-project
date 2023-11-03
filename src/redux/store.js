import { configureStore } from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { authReducer } from './auth/authReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const reducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      // serializableCheck: {
      //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      // },
    }),
});

const persistor = persistStore(store);

export { store, persistor };

// import { configureStore, combineReducers } from '@reduxjs/toolkit';

// import { authSlice } from './auth/authReducer';

// const rootReducer = combineReducers({
//   [authSlice.name]: authSlice.reducer,
// });

// export const store = configureStore({
//   reducer: rootReducer,
// });
