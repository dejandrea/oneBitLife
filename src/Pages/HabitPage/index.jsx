import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";

export default function HabitPage(){
  
  const navigation = useNavigation()

  return(
    <View style={styles.container}>
      <ScrollView>
        <View>
          <TouchableOpacity style={styles.backPageBtn}
            onPress={()=> navigation.goBack()}
          >
            <Image 
              style={styles.arrowBack}
              source={require("../../assets/icons/arrowBack.png")}
            />
          </TouchableOpacity>
          <View style={styles.mainContent}></View>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(21, 21, 21, 0.98)",
  },
  backPageBtn: {
    width: 40,
    height: 40,
    margin: 25,
  },
  arrowBack: {
    width: 40,
    height: 40,
  },
  mainContent: {
    width: 250,
    alignSelf: "center",
  },
})