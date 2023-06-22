import { NavigationContainer } from "@react-navigation/native";
import { StackNavigationOptions, createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/login";
import { Home } from "../screens/Home";

const Stack = createStackNavigator();
const stackNavigatorOptions: StackNavigationOptions = {
  headerShown: false, // Oculta a barra superior
};

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={stackNavigatorOptions}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}
