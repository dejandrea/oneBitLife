import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import Lottie from "lottie-react-native";
import AnimationService from "../../../Services/AnimationService";

export default function LifeStatus({
  mindHabit,
  moneyHabit,
  bodyHabit,
  funHabit,
}) {
  // status:
  // 100: Máximo
  // 50: médio
  // 25: baixo
  // 00: curto (Acabou o game)
  // No robo nos temos primeiro felicidade e depois saúde

  const [mind, setMind] = useState();

  const [money, setMoney] = useState();

  const [robot, setRobot] = useState();

  useEffect(() => {
    AnimationService.animationStatus(
      mindHabit?.progressBar,
      moneyHabit?.progressBar,
      bodyHabit?.progressBar,
      funHabit?.progressBar,
      setMind,
      setMoney,
      setRobot
    );
  }, [mindHabit, moneyHabit, bodyHabit, funHabit]);

  return (
    <View style={styles.container}>
      <Lottie source={mind} autoPlay loop style={styles.educacaoAnimacao} />
      <Lottie source={money} autoPlay loop style={styles.financasAnimacao} />
      <Lottie source={robot} autoPlay loop style={styles.roboAnimacao} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 300,
  },
  roboAnimacao: {
    width: 190,
    marginTop: 30,
    marginLeft: 25,
  },
  educacaoAnimacao: {
    width: 100,
    marginTop: 50,
    marginLeft: 5,
    position: "absolute",
  },
  financasAnimacao: {
    width: 100,
    marginTop: 50,
    marginLeft: 95,
    position: "absolute",
  },
});
