import {
  Keyboard,
  KeyboardAvoidingView,
  // Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { Background } from '../components/Background';
import { Title } from '../components/Title';
import { LoginForm } from '../components/LoginForm';

export const LoginScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={-150}
        style={styles.container}
      >
        <View style={styles.container}>
          <Background>
            <View style={styles.wrapper}>
              <Title title="Увійти" />
              <LoginForm />
            </View>
            {/* </KeyboardAvoidingView> */}
          </Background>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
  },
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
