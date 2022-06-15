import { setStatusBarBackgroundColor } from "expo-status-bar";
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
} from "react-native";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      location: "",
      dateofBirth: "",
      names: [
        "ken",
        "Jerry",
        "sam",
        "cal",
        "Jas",
        "ken",
        "Jerry",
        "sam",
        "cal",
        "Jas",
        "ken",
        "Jerry",
        "sam",
        "cal",
        "Jas",
        "ken",
        "Jerry",
        "sam",
        "cal",
        "Jas",
        "ken",
        "Jerry",
        "sam",
        "cal",
        "Jas",
        "ken",
        "Jerry",
        "sam",
        "cal",
        "Jas",
        "ken",
        "Jerry",
        "sam",
        "cal",
        "Jas",
        "ken",
        "Jerry",
        "sam",
        "cal",
        "Jas",
        "ken",
        "Jerry",
        "sam",
        "cal",
        "Jas",
      ],
    };
  }

  render() {
    return (
      <View style={styles.container}>
      <FlatList
      data={this.state.names}
      renderItem={({item})=>{
        return <Text>{item}</Text> 
      // keyExtractor creation
      }}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    marginTop:30
  },
});

export default App;
