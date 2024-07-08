import React from "react";
import { TouchableRipple } from "react-native-paper";
import { Text, View, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import defaultUserImage from "../assets/user_default_1.png";
export default function ChatList({ data }) {
  const { navigate } = useNavigation();
  return (
    <TouchableRipple
      key={data.id}
      onPress={() => navigate("ChatScreen")}
      onLongPress={() => console.log("Long Pressed")}
      rippleColor="#adf7b2"
      style={styles.list_container}
    >
      <>
        <Image
          source={data.senderImage ? data.senderImage : defaultUserImage}
          style={styles.user_image}
        />
        <View style={styles.list_content}>
          <View style={styles.user_name_container}>
            <Text style={styles.user_name}>{data.contPersonName}</Text>

            {data.time ? (
              <Text style={styles.time}>{data.time}</Text>
            ) : (
              <Text style={styles.time}>New</Text>
            )}
          </View>
          <View style={styles.data_container}>
            {data.message ? (
              <Text style={styles.data_body}>{data.message}</Text>
            ) : (
              <Text style={styles.time}>{data.phoneNumbers}</Text>
            )}
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
    backgroundColor: "#fff",
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
