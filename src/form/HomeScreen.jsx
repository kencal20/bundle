import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.loginButton, styles.signUpButton]}
          onPress={() => {
            navigation.navigate("Signup");
          }}
        >
          <Text style={[styles.loginButtonText, styles.signUpButtonText]}>
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    width: "80%",
  },
  loginButton: {
    width: "100%",
    backgroundColor: "dodgerblue",
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
  },
  loginButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },

  signUpButton: {
    backgroundColor: "white",
    marginTop: 10,
    borderColor: "dodgerblue",
  },
  signUpButtonText: {
    color: "dodgerblue",
    fontWeight: "bold",
  },
});
