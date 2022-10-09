import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from 'react';
import { StyleSheet, View } from 'react-native'



import { AntDesign, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'





const Tab = createBottomTabNavigator();


const Tabs = () => {
    return (
        <Tab.Navigator
            style={styles.shadow}
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: 60,
                    position: 'absolute',
                    bottom: 25,
                    right: 16,
                    left: 16,
                    borderRadius: 15,
                    backgroundColor: "dodgerblue",

                }


            }}
        // initialRouteName="Home"
        // activeColor="#f0edf6"
        // inactiveColor="#3e2465"
        // barStyle={{ backgroundColor: '#694fad' }}


        >
            {/* <Tab.Screen name='Home' component={Home} options={{
                tabBarIcon: ({ focused }) => (
                    <View>
                        <AntDesign name='home' size={30}
                        />
                    </View>
                )

            }} /> */}


           

        </Tab.Navigator>

    );
}
const styles = StyleSheet.create({
    shadow: {
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
})

export default Tabs;