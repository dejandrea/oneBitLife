import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function DefaultButton({
  buttonText,
  handlePress,
  width,
  height,
}){
  return(
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={handlePress}
      style={[styles.button,{width:width,height:height}]}
    >
      <Text style={styles.buttonText}>
        {buttonText}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button:{
    alignItems:"center",
    justifyContent:"center",
    borderWidth:1,
    borderColor:"#fff",
    borderRadius:10,
    marginBottom:20
  },
  buttonText:{
    color:"#fff",
    fontWeight:"bold",
    fontSize:20
  }

})