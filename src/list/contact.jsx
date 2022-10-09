import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import profile from "../../assets/profile.jpg";
import {
  FontAwesome5,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
function Contact({ name, Number }) {
  return (
    <View style={styles.container}>
      <Image source={profile} style={styles.img} />
      <View style={styles.infoContainer}>
        <Text style={styles.name} numberOfLines={1}>
          {name}
        </Text>
        <Text>{Number}</Text>
      </View>
      <View style={styles.Icon}>

<FontAwesome5
         name="phone-alt"
          size={16} 
          color="dodgerblue" />
      </View>
      <View style={styles.Icon}>
        <MaterialCommunityIcons
          name="message-processing"
          size={19}
          color="dodgerblue"
        />
      </View>
      <View style={styles.Icon}>
        <SimpleLineIcons
         name="options-vertical" 
         size={17} 
         color="#a8a8a8" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 20,
    alignItems: "center",
    marginVertical:6
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },
  infoContainer: {
    flex: 4,
    justifyContent: "center",
    marginHorizontal: 10,
  },
  name: {
    fontWeight: "bold",
    fontsize: 17,
  },
  Icon: {
    flex: 1,
  },
});
export default Contact;
