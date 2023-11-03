import {
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { Background } from '../components/Background';
import { Title } from '../components/Title';
import { LoginForm } from '../components/LoginForm';
import { useNavigation } from '@react-navigation/native';
import { logIn } from '../redux/auth/authOperations';
import { useEffect } from 'react';
import { getIsAuth } from '../redux/auth/authSelectors';
import { useSelector } from 'react-redux';

export const LoginScreen = () => {
  const navigation = useNavigation();
  const isAuth = useSelector(getIsAuth);

  useEffect(() => {
    console.log('isAUth', isAuth);
    if (isAuth) {
      navigation.navigate('Home');
    }
  }, [isAuth]);

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
              <View style={styles.linkWrapper}>
                <Text style={styles.link}>Немає аккаунту?</Text>
                <Text
                  style={styles.linkActive}
                  onPress={() => navigation.navigate('Registration')}
                >
                  Зареєструватись
                </Text>
              </View>
            </View>
          </Background>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  linkWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 5,
  },
  link: {
    color: '#1B4371',
  },
  linkActive: {
    color: '#1B4371',
    textDecorationColor: '#1B4371',
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
  },
});
