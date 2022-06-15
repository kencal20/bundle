import React from 'react';
import {

  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

import profile from './assets/profile.jpg'

function App() {
  return (
    <View style={styles.container}>
      <Image source={profile} style={styles.image} />
      <View style={styles.detailContaner}>
        <Text style={styles.label}>Name</Text>
        <Text style={[styles.label,styles.info]}>Tony Stark</Text>
      </View>

      <View style={styles.detailContaner}>
        <Text style={styles.label}>Email</Text>
        <Text style={[styles.label,styles.info]}>stark@tony.com</Text>
      </View>

      <View style={styles.detailContaner}>
        <Text style={styles.label}>Gender</Text>
        <Text style={[styles.label,styles.info]}>Male</Text>
      </View>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 5

  },
  image: {
    marginTop:100,
    width: 150,
    height: 150,
    marginBottom: 40,
    alignSelf:'center',
    borderRadius:90,
  },
  detailContaner: {
    flexDirection: 'row',
   marginVertical:1
  },
  label: {
    borderColor: 'black',
    borderWidth: 1,
    fontSize: 15,
    flex: 1,
    paddingHorizontal:2
  },
  info: {
    flex: 2
  }
});
export default App