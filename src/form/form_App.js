
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

class Form extends Component {
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
            placeholder="anonymous@imail.info"
            autoCapitalize="none"
            autoCorrect={true}
            autoComplete="off"
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
            autoCorrect={true}
            autoComplete="off"
            secureTextEntry
            value={this.state.password}
            onChangeText={(password) => {
              this.setState({ password });
            }}
          />
          <Text style={styles.inputHeader}> Location</Text>
          <TextInput
            style={styles.input}
            placeholder="Accra,Ghana"
            autoCapitalize="none"
            autoCorrect={true}
            autoComplete="off"
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
            autoCapitalize="none"
            autoCorrect={true}
            autoComplete="off"
            value={this.state.dateofBirth}
            onChangeText={(dateofBirth) => {
              this.setState({ dateofBirth });
            }}
          />

          <Text style={styles.inputHeader}> Phone number</Text>
          <TextInput
            style={styles.input}
            placeholder="020-000-0000"
            autoCapitalize="none"
            autoCorrect={true}
            autoComplete="off"
            value={this.state.number}
            type="number"
            onChangeText={() => {
              this.setState({ number });
            }}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.signupButton}>
            <Text style={styles.signupText}>Signup</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.signupButton, styles.loginButton]}>
            <Text style={[styles.signupText, styles.loginText]}>login</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginHorizontal: 6,
  },
  registrationForm_Header: {
    marginBottom: 30,
    marginLeft: 30,
    fontWeight: "bold",
    fontSize: 30,
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

  buttonContainer: {
    width: '80%',
    alignItems: 'center',
    marginHorizontal: 15

  },
  signupButton: {
    width: '100%',
    height: 70,
    borderRadius: 9,
    borderColor: "white",
    borderWidth: 2,
    marginBottom: 6,
    marginLeft: 45,
    top: 50,
    backgroundColor: "black",
    padding: 20, justifyContent: "center",
    alignItems: 'center'
  },

  signupText: {
    textAlign: "center",
    color: "white",
    fontSize: 15,
    fontWeight: "bold",

  },
  loginButton: {
    textAlign: 'center',
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 2
  },
  loginText: {
    color: "black",

  },
});

export default Form;