import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IndexScreen from "./src/components/IndexScreen";
import { BlogProvider } from "./src/components/BlogContext";
import "./global.css";
import ELG from "./src/components/gradientexpo";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <BlogProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={IndexScreen} />
          <Stack.Screen name="ELG" component={ELG} />
        </Stack.Navigator>
      </NavigationContainer>
    </BlogProvider>
  );
}

export default App;
