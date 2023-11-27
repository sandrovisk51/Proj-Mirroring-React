import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import PageIndex from "../pages/";
import PageSisExtenal from "../pages/sisExtenal";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="PageIndex" component={PageIndex} 
            options={{ title:'', headerTransparent: true, hearderShown: false }}
        />
        <Stack.Screen name="PageSisExtenal" component={PageSisExtenal}
            options={{ title:'', headerTransparent: true, hearderShown: false }}
         />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
