import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Signup from "../form/SignupScreen";
import Contact from "../../src/list/contacts";
import Login from "../../src/form/Login";
import HomeScreen from "../form/HomeScreen";


const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen
          name="Signup"
          component={Signup} />
        <Stack.Screen
          name="contacts"
          component={Contact} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
