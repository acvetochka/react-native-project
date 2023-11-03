import { StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';

import { MapScreen } from '../screens/MapScreen';
import { PostsScreen } from '../screens/PostsScreen';
import { CommentsScreen } from '../screens/CommentsScreen';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { getIsAuth } from '../redux/auth/authSelectors';
import { logOut } from '../redux/auth/authOperations';

const PostsStack = createStackNavigator();

export const PostsNavigator = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <PostsStack.Navigator
      initialRouteName="PostsScreen"
      screenOptions={{
        tabBarShowLabel: false,
        headerBackVisible: false,
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.navigate('PostsScreen')}>
            <AntDesign name="arrowleft" size={24} style={styles.iconArrow} />
          </TouchableOpacity>
        ),
      }}
    >
      <PostsStack.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={() => ({
          headerBackVisible: false,
          title: 'Публікації',
          headerTitleAlign: 'center',
          headerRight: () => (
            // <TouchableOpacity onPress={() => navigation.goBack()}>
            <TouchableOpacity onPress={() => dispatch(logOut())}>
              <Feather name="log-out" size={24} style={styles.iconLogout} />
            </TouchableOpacity>
          ),
          headerLeft: '',
          tabBarLabel: '',
        })}
      />
      <PostsStack.Screen
        name="Comments"
        component={CommentsScreen}
        options={() => ({
          title: 'Коментарі',
          headerTitleAlign: 'center',
          tabBarStyle: {
            display: 'none',
          },
        })}
      />
      <PostsStack.Screen
        name="Map"
        component={MapScreen}
        options={() => ({ title: 'Карта', headerTitleAlign: 'center' })}
      />
    </PostsStack.Navigator>
  );
};

const styles = StyleSheet.create({
  iconLogout: {
    right: 10,
    color: '#BDBDBD',
  },
  iconArrow: {
    color: '#21212180',
    left: 16,
  },
});
