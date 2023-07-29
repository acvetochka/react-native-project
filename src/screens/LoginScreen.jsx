import { StyleSheet, Text, View } from "react-native";
import { Background } from "../components/Background";
import { FormInput } from "../components/FormInput";
import { Title } from "../components/Title";
import { FormButton } from "../components/FormButton";
import { PassInput } from "../components/PassInput";

export const LoginScreen = () => {
  return (
    <Background>
      <View style={styles.wrapper}>
        <Title title="Увійти" />
        <FormInput placeholder="Адреса електронної пошти" />
        <PassInput />
        <FormButton text="Увійти" />
        <Text style={styles.link}>Немає аккаунту? Зареєструватись</Text>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: "60%",
    backgroundColor: "white",
    paddingTop: 32,
    paddingHorizontal: 16,
    position: "relative",
    width: "100%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  link: {
    textAlign: "center",
    color: "#1B4371",
  },
});
