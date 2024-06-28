import React from "react";
import { useNavigation } from "@react-navigation/native";

export const useMessageDropDown = () => {
  const navigation = useNavigation();

  const messageDropDownData = [
    {
      id: "CallDropDown",
      profile: {
        text: "Profile",
        onPress: () => console.log("Profile"),
      },
      New: {
        text: "New Calls",
        onPress: () => console.log("New Calls"),
      },
      Stared: {
        text: "Stared Calls",
        onPress: () => console.log("Stared Calls"),
      },
      Settings: {
        text: "Settings",
        onPress: () => {
          navigation.navigate("SettingsScreen");
        },
      },
    },
  ];

  return messageDropDownData;
};
