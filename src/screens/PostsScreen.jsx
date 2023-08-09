import { StyleSheet, Text, View } from 'react-native';
import { UserInfo } from '../components/UserInfo';

export const PostsScreen = () => {
  return (
    <View style={styles.wrapper}>
      <UserInfo />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
});
