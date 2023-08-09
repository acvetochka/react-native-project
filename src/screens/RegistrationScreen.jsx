import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Background } from '../components/Background';
import { Avatar } from '../components/Avatar';
import { RegistrationForm } from '../components/RegistrationForm';
import { Title } from '../components/Title';

export const RegistrationScreen = () => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={-120}
        style={styles.container}
      >
        <Background>
          <View style={styles.wrapper}>
            <Avatar photo={ null} />
            <Title title="Реєстрація" />
            <RegistrationForm />
            <View style={styles.linkWrapper}>
              <Text style={styles.link}>Вже є акаунт?</Text>
              <Text
                style={styles.linkActive}
                onPress={() => navigation.navigate('Login')}
              >
                Увійти
              </Text>
            </View>
          </View>
        </Background>
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
    paddingTop: 92,
    paddingHorizontal: 16,
    position: 'relative',
    width: '100%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingBottom: 30,
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
