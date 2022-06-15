import { setStatusBarBackgroundColor } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

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
    return <View style={styles.container}></View>;
  }
}

const styles = StyleSheet.create({
  container: {},
});

export default App;
