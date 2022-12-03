import React from "react";
import { ScrollView, View, Image, Text, StyleSheet} from 'react-native';

export default function Start() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{alignItems:"center"}}>
          <Image style={
            styles.logo
          } source={require("../../assets/icons/logo3.png")}>

          </Image>
          <Text style={styles.description}>
            Vamos Transformar sua vida {'\n'} em um Jogo, buscando sempre {'\n'} o melhor nível
          </Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'rgba(21,21,21,0.98)'
  },
  logo:{
    width:300,
    height:60,
    marginTop:60,
    marginBottom:20,
  },
  description:{
    color:"#fff",
    fontSize:20,
    textAlign:"center",
    marginVertical:60
  }
})