import React, { Component } from "react";
import { app, getDatabase, ref, set } from "./config/firebase";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";

class Inputs extends Component {
  state = {
    username: "",
    email: "",
    text: "",
  };

  handleusername = (text) => {
    this.setState({ username: text });
  };
  handleNaame = (text) => {
    this.setState({ naame: text });
  };
  handleEmail = (text) => {
    this.setState({ email: text });
  };
  Username = (username, email, name) => {
    alert("username: " + username + " email: " + email + " name: " + name);
};
login = (username,email,name) => {
    alert("usuario: " + username + " email: " + email+ " name: " + name);
    const database = getDatabase(app);
    set(ref(database, "users/", 1), {
      username: username,
      email: email,
      naame: name,
      age: "30",
    });                  

  };
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="username"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={this.handleusername}
        />
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="email"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={this.handleEmail}
        />
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="naame"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={this.handleNaame}
        />

        <TouchableOpacity
          style={styles.submitButton}
          onPress={() =>
            this.login(this.state.username, this.state.email, this.state.naame)
          }
        >
          <Text style={styles.submitButtonText}> Submit </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default Inputs;

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: "#7a42f4",
    borderWidth: 1,
  },
  submitButton: {
    backgroundColor: "#7a42f4",
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: "white",
  },
});
