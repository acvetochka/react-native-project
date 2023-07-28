import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Background } from "../components/Background";
// import { BoxShadow } from "react-native-shadow";
// import plus from "../assets/Union.svg";
import add from "../assets/images/add.png";

export const RegistrationScreen = () => {
  return (
    // <View style={styles.container}>
    <Background>
      <View style={styles.wrapper}>
        {/* <BoxShadow style={styles.shadowOpt}> */}
        <View style={styles.wrap}>
          <View style={styles.imageWrapper}>
            <Image source={null} style={styles.image} />
          </View>
          <Image source={add} style={styles.icon} />
        </View>
        {/* </BoxShadow> */}
        <Text style={styles.title}>Peєстрація</Text>
        <TextInput style={styles.input} placeholder="Логін" />
        <TextInput style={styles.input} placeholder="Адреса електронної пошти" />
        <TextInput style={styles.input} placeholder="Пароль" />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Зареєструватися</Text>
        </TouchableOpacity>
        <Text style={styles.link}>Вже є акаунт? Увійти</Text>
      </View>
    </Background>
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flex: 1,
    // justifyContent: "flex-end",
  },
  wrapper: {
    height: "70%",
    backgroundColor: "white",
    paddingTop: 92,
    // paddingBottom: 78,
    paddingHorizontal: 16,
    // paddingRight: 16,
    // paddingLeft: 16,
    position: "relative",
    width: "100%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  wrap: {
    position: "absolute",
    top: -60,
    left: "50%",
    transform: [{ translateX: -50 }],
  },

  imageWrapper: {
    backgroundColor: "#F6F6F6",
    // position: "absolute",
    // top: -60,
    // left: "50%",
    // transform: [{ translateX: -50 }],
    borderRadius: 16,
    borderColor: "#000",
    borderWidth: 1,
    overflow: "hidden",
    shadowColor: "#000",
    shadowRadius: 20,
    shadowOffset: { width: 10, height: 10 },
    elevation: 5,
  },

  shadowOpt: {
    width: 100,
    height: 100,
    color: "#000",
    border: 2,
    radius: 3,
    opacity: 0.2,
    x: 0,
    y: 3,
    style: { marginVertical: 5 },
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
    // left: "calc(50% + 60)",
    right: -12.5,
    bottom: 14,
    // top: 21,
    // transform: []
  },

  title: {
    color: "#212121",
    fontSize: 30,
    fontWeight: "500",
    letterSpacing: 0.3,
    textAlign: "center",
    paddingBottom: 32,
    // text-align: center;
    // font-family: Roboto;
    // font-size: 30px;
    // font-style: normal;
    // font-weight: 500;
    // line-height: normal;
    // letter-spacing: 0.3px;
  },

  input: {
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderWidth: 1,
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
  },

  button: {
    marginTop: 43,
    marginBottom: 16,
    paddingVertical: 16,
    // textTransform: "capitalize",
    backgroundColor: "#FF6C00",
    // textAlign: "center",
    width: "100%",
    borderRadius: 100,
  },

  buttonText: {
    textAlign: "center",
    color: "#fff",
  },

  link: {
    textAlign: "center",
  },
});
