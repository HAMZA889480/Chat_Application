import React from "react";

import { Text, View, StyleSheet, Image } from "react-native";
import { IconButton } from "react-native-paper";
import my_pics from "../assets/user_default_1.png";
export default function SelfInfoList() {
  return (
    <View style={styles.myInfo}>
      <Image source={my_pics} style={styles.user_image} />
      <View style={styles.list_content}>
        <View style={styles.user_name_container}>
          <Text style={styles.userName}>My Name</Text>
        </View>
        <View style={styles.message_container}>
          <Text style={styles.userStatus}> My Status</Text>
        </View>
      </View>

      <View style={styles.callIcon}>
        <IconButton icon="pencil" iconColor="#0fba1a" size={30} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  myInfo: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    flexDirection: "row",
    backgroundColor: "#eee",
    height: 100,
    marginBottom: 7,
    borderBottomWidth: 2,
    borderBottomColor: "#ccc",
  },

  //   container: {
  //     flex: 1,
  //   },

  user_image: {
    width: 80,
    height: 80,
    borderRadius: 40,
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

  callIcon: {
    justifyContent: "center",
    alignItems: "center",
  },

  userName: {
    fontSize: 20,
    fontWeight: "semibold",
    letterSpacing: 1.2,
    paddingLeft: 17,
  },
  userStatus: {
    letterSpacing: 0.9,
    paddingTop: 5,
    fontSize: 15,
    color: "#363434",
    fontWeight: "semibold",
    paddingLeft: 17,
  },
});
