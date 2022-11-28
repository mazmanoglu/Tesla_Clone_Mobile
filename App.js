import { StatusBar } from 'expo-status-bar';
import { ImageBackground, requireNativeComponent, StyleSheet, Text, View } from 'react-native';
import CarItem from './components/carItems'; //caritem dan sonra index yazmadik cunku bu path in default degeri index.js

export default function App() {
  return (
    <View style={styles.container}>

      {/* call the components */}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"grey",
    alignItems: 'center',
    justifyContent: 'center',
  },
});


