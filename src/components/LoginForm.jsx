import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { FormInput } from './FormInput';
import { PassInput } from './PassInput';
import { FormButton } from './FormButton';
import { useState } from 'react';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = () => {
    if (!email || !password) {
      Alert.alert('Please, complete all fields');
      return;
    }
    console.log({ email, password });
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
      <Text style={styles.link}>Немає аккаунту? Зареєструватись</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  link: {
    textAlign: 'center',
    color: '#1B4371',
  },
});
