import { StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { PostsScreen } from '../screens/PostsScreen';
import { CreatePostScreen } from '../screens/CreatePostsScreen';
import { ProfileScreen } from '../screens/ProfileScreen';

const Tabs = createBottomTabNavigator();

export const BottomNavigation = () => {
  const navigation = useNavigation();
  return (
    <Tabs.Navigator
      initialRouteName="Posts"
      screenOptions={() => ({
        tabBarShowLabel: false,
        tabBarStyle: {
          justifyContent: 'center',
          height: 60,
          paddingHorizontal: 80,
        },
        headerStyle: {
          backgroundColor: '#FFF',
          borderBottomColor: '#e8e8e8',
          borderBottomWidth: 1,
          height: 88,
        },
      })}
    >
      <Tabs.Screen
        name="Posts"
        component={PostsScreen}
        options={() => ({
          tabBarIcon: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Posts')}>
              <Feather name="grid" size={24} style={styles.icon} />
            </TouchableOpacity>
          ),
          title: 'Публікації',
          headerTitleAlign: 'center',
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Feather name="log-out" size={24} style={styles.iconLogout} />
            </TouchableOpacity>
          ),
        })}
      />
      <Tabs.Screen
        name="CreatePost"
        component={CreatePostScreen}
        options={() => ({
          tabBarIcon: () => (
            <TouchableOpacity
              style={styles.unionButton}
              onPress={() => navigation.navigate('CreatePost')}
            >
              <Feather name="plus" size={13} style={styles.plusIcon} />
            </TouchableOpacity>
          ),
          tabBarStyle: {
            display: 'none',
          },
          title: 'Створити публікацію',
          headerTitleAlign: 'center',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Posts')}>
              <AntDesign name="arrowleft" size={24} style={styles.iconArrow} />
            </TouchableOpacity>
          ),
        })}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={() => ({
          headerShown: false,
          tabBarIcon: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Feather name="user" size={24} style={styles.icon} />
            </TouchableOpacity>
          ),
        })}
      />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  menuWrap: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 39,
    textAlign: 'center',
    paddingVertical: 9,
    borderTopColor: '#e8e8e8',
    borderTopWidth: 1,
  },

  iconLogout: {
    right: 10,
    color: '#BDBDBD',
  },
  iconArrow: {
    color: '#21212180',
    left: 16,
  },
  unionButton: {
    backgroundColor: '#FF6C00',
    width: 70,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },

  icon: {
    color: '#21212180',
  },

  plusIcon: {
    color: '#fff',
  },
});
