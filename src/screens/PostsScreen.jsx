import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { UserInfo } from '../components/UserInfo';
import { Posts } from '../components/Posts';
import { postArray } from './ProfileScreen';

export const PostsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <UserInfo/>
        <FlatList
          data={postArray}
          renderItem={({ item }) => <Posts item={item} />}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },

});
