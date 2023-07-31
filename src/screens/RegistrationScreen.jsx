import { StyleSheet, Text, View } from 'react-native';
import { Background } from '../components/Background';
import { Avatar } from '../components/Avatar';
import { RegistrationForm } from '../components/RegistrationForm';
import { FormButton } from '../components/FormButton';
import { Title } from '../components/Title';

export const RegistrationScreen = () => {
  return (
    <Background>
      <View style={styles.wrapper}>
        <Avatar />
        <Title title="Реєстрація" />
        <RegistrationForm />
        <FormButton text="Зареєструватися" />
        <Text style={styles.link}>Вже є акаунт? Увійти</Text>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    backgroundColor: 'white',
    paddingTop: 92,
    paddingHorizontal: 16,
    position: 'relative',
    width: '100%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingBottom: 30,
  },

  link: {
    textAlign: 'center',
    color: '#1B4371',
  },
});
