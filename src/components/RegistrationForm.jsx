import { Alert, StyleSheet, View } from 'react-native';
import { FormInput } from './FormInput';
import { PassInput } from './PassInput';
import { useState } from 'react';
import { FormButton } from './FormButton';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../redux/auth/authOperations';
import { getIsAuth } from '../redux/auth/authSelectors';

export const RegistrationForm = ({ avatar }) => {
  const [email, setEmail] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  // const [avatar, setAvatar] = useState(null);
  const isAuth = useSelector(getIsAuth);
  const dispatch = useDispatch();

  const navigation = useNavigation();
  // console.log(navigation);

  const onLogin = () => {
    if (!email || !login || !password) {
      Alert.alert('Please, complete all fields');
      return;
    }
    const user = { email, login, password, avatar };
    // console.log(user);
    dispatch(register(user));
    // navigation.navigate('Posts');
    // if (isAuth) {
    //   navigation.reset({
    //     index: 0,
    //     routes: [{ name: 'Posts' }],
    //   });
    // }

    reset();
  };

  const reset = () => {
    setEmail('');
    setLogin('');
    setPassword('');
    // setAvatar(null)
  };

  return (
    <>
      <FormInput
        name="login"
        placeholder="Логін"
        onChange={setLogin}
        value={login}
      />
      <FormInput
        name="email"
        placeholder="Адреса електронної пошти"
        onChange={setEmail}
        value={email}
      />
      <View>
        <PassInput onChange={setPassword} value={password} />
      </View>
      <FormButton text="Зареєструватися" onPress={onLogin} />
    </>
  );
};

// const styles = StyleSheet.create({
//   show: {
//     position: 'absolute',
//     right: 16,
//     top: '100%',
//     transform: [{ translateY: -50 }],
//     color: '#1B4371',
//   },
// });
