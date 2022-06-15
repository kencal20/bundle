import { setStatusBarBackgroundColor } from "expo-status-bar";
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      location: "",
      dateofBirth: "",
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.registrationForm_Header}>Registration Form</Text>
        <View style={styles.leftInput}>
          <Text style={styles.inputHeader}> Email</Text>
          <TextInput
            style={styles.input}
            placeholder="email"
            autoCapitalize="none"
            autoCorrect="false"
            autoComplete="false"
            value={this.state.email}
            onChangeText={(email) => {
              this.setState({ email });
            }}
          />
          <Text style={styles.inputHeader}> Password</Text>
          <TextInput
            style={styles.input}
            placeholder="password"
            autoCapitalize="none"
            autoCorrect="false"
            autoComplete="false"
            secureTextEntry="true"
            value={this.state.password}
            onChangeText={(password) => {
              this.setState({ password });
            }}
          />
          <Text style={styles.inputHeader}> Location</Text>
          <TextInput
            style={styles.input}
            placeholder="Location"
            autoCapitalize="true"
            autoCorrect="true"
            autoComplete="true"
            value={this.state.location}
            onChangeText={(location) => {
              this.setState({ location });
            }}
          />
        </View>
        <View style={styles.rightInput}>
          <Text style={styles.inputHeader}> Date of Birth</Text>
          <TextInput
            style={styles.input}
            placeholder="dd/mm/yyyy"
            autoCapitalize="true"
            autoCorrect="true"
            autoComplete="true"
            value={this.state.dateofBirth}
            onChangeText={(dateofBirth) => {
              this.setState({ dateofBirth });
            }}
          />

          <Text style={styles.inputHeader}> Phone number</Text>
          <TextInput
            style={styles.input}
            placeholder="phone number"
            autoCapitalize="true"
            autoCorrect="true"
            autoComplete="true"
            value={this.state.number}
            type="number"
            onChangeText={() => {
              this.setState({ dateofBirth });
            }}
          />
        </View>
        <TouchableOpacity style={styles.signupButton}>
          <Text style={styles.signupText}>Signup</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText}>login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginHorizontal: 2,
  },

  input: {
    width: 140,
    height: 47,
    borderRadius: 9,
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 6,
    marginLeft: 15,
    flexDirection: "row",
  },

  rightInput: {
    position: "absolute",
    left: 150,
    top: 70,
  },

  inputHeader: {
    marginBottom: 0,
    marginLeft: 16,
    fontWeight: "bold",
  },

  registrationForm_Header: {
    marginBottom: 30,
    marginLeft: 30,
    fontWeight: "bold",
    fontSize: 30,
  },
  signupButton: {
    width: 140,
    height: 47,
    borderRadius: 9,
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 6,
    marginLeft: 45,
    top: 50,
    backgroundColor: "dodgerblue",
  },

  signupText: {
    textAlign: "center",
    margin: 14.5,
    color: "white",
    fontWeight: "bold",
  },
  loginButton: {
    position: "absolute",
    left: 200,
    top: 335,
    textAlign:'center'
  },
  loginText: {
    textAlign: "center",
    margin: 14.5,
    color: "dodgerblue",
    fontWeight: "bold",
  },
});

export default App;