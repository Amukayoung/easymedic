import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Dimensions} from 'react-native';
import styles from './styles';
import  Svg ,{Image} from 'react-native-svg';

export default function App() {
  const {height,width} = Dimensions.get("window")
  return (
    <View style={styles.container}>
      <View style={StyleSheet.absoluteFill}>
        <Svg height={height} width={width}>
          <Image href={require("./assets/login-background.jpg")} 
          width={width}
          height={height} 
          preserveAspectRatio='xMidyMid slice'/>
        </Svg>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.buttonText}>REGISTER</Text>
        </View>
      </View>
    </View>
  );
}


