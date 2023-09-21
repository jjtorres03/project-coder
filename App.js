import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from "expo-font"
import Navigator from './src/Navigator.js';
import { fonts } from './src/fonts.js';

export default function App() {

  // Fonts
  const [fontsLoaded] = useFonts(fonts);

  if (fontsLoaded === false) {
    return true;
  }



  return (
     <View style={styles.container}>
       < StatusBar style='dark'/>
      <Navigator />
    </View>
   
  );
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
  }
});
