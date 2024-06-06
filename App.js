
import { StyleSheet, Text, View } from 'react-native';
import Title from './SRC/Components/Title';
import Tierri from './SRC/Components/Tierri';
import Deyvid from './SRC/Components/Deyvid';
import Izabel from './SRC/Components/Izabel';
import Helena from './SRC/Components/Helena';
import Fabiano from './SRC/Components/Fabiano';
import Main from './SRC/Components/Main';

export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
      <Tierri/>
      <Deyvid/>
      <Fabiano/>
      <Helena/>
      <Izabel/>
      <Main/>       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87CEFA',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
