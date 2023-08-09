import { Image, StyleSheet, View } from "react-native";
import { Feather } from "@expo/vector-icons";
// import { useState } from 'react';

export const Avatar = ({ photo }) => {
  // const [photo, setPhoto] = useState(null);

  return (
    <View style={styles.wrap}>
      <View style={styles.imageWrapper}>
        <Image source={photo} style={styles.image} />
      </View>
      <Feather
        name="plus-circle"
        size={25}
        style={[styles.icon, photo !== null && styles.iconDelete]}
      />
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
  },

  image: {
    width: 120,
    height: 120,
    objectFit: 'cover',
    backgroundColor: '#F6F6F6',
  },

  icon: {
    width: 25,
    height: 25,
    position: 'absolute',
    right: -12.5,
    bottom: 14,
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
