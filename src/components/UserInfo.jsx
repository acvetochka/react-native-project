import { Image, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { getEmail, getLogin, getAvatar } from '../redux/auth/authSelectors';
// import user from '../assets/images/User.png';

export const UserInfo = () => {
  const email = useSelector(getEmail);
  const avatar = useSelector(getAvatar);
  const login = useSelector(getLogin);

  return (
    <View style={styles.userWrapper}>
      <Image source={{ uri: avatar }} style={styles.userImage} />
      <View>
        <Text style={styles.user}>{login}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  userWrapper: {
    paddingHorizontal: 16,
    paddingTop: 32,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 32,
  },

  userImage: {
    width: 60,
    height: 60,
    borderRadius: 16,
  },

  user: {
    fontSize: 13,
    fontWeight: '700',
  },

  email: {
    fontSize: 11,
  },
});
