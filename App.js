// import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';

// import { SafeAreaView, StyleSheet, View } from 'react-native';
// import { RegistrationScreen } from './src/screens/RegistrationScreen';
// import { LoginScreen } from './src/screens/LoginScreen';
// import { PostsScreen } from './src/screens/PostsScreen';
import { NavigationContainer } from '@react-navigation/native';
import { MainNavigator } from './src/routes/MainNavigator';
// import { createStackNavigator } from '@react-navigation/stack';

// const MainStack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}

      // <MainStack.Navigator initialRouteName="Login">
      //   <MainStack.Screen
      //     name="Registration"
      //     component={RegistrationScreen}
      //     options={{ headerShown: false }}
      //   />
      //   <MainStack.Screen
      //     name="Login"
      //     component={LoginScreen}
      //     options={{ headerShown: false }}
      //   />
      //   {/* <MainStack.Screen name="Home" component={Home} /> */}
      // </MainStack.Navigator>;
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
// });


   
      // <SafeAreaView style={styles.container}>
      //   //{' '}
      //   <View>
      //     // <RegistrationScreen />
      //     <LoginScreen />
      //     // <PostsScreen />
      //     // <StatusBar style="auto" />
      //     //{' '}
      //   </View>
      // </SafeAreaView>;