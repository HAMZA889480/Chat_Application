import React from "react";
import { useNavigation } from "@react-navigation/native";
export const useCallDropDown = () => {
  const navigation = useNavigation();

  const callDropDownData = [
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

  return callDropDownData;
};
