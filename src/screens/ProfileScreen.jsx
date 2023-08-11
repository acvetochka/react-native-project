import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import { Background } from '../components/Background';
import { Avatar } from '../components/Avatar';
import { Title } from '../components/Title';

import user from '../assets/images/User.png';
import photo1 from '../assets/images/photo1.png';
import photo2 from '../assets/images/photo2.png';
import photo3 from '../assets/images/photo3.png';
import { Posts } from '../components/Posts';
import { Feather } from '@expo/vector-icons';

export const postArray = [
  {
    id: 1,
    photo: photo1,
    title: 'Ліс',
    comments: 0,
    likes: 0,
    location: 'Ukraine',
  },
  {
    id: 2,
    photo: photo2,
    title: 'Захід на Чорному морі',
    comments: 3,
    likes: 200,
    location: 'Ukraine',
  },
  {
    id: 3,
    photo: photo3,
    title: 'Старий будиночок у Венеції',
    comments: 50,
    likes: 200,
    location: 'Italy',
  },
];

export const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Background>
        <FlatList
          ListHeaderComponent={
            <View style={styles.wrapper}>
              <Avatar photo={user} />
              <TouchableOpacity
                style={styles.logout}
                onPress={() => navigation.goBack()}
              >
                <Feather name="log-out" size={24} style={styles.iconLogout} />
              </TouchableOpacity>
              <Title title="Natali Romanova" />
                 </View>
          }
          data={postArray}
          renderItem={({ item }) => <Posts item={item} />}
          keyExtractor={item => item.id}
        />
      </Background>
    </SafeAreaView>
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
    marginTop: 140,
  },
  logout: {
    position: 'absolute',
    right: 16,
    top: 22,
  },
  iconLogout: {
    color: '#BDBDBD',
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
