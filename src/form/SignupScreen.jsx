import React, { Component } from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function Signup({ navigation }) {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.header}>Sign up</Text>

      <View style={styles.input_field}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          autoCapitalize="none"
          autoCorrect={false}
          autoComplete="off"
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCapitalize="none"
          autoCorrect={false}
          autoComplete="off"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          autoCapitalize="none"
          autoCorrect={false}
          autoComplete="off"
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          autoCapitalize="none"
          autoCorrect={false}
          autoComplete="off"
          secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.signup_link}>
          <Text style={styles.signup_text}>Sign up</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.account_already}>
        <Text>
          You already have an account?
          <TouchableOpacity
            style={styles.login_link}
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text style={styles.login_Text}>Login</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    marginHorizontal: 30,
  },
  header: {
    fontSize: 35,
    color: "purple",
    fontWeight: "600",
  },
  input_field: {
    marginTop: 30,
  },
  input: {
    marginVertical: 19,
    borderBottomWidth: 1,
    borderBottomColor: "purple",
  },
  buttonContainer: {
    backgroundColor: "purple",
    alignitems: "center",
    borderRadius: 10,
    height: 40,
    marginVertical: 30,
    justifyContent: "center",
  },

  signup_link: {
    alignItems: "center",
    justifyContent: "center",
  },
  signup_text: {
    marginVertical: 4,
    color: "white",
    fontSize: 20,
    fontWeight: "400",
  },
  account_already: {
    marginVertical: 10,
  },
  login_Text: {
    position: "relative",
    alignSelf: "center",
    top: 5,
    left: 5,
    color: "purple",
    fontSize: 16,
    fontWeight: "bold",
  },
  login_link: {
    marginLeft: 10,
    fontWeight: "500",
    color: "purple",
  },
});
