import { StatusBar } from 'expo-status-bar';
import LayoutFlexbox from './Reactnative-Basic/LayoutFlexbox';
import { StyleSheet, Text, View } from 'react-native'
export default function App() {
  return (
    <View style={styles.container}>
     <LayoutFlexbox/>
    </View>
  );
}
const styles = StyleSheet.create({
  dummyText:{
    margin:16,
    borderWidth:2,
    borderColor:"red",
    padding:16,
  },
  container:{
    marginTop:50,
    padding:16,
    flex:1,
    flexDirection:"column",
    alignItems:"center",
  }
});
