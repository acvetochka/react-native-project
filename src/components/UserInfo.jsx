import { Image, StyleSheet, Text, View } from 'react-native';

import user from '../assets/images/User.png';

export const UserInfo = () => {
  return (
    <View style={styles.userWrapper}>
      <Image source={user} style={styles.userImage} />
      <View>
        <Text style={styles.user}>Natali Romanova</Text>
        <Text style={styles.email}>email@example.com</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  userWrapper: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 'auto',
  },

  userImage: {
    width: 60,
    height: 60,
  },

  user: {
    fontSize: 13,
    fontWeight: '700',
  },

  email: {
    fontSize: 11,
  },
});
