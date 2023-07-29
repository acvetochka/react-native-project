import { ImageBackground, StyleSheet } from "react-native";
import BackgroundImage from "../assets/images/PhotoBG.png";

export const Background = ({ children }) => {
  return (
    <>
      <ImageBackground source={BackgroundImage} resizeMode="cover" style={styles.image}>
        {children}
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "flex-end",
    width: "100%",
  },
});
