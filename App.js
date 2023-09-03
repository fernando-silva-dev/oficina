import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TelaListaPessoas } from "./Telas/TelaListaPessoas";
import { TelaPessoa } from "./Telas/TelaPessoa";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Lista" component={TelaListaPessoas} />
        <Stack.Screen name="Pessoa" component={TelaPessoa} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
