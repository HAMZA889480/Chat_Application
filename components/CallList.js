import React, { useState } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { TouchableRipple, Badge, IconButton, Icon } from "react-native-paper";
import defaultPic from "../assets/user_default_1.png";
export default function CallList({ callRecords }) {
  const [isCallOptionsVisible, setIsCallOptionsVisible] = useState(false);
  return (
    <>
      <TouchableRipple
        onPress={() => {
          setIsCallOptionsVisible(!isCallOptionsVisible);
        }}
        onLongPress={() => console.log("Long Pressed")}
        rippleColor="#adf7b2"
        style={styles.list_container}
      >
        <>
          <Image source={defaultPic} style={styles.user_image} />
          <View style={styles.list_content}>
            <View style={styles.user_name_container}>
              {callRecords.communicatorName ? (
                <Text style={styles.user_name}>
                  {callRecords.communicatorName}
                </Text>
              ) : (
                <Text style={styles.user_name}>
                  {callRecords.coomunicatorNumber}
                </Text>
              )}
            </View>
            <View style={styles.message_container}>
              {callRecords.status === "Incoming" ? (
                <Icon
                  source="arrow-bottom-left-thin"
                  size={23}
                  color={callRecords.status === "Missed" ? "red" : "#169e1f"}
                />
              ) : (
                <Icon
                  source="arrow-top-right-thin"
                  size={23}
                  color={callRecords.status === "Missed" ? "red" : "#169e1f"}
                />
              )}
              <Text style={styles.callDate}>June 10, </Text>
              <Text style={styles.callTime}>12:00 PM</Text>
            </View>
          </View>

          {callRecords.missedCallCount > 0 && (
            <Badge style={styles.badgeStyle}>
              {callRecords.missedCallCount}
            </Badge>
          )}

          <View style={styles.callIcon}>
            <Icon source="phone" size={30} color="#169e1f" />
          </View>
        </>
      </TouchableRipple>
      {isCallOptionsVisible && (
        <View style={styles.callOptions}>
          <IconButton
            icon="history"
            size={30}
            onPress={() => console.log("Pressed")}
          />
          <IconButton
            icon="android-messages"
            size={30}
            onPress={() => console.log("Pressed")}
          />
          <IconButton
            icon="phone-plus"
            size={30}
            onPress={() => console.log("Pressed")}
          />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  user_image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  list_container: {
    padding: 10,
    flexDirection: "row",
    backgroundColor: "#eee",
    alignContent: "center",
    marginBottom: 7,
  },

  list_content: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
  user_name_container: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  message_container: {
    flexDirection: "row",
  },
  user_name: {
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 0.5,
    paddingLeft: 17,
  },
  time: {
    fontSize: 15,
    color: "#8a8888",
    fontWeight: "semibold",
  },

  callDate: {
    paddingHorizontal: 5,
    fontSize: 15,
    color: "#000",
    fontWeight: "semibold",
  },

  callIcon: {
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 12,
  },
  badgeStyle: {
    fontSize: 10,
    backgroundColor: "#169e1f",
    position: "absolute",
    top: 10,
    right: 12,
  },
  callOptions: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginTop: -10,
    borderTopWidth: 2,
    borderColor: "#ccc",
    backgroundColor: "#eee",
    marginBottom: 7,
  },
});
