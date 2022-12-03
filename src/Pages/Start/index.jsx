import React from "react";
import { ScrollView, View, Image, Text } from 'react-native';

export default function Start() {
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Image source={require("../../assets/icons/logo.png")}>

          </Image>
          <Text>
            Vamos Transformar sua vida {/n} em Jogo, buscando sempre {/n} o melhor nível
          </Text>
        </View>
      </ScrollView>
    </View>
  )
}