import { StyleSheet, Text, View } from "react-native";
import { FormInput } from "./FormInput";
import { PassInput } from "./PassInput";

export const RegistrationForm = () => {
  return (
    <>
      <FormInput name="login" placeholder="Логін" />
      <FormInput name="email" placeholder="Адреса електронної пошти" />
      <View>
        <PassInput />
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
