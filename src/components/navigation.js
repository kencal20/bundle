import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Signup from "../../src/form/SignupScreen";
import Contact from "../../src/list/contacts";
import Main from "../../src/components/main";
import Login from "../../src/form/Login";

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Main" component={Main} /> */}

        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="contacts" component={Contact} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
