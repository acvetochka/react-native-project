import {
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { Background } from '../components/Background';
import { Title } from '../components/Title';
import { LoginForm } from '../components/LoginForm';

export const LoginScreen = () => {
  return (
    <Background>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.wrapper}>
          <Title title="Увійти" />
          <LoginForm />
        </View>
      </TouchableWithoutFeedback>
    </Background>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    paddingTop: 32,
    paddingHorizontal: 16,
    position: 'relative',
    width: '100%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingBottom: 50,
  },
});
