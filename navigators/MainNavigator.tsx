import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import WelcomeScree from "../screens/WelcomeScree";
import ClimaScreen from "../screens/ClimaScreen";
import ListaScreen from "../screens/ListaScreen";
import PersonajesScreen from "../screens/PersonajesScreen";
import LoginScreen from "../screens/LoginScreen";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Lista2Screen from "../screens/Lista2Screen";
import Personajes2Screen from "../screens/Personajes2Screen";

// BOTTOM TAB
const Tab = createBottomTabNavigator()
function MyTabs(){
    // initialRouteName="Welcome" ====>para fijar la screen
    return(
        <Tab.Navigator >
            <Tab.Screen name="Welcome" component={WelcomeScree} options={{headerShown:false}} />
            <Tab.Screen name="Clima" component={ClimaScreen} options={{headerShown:false}}/>
            <Tab.Screen name="Top" component={MyTop} options={{headerShown:false}}/>
            <Tab.Screen name="Top2" component={MyTop2} options={{headerShown:false}} />
        </Tab.Navigator>
    )
}

// STACK
const Stack= createStackNavigator()

function MyStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="BottomTab" component={MyTabs}/>
        </Stack.Navigator>
    )
}
// TOP TAB
const Top = createMaterialTopTabNavigator()
function MyTop(){
    return(
        <Top.Navigator>
            <Top.Screen name='Lista' component={ListaScreen}/>
            <Top.Screen name='Lista2' component={Lista2Screen}/>
        </Top.Navigator>
    )
}

const Top2 = createMaterialTopTabNavigator()
function MyTop2(){
    return(
        <Top.Navigator>
            <Top.Screen name='Personajes' component={PersonajesScreen}/>
            <Top.Screen name='Personajes2' component={Personajes2Screen}/>
        </Top.Navigator>
    )
}



export default function Navegador(){
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}

