import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { IconButton, TextInput } from "react-native-paper";

export default function MessageInput() {
  const [message, setMessage] = useState("");
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        mode="flat"
        multiline={true}
        scrollEnabled={true}
        activeUnderlineColor="transparent"
        underlineColor="transparent"
        onChangeText={(text) => setMessage(text)}
        left={
          <TextInput.Icon
            icon="emoticon"
            size={25}
            onTouchStart={() => console.log("emoji")}
          />
        }
        placeholder="Type a message"
        right={
          <TextInput.Icon
            icon="link"
            size={30}
            onTouchStart={() => console.log("link clicked")}
          />
        }
      />
      <IconButton
        style={styles.iconButton}
        icon={message.length > 0 ? "send" : "microphone"}
        size={27}
        iconColor="#fff"
        mode="contained"
        onPress={() => console.log("Send")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    position: "absolute",
    bottom: 0,
    marginBottom: 5,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 3.84,
    elevation: 10,
  },
  textInput: {
    flex: 1, // Take up all available space
    marginRight: 4, // Add some spacing between the input and the button
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderRadius: 50,
    backgroundColor: "#fff",
    fontSize: 15,
    letterSpacing: 0.8,
  },
  iconButton: {
    borderRadius: 50,

    backgroundColor: "#0af519",
  },
});
