import { Image, TouchableOpacity, StyleSheet, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIsAuth } from '../redux/auth/authSelectors';
import { updateUser } from '../redux/auth/authOperations';
// import { updateProfile } from 'firebase/auth';

export const Avatar = ({ avatar, setAvatar }) => {
  // const [avatar, setAvatar] = useState(null);
  const isAuth = useSelector(getIsAuth);
  const dispatch = useDispatch();

  const toggleAvatar = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    // console.log(result);
    if (!result.canceled) {
      setAvatar(result.assets[0].uri);
      console.log('avatar', avatar);
      if (isAuth) {
        dispatch(updateUser(avatar));
      }

      // setAvatar(result.assets[0].uri);
    }
  };

  const deleteAvatar = () => {
    setAvatar(null);

    if (isAuth) {
      dispatch(updateUser(null));
    }
    // setAvatar(null);
  };

  return (
    <View style={styles.wrap}>
      <View style={styles.imageWrapper}>
        {avatar && <Image source={{ uri: avatar }} style={styles.image} />}
      </View>
      <TouchableOpacity
        style={styles.iconWrapper}
        onPress={!avatar ? toggleAvatar : deleteAvatar}
      >
        <Feather
          name="plus-circle"
          size={25}
          style={[styles.icon, avatar && styles.iconDelete]}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    position: 'absolute',
    top: -60,
    alignSelf: 'center',
  },

  imageWrapper: {
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
    overflow: 'hidden',
    width: 120,
    height: 120,
    objectFit: 'cover',
  },

  image: {
    borderRadius: 16,
    width: 120,
    height: 120,
    objectFit: 'cover',
    backgroundColor: '#F6F6F6',
  },

  iconWrapper: {
    width: 24,
    height: 24,
    backgroundColor: '#ffffff',
    borderRadius: 50,
    position: 'absolute',
    right: -12,
    zIndex: 999,
    top: 47,
    color: '#FF6C00',
    color: 'green',
    borderWidth: 0,
  },

  icon: {
    width: 24,
    height: 24,
    position: 'absolute',
    backgroundColor: '#ffffff',
    borderRadius: 50,
    color: '#FF6C00',
    borderWidth: 0,
  },

  iconDelete: {
    transform: [{ rotate: '-45deg' }],
    color: '#E8E8E8',
    backgroundColor: '#ffffff',
    borderRadius: 50,
  },
});
