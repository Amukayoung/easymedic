import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent: "flex-end"
    },
    buttonContainer:{
        marginBottom:100
    },
    button:{
        backgroundColor: "green",
        alignSelf:"center",
        justifyContent:"center",
        width:300,
        borderRadius: 20,
        paddingTop:10,
        paddingBottom:10,
        marginTop:20,
        borderWidth:1,
        borderColor: "white"
    },
    buttonText:{
        alignSelf:"center",
        color:"#FFF"
    }
  });

export default styles;  