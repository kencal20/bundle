import React from "react";
import Contact from "./contact";
import { FlatList, Text, View, StyleSheet } from "react-native";

function Contacts() {
  const contacts = [
    { name: "ken", Number: "020-555-2165" },
    { name: "cal", Number: "020-555-2163" },
    { name: "bob", Number: "020-555-2166" },
    { name: "mia", Number: "020-555-2167" },
    { name: "lisa", Number: "020-555-2161" },
    { name: "linda", Number: "020-555-2160" },
    { name: "kendo", Number: "020-555-2169" },
    { name: "moses", Number: "020-555-2164" },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        renderItem={({ item }) => {
          return<Contact name={item.name} Number={item.Number} />;
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
});
export default Contacts;
