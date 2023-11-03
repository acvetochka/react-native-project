import { Alert, StyleSheet, View } from 'react-native';
import { FormInput } from './FormInput';
import { PassInput } from './PassInput';
import { FormButton } from './FormButton';
import { useState } from 'react';
// import { useNavigation } from '@react-navigation/native';
import { logIn } from '../redux/auth/authOperations';
import { useDispatch } from 'react-redux';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const navigation = useNavigation();
  const dispatch = useDispatch();

  const onLogin = () => {
    if (!email || !password) {
      Alert.alert('Please, complete all fields');
      return;
    }
    const user = { email, password };
    // navigation.navigate('Home');
    // console.log(user);
    dispatch(logIn(user));
    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <View>
      <FormInput
        name="email"
        placeholder="Адреса електронної пошти"
        onChange={setEmail}
        value={email}
      />
      <PassInput onChange={setPassword} value={password} />
      <FormButton text="Увійти" onPress={onLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
