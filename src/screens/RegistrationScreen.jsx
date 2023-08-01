import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { Background } from '../components/Background';
import { Avatar } from '../components/Avatar';
import { RegistrationForm } from '../components/RegistrationForm';
import { Title } from '../components/Title';

export const RegistrationScreen = () => {
  return (
    <Background>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.wrapper}>
          <Avatar />
          <Title title="Реєстрація" />
          <RegistrationForm />
          <Text style={styles.link}>Вже є акаунт? Увійти</Text>
        </View>
      </TouchableWithoutFeedback>
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
