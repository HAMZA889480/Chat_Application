import React, { useEffect } from "react";
import { View, ImageBackground } from "react-native";

import chatBackGround from "../assets/Whatsapp Background Check All.png";

import { useNavigation, useIsFocused } from "@react-navigation/native";
import MessageInput from "../components/MessageInput";

export default function ChatScreen() {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  useEffect(() => {
    navigation.setOptions({
      tabBarStyle: { display: isFocused ? "none" : "flex" }, // Hide tab bar when screen is focused
    });
  }, [isFocused, navigation]);

  return (
    <ImageBackground source={chatBackGround} style={{ flex: 1 }}>
      <View style={{ flex: 1, flexDirection: "column", width: "100%" }}>
        <MessageInput />
      </View>
    </ImageBackground>
  );
}
