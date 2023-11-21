import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, StackView } from "@react-navigation/stack";

import Login from "./pages/login";
import Cadastro from "./pages/cadastro";
import Home from "./pages/home";
import Agenda from "./pages/agenda";
import Palestrantes from "./pages/palestrantes";
import Artigos from "./pages/artigos";
import Sac from "./pages/sac";
export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: true }}
        initialRouteName="Login"
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Home" component={Home} screenOptions={{}} />
        <Stack.Screen name="Agenda" component={Agenda} />
        <Stack.Screen name="Palestrantes" component={Palestrantes} />
        <Stack.Screen name="Artigos" component={Artigos} />
        <Stack.Screen name="Sac" component={Sac} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
