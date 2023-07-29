import { StyleSheet, TextInput } from "react-native";

export const FormInput = ({ placeholder }) => {
  return <TextInput style={styles.input} placeholder={placeholder} />;
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderWidth: 1,
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    position: "relative",
  },
});
