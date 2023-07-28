import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { RegistrationScreen } from "./src/screens/RegistrationScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <RegistrationScreen />
      {/* <Text>Hallo Dima! Wie geht's dir? Treba bilsche sliv. Schche bilsche. Sche trochi</Text>
        <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
