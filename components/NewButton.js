import React from "react";
import { IconButton } from "react-native-paper";

export default function NewButton({ name, onPressHandler }) {
  return (
    <IconButton
      icon={name}
      size={35}
      color="white"
      containerColor="#0fba1a"
      iconColor="#fff"
      onPress={() => {
        if (onPressHandler === "new-message") {
          console.log("new message");
        } else if (onPressHandler === "new-call") {
          console.log("new call");
        }
      }}
    />
  );
}
