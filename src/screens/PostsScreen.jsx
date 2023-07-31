import { Image, StyleSheet, Text, View } from 'react-native';
import { UserInfo } from '../components/UserInfo';
import { Menu } from '../components/Menu';
import { Feather } from '@expo/vector-icons';

export const PostsScreen = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.titleWrap}>
        <Text style={styles.title}>Публікації</Text>
        <Feather name="log-out" size={24} style={styles.icon} />
      </View>
      <UserInfo />
      <Menu />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
  },

  titleWrap: {
    justifyContent: 'space-between',
    position: 'relative',
    width: '100%',
    height: 100,
    paddingTop: 55,
    paddingBottom: 11,
    borderBottomColor: '#e8e8e8',
    borderBottomWidth: 1,
    marginBottom: 32,
  },

  title: {
    fontSize: 17,
    fontWeight: '500',
    // fontFamily: "Roboto_500Medium",
    textAlign: 'center',
  },

  icon: {
    position: 'absolute',
    right: 10,
    top: 55,
    color: '#BDBDBD',
  },
});
