import { Image, StyleSheet, View } from "react-native";
import add from "../assets/images/add.png";

export const Avatar = () => {
  return (
    <View style={styles.wrap}>
      <View style={styles.imageWrapper}>
        <Image source={null} style={styles.image} />
      </View>
      <Image source={add} style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    position: "absolute",
    top: -60,
    left: "50%",
    transform: [{ translateX: -50 }],
  },

  imageWrapper: {
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    borderColor: "#000",
    borderWidth: 1,
    overflow: "hidden",
    shadowColor: "#000",
    shadowRadius: 20,
    shadowOffset: { width: 10, height: 10 },
    elevation: 5,
  },

  image: {
    width: 120,
    height: 120,
    objectFit: "cover",
    backgroundColor: "#F6F6F6",
  },

  icon: {
    width: 25,
    height: 25,
    position: "absolute",
    right: -12.5,
    bottom: 14,
  },
});
