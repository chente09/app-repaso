import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NavegadorBotton from './navigators/BottomNavigator';
import Navegador from './navigators/MainNavigator';
import Lista2Screen from './screens/Lista2Screen';
import PersonajesScreen from './screens/PersonajesScreen';
import Personajes2Screen from './screens/Personajes2Screen';

export default function App() {
  return (
    <Navegador/>
    // <Lista2Screen/>
    // <Personajes2Screen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
