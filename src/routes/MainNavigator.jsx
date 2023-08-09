import { RegistrationScreen } from '../screens/RegistrationScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { BottomNavigation } from './BottomNavigator';

const MainStack = createStackNavigator();

export const MainNavigator = () => {
  return (
    <MainStack.Navigator initialRouteName="Login">
      <MainStack.Screen
        name="Registration"
        component={RegistrationScreen}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="Home"
        component={BottomNavigation}
        options={{ headerShown: false }}
      />
    </MainStack.Navigator>
  );
};
