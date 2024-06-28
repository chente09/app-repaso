import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import ClimaScreen from "../screens/ClimaScreen";
import WelcomeScree from "../screens/WelcomeScree";
import ListaScreen from "../screens/ListaScreen";
import PersonajesScreen from "../screens/PersonajesScreen";

const Tab = createBottomTabNavigator()
function MyTabs(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Welcome" component={WelcomeScree} />
            <Tab.Screen name="Clima" component={ClimaScreen} options={{headerShown:false}}/>
            <Tab.Screen name="Lista" component={ListaScreen} />
            <Tab.Screen name="Personajes" component={PersonajesScreen} />
        </Tab.Navigator>
    )
}

export default function NavegadorBotton(){
    return(
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    )
}