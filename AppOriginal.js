import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { app, getDatabase, ref, set } from "./config/firebase";
import { useEffect } from "react";
export default function App() {
  useEffect(() => {
    const database = getDatabase(app);
    set(ref(database, "users/", 1), {
      username: "luis100",
      email: "ychag@example.com",
      name: "luis",
      age: "30",
    });
  }, []);
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
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
