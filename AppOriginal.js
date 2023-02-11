import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { app } from "./config/firebase";
import { getDatabase,set , ref } from "firebase/database";

import { useEffect } from "react";
import { create } from "./config/auth";

export default function App() {
  id = crypto.randomBytes(16).toString("hex");;
  useEffect(() => {
    const database = getDatabase(app);
    // set(ref(database, "users/", 2), {
    set(ref(database, "user/admin/${id}"), {
      username: "luis100",
      email: "ychag@example.com",
      name: "luis",
      age: "30",
    });
  }, []);
  useEffect(() => {
    create('ychag@example.com', 'luis100');

  });

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
