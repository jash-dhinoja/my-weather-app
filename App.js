import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import MainScreen from './screens/MainScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <MainScreen/>
      <StatusBar hidden={true}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'clear'
  },
});
