import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import { RegistrationScreen } from '../screens/RegistrationScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { BottomNavigation } from './BottomNavigator';
import { getIsAuth } from '../redux/auth/authSelectors';

const MainStack = createStackNavigator();

export const MainNavigator = () => {
  const isAuth = useSelector(getIsAuth);

    return isAuth ? (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Home"
        component={BottomNavigation}
        options={{ headerShown: false }}
      />
    </MainStack.Navigator>
  ) : (
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
    </MainStack.Navigator>
  );}
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
    //   <MainStack.Screen
    //     name="Home"
    //     component={BottomNavigation}
    //     options={{ headerShown: false }}
    //   />
    // </MainStack.Navigator>

