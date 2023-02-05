import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Home from './src/Screens/Home';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      {/* <SafeAreaView style={styles.container}> */}
        <Home />
      {/* </SafeAreaView> */}
    </>
  );
}
 // "main": "node_modules/expo/AppEntry.js",
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
