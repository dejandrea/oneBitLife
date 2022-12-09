import React from "react";
import { StyleSheet, Switch } from "react-native";
import { View, Text } from "react-native";

export default function Notification({
  notificationToggle,
  setNotificationToggle,
}) {
  const toggleSwitch = () => {
    setNotificationToggle((previousState) => !previousState);
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Notificação</Text>
        <Switch
          trackColor={{ false: "#FF0044", true: "#2DBE56" }}
          thumbColor={"#FFFFFF"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={notificationToggle}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  titleDisabled: {
    color: "#BBBB",
    fontSize: 20,
    marginRight: 10,
  },
  title: {
    color: "white",
    fontSize: 20,
    marginRight: 10,
  },
});