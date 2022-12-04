import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";

export default function ExplanationCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Através desse APP você vai consolidar {"\n"} 4 hábitos de áreas
        fundamentais:
      </Text>

      {/* Mente */}
      <View style={styles.explanationContainer}>
        <Image
          source={require("../../../assets/icons/educationIcon.png")}
          style={styles.icon}
        />
        <Text style={styles.description}>
          <Text style={styles.mind}> Mente: </Text>
          Hábitos para melhorar a sua inteligência / Sabedoria
        </Text>
      </View>

      {/* Finanças */}
      <View style={styles.explanationContainer}>
        <Image
          source={require("../../../assets/icons/moneyIcon.png")}
          style={styles.icon}
        />
        <Text style={styles.description}>
          <Text style={styles.money}> Financeiro: </Text>
          Hábitos para te ajudar com controle financeiro
        </Text>
      </View>

      {/* Corpo */}
      <View style={styles.explanationContainer}>
        <Image
          source={require("../../../assets/icons/bodyIcon.png")}
          style={styles.icon}
        />
        <Text style={styles.description}>
          <Text style={styles.body}> Corpo: </Text>
          Hábitos para te deixar mais saudável e forte
        </Text>
      </View>

      {/* Diversão */}
      <View style={styles.explanationContainer}>
        <Image
          source={require("../../../assets/icons/funIcon.png")}
          style={styles.icon}
        />
        <Text style={styles.description}>
          <Text style={styles.fun}> Humor: </Text>
          Hábitos para controlar Stress e aumentar felicidade
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#151515",
    width: 350,
    borderRadius:25,
    padding:30
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
  },
  explanationContainer: {
    flexDirection:"row",
    marginTop:30,
  },
  icon:{
    width:40,
    height:40,
    marginRight:5
  },
  description: {
    color: "#fff",
  },
  mind:{
    color:"#9887f3",
    fontWeight:'bold'
  },
  money:{
    color:"#85b865",
    fontWeight:'bold'
  },
  fun:{
    color:"#fe7f23",
    fontWeight:'bold'
  },
  body:{
    color:"#ff0d44",
    fontWeight:'bold'
  }
});
