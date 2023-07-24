import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Dimensions} from 'react-native';
import styles from './styles';
import  Svg ,{Image} from 'react-native-svg';

export default function App() {
  const {height,width} = Dimensions.get("window")
  return (
    <View style={styles.container}>
    </View>
  );
}


