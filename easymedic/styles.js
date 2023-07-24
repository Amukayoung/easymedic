import { StyleSheet,Dimensions } from "react-native";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
const {height,width} = Dimensions.get("window");
const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent: "flex-end"
    },
    buttonContainer:{
       height:height/2.3 
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
        fontSize:20,
        fontWeight:600,
        color:"#FFF"
    },
    loginContainer:{
        backgroundColor: "#fff",
        paddingTop:30,
        paddingBottom:30,
        alignItems:"center"
    },
    textInput:{
        height:40,
        borderWidth:1,
        borderColor:"green",
        paddingLeft:20,
        marginTop:15,
        width: 300,
        borderRadius:5

    },
    formButton:{
        backgroundColor:"green",
        width:300,
        borderRadius:5,
        paddingTop:5,
        paddingBottom:5,
        marginTop:20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.7,
        shadowRadius: 7.49,

        elevation: 12,
    },
    closeButton:{
        backgroundColor:"#fff",
        alignSelf:"center",
        justifyContent:"center",
        height:40,
        width:40,
        borderRadius:20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.7,
        shadowRadius: 7.49,

        elevation: 12,

    },
    xText:{
        color:"green",
        alignSelf:"center"
    }
  });

export default styles;  