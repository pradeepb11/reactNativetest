import { StyleSheet } from "react-native";


const customeStyle = StyleSheet.create({
    mainContainer: {
      backgroundColor:'blue',
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    },
    text:{
      fontSize:40,
      color:'#000'
    },
    viewSecound:{flex:1,justifyContent:'space-around', alignItems:'center',backgroundColor:'#a1a1a1', flexDirection:'row'}
  })


  export {
    customeStyle
  }