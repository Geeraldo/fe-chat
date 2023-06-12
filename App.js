import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import CreateRoom from './components/CreateRoom';



export default function App() {
  return (
    <>
    <View style={styles.container}>
      <CreateRoom />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
