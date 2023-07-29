import { StyleSheet, Text, View } from "react-native";
import { FormInput } from "./FormInput";

export const RegistrationForm = () => {
  return (
    <>
      <FormInput placeholder="Логін" />
      <FormInput placeholder="Адреса електронної пошти" />
      <View>
        <FormInput placeholder="Пароль" />
        <Text style={styles.show}>Показати</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  show: {
    position: "absolute",
    right: 16,
    top: "100%",
    transform: [{ translateY: -50 }],
    color: "#1B4371",
  },
});
