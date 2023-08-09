import { Alert, StyleSheet, View } from 'react-native';
import { FormInput } from './FormInput';
import { PassInput } from './PassInput';
import { FormButton } from './FormButton';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const onLogin = () => {
    if (!email || !password) {
      Alert.alert('Please, complete all fields');
      return;
    }
    navigation.navigate('Home');
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
