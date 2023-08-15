import { useState } from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { comments } from '../data/comments';
import photo from '../assets/images/photo1.png';
import user from '../assets/images/User.png';
import { Feather } from '@expo/vector-icons';

const Comment = ({ comment }) => {
  const { text, userPhoto, date } = comment;
  return (
    <View
      style={[
        styles.wrapper,
        comment.author === 'author' && styles.wrapperAuthor,
      ]}
    >
      <Image source={userPhoto} style={styles.ava} />
      <View
        style={[
          styles.textWrapper,
          comment.author !== 'author'
            ? { borderTopLeftRadius: 0 }
            : { borderTopRightRadius: 0 },
        ]}
      >
        <Text style={styles.comment}>{text}</Text>
        <Text style={[styles.date, comment.id % 2 === 0]}>{date}</Text>
      </View>
    </View>
  );
};

export const CommentsScreen = () => {
  const [comment, setComment] = useState('');
  const addComment = () => {
    const newComment = {
      id: Math.random(),
      text: comment,
      userPhoto: user,
      date: Date(),
      author: 'author',
      // date: '09 червня, 2020 | 09:14',
    };
    comments.push(newComment);
    setComment('');
  };
  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <View style={styles.imageWrapper}>
            <Image source={photo} style={styles.image} />
          </View>
        }
        data={comments}
        renderItem={({ item }) => <Comment comment={item} />}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
      <View>
        <TextInput
          placeholder="Коментувати..."
          placeholderTextColor={'#BDBDBD'}
          style={styles.input}
          value={comment}
          onChangeText={setComment}
        />
        <TouchableOpacity style={styles.button} onPress={addComment}>
          <Feather name="arrow-up" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  imageWrapper: {
    paddingVertical: 32,
  },
  wrapper: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    gap: 16,
    marginBottom: 24,
  },
  wrapperAuthor: {
    flexDirection: 'row-reverse',
  },
  image: {
    width: '100%',
    height: 240,
    borderRadius: 8,
  },
  ava: {
    width: 28,
    height: 28,
    borderRadius: 50,
  },
  textWrapper: {
    flex: 1,
    textAlign: 'center',
    backgroundColor: '#00000008',
    padding: 16,
    gap: 8,
    borderRadius: 6,
  },
  comment: {
    fontSize: 13,
  },
  date: {
    fontSize: 10,
    color: '#BDBDBD',
  },

  input: {
    height: 50,
    borderRadius: 100,
    padding: 16,
    borderColor: '#E8E8E8',
    borderWidth: 1,
    backgroundColor: '#f6f6f6',
    marginTop: 10,
  },
  button: {
    position: 'absolute',
    width: 34,
    height: 34,
    borderRadius: 50,
    backgroundColor: '#FF6C00',
    right: 8,
    top: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
