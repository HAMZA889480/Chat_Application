import React from "react";
import { View, Text } from "react-native";

export default function NewMessageScreen({ route }) {
  console.log(route);
  const { contactDetails } = route.params;
  //console.log("New Message Screen", contactDetails);

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <Text>New Message Screen</Text>
    </View>
  );
}
