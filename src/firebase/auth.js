import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { auth } from './config';

// export const registerDB = async (email, password, login, avatar) => {
//   try {
//     const credentials = await createUserWithEmailAndPassword(
//       auth,
//       email,
//       password
//     );
//     // console.log(credentials);
//     if (credentials) {
//       await updateProfile(auth.currentUser, {
//         displayName: login,
//         photoURL: avatar,
//       });
//     }
//   } catch (error) {
//     throw error;
//   }
// };

// export const loginDB = async (email, password) => {
//   try {
//     const credentials = await signInWithEmailAndPassword(auth, email, password);
//     return credentials.user;
//   } catch (error) {
//     throw error;
//   }
// };

// export const authStateChanged = async (onChange = () => {}) => {
//   onAuthStateChanged(user => {
//     onChange(user);
//     console.log(user);
//   });
// };
// export const logoutDB = async () => {
//   try {
//     await signOut(auth);
//   } catch (error) {
//     throw error;
//   }
// };

export const updateUserProfile = async avatar => {
  try {
    const user = auth.currentUser;

    if (user) {
      await updateProfile(user, { photoURL: avatar });
    }
    //  return photoURL;
  } catch (error) {
    throw error;
  }
};
