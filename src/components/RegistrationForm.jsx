import { Alert, StyleSheet, View } from 'react-native';
import { FormInput } from './FormInput';
import { PassInput } from './PassInput';
import { useState } from 'react';
import { FormButton } from './FormButton';
import { useNavigation } from '@react-navigation/native';

export const RegistrationForm = () => {
  const [email, setEmail] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const onLogin = () => {
    if (!email || !login || !password) {
      Alert.alert('Please, complete all fields');
      return;
    }
    navigation.navigate('Home');
    reset();
  };

  const reset = () => {
    setEmail('');
    setLogin('');
    setPassword('');
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

const styles = StyleSheet.create({
  show: {
    position: 'absolute',
    right: 16,
    top: '100%',
    transform: [{ translateY: -50 }],
    color: '#1B4371',
  },
});
