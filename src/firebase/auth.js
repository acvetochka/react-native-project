import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from 'firebase/auth';
import { auth } from './config';

// const registerDB = async ({ email, password }) => {
//   try {
//     await createUserWithEmailAndPassword(auth, email, password);
//   } catch (error) {
//     throw error;
//   }
// };

// або більш короткий запис цієї функції
const registerDB = ({ email, password }) =>
  createUserWithEmailAndPassword(auth, email, password);

const authStateChanged = async (onChange = () => {}) => {
  onAuthStateChanged(user => {
    onChange(user);
  });
};

const loginDB = async ({ email, password }) => {
  try {
    const credentials = await signInWithEmailAndPassword(auth, email, password);
    return credentials.user;
  } catch (error) {
    throw error;
  }
};

const updateUserProfile = async update => {
  const user = auth.currentUser;

  // якщо такий користувач знайдений
  if (user) {
    // оновлюємо його профайл
    try {
      await updateProfile(user, update);
    } catch (error) {
      throw error;
    }
  }
};
