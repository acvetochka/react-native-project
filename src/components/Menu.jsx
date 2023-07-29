import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import grid from "../assets/images/grid.png";
import userIcon from "../assets/images/userIcon.png";
import union from "../assets/images/UnionIcon.png";

export const Menu = () => {
  return (
    <View style={styles.menuWrap}>
      <Image source={grid} />
      <TouchableOpacity style={styles.unionButton}>
        <Image source={union} />
      </TouchableOpacity>
      <Image source={userIcon} />
    </View>
  );
};

const styles = StyleSheet.create({
  menuWrap: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 39,
    textAlign: "center",
    paddingVertical: 9,
    borderTopColor: "#e8e8e8",
    borderTopWidth: 1,
  },

  unionButton: {
    backgroundColor: "#FF6C00",
    width: 70,
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
});
