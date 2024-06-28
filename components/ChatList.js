import React from "react";
import { TouchableRipple } from "react-native-paper";
import { Text, View, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
export default function ChatList({ message }) {
  const { navigate } = useNavigation();
  return (
    <TouchableRipple
      key={message.id}
      onPress={() => navigate("ChatScreen", { message })}
      onLongPress={() => console.log("Long Pressed")}
      rippleColor="#adf7b2"
      style={styles.list_container}
    >
      <>
        <Image
          source={message.senderImage ? message.senderImage : defaultUserImage}
          style={styles.user_image}
        />
        <View style={styles.list_content}>
          <View style={styles.user_name_container}>
            <Text style={styles.user_name}>{message.sender}</Text>
            <Text style={styles.time}>{message.time}</Text>
          </View>
          <View style={styles.message_container}>
            <Text style={styles.message_body}>{message.message}</Text>
          </View>
        </View>
      </>
    </TouchableRipple>
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
    justifyContent: "space-between",
  },
  message_container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  user_name: {
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
  time: {
    fontSize: 15,
    color: "#8a8888",
    fontWeight: "semibold",
  },
  message_body: {
    letterSpacing: 0.3,
  },
});
