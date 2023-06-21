import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { AutocompleteDropdownContextProvider } from 'react-native-autocomplete-dropdown';
import MainScreen from './screens/MainScreen';

export default function App() {
  return (
    <AutocompleteDropdownContextProvider>
      <View style={styles.container}>
        <MainScreen />
        <StatusBar hidden={true} />
      </View>
    </AutocompleteDropdownContextProvider>
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
