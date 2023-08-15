import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Background } from '../components/Background';
import { Avatar } from '../components/Avatar';
import { Title } from '../components/Title';
import { Posts } from '../components/Posts';
import { posts } from '../data/posts';
import user from '../assets/images/User.png';
import { Feather } from '@expo/vector-icons';

export const ProfileScreen = () => {
  const navigation = useNavigation();

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
          data={posts}
          renderItem={({ item }) => <Posts item={item} />}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
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
