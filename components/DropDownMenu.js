import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { TouchableRipple } from "react-native-paper";
export default function DropDownMenu({ dropDownData }) {
  return (
    <>
      <TouchableRipple
        rippleColor="#adf7b2"
        style={{
          width: "100%",
          alignItems: "center",
          height: "22%",
          justifyContent: "center",
          marginBottom: "3%",
        }}
        onPress={() => {
          dropDownData.profile.onPress();
        }}
      >
        <Text style={styles.options_text}>{dropDownData.profile.text}</Text>
      </TouchableRipple>
      <TouchableRipple
        rippleColor="#adf7b2"
        style={{
          width: "100%",
          alignItems: "center",
          height: "22%",
          marginBottom: "3%",
          justifyContent: "center",
        }}
        onPress={() => {
          dropDownData.New.onPress();
        }}
      >
        <Text style={styles.options_text}>{dropDownData.New.text}</Text>
      </TouchableRipple>
      <TouchableRipple
        rippleColor="#adf7b2"
        style={{
          width: "100%",
          alignItems: "center",
          height: "22%",
          marginBottom: "3%",
          justifyContent: "center",
        }}
        onPress={() => {
          dropDownData.Stared.onPress();
        }}
      >
        <Text style={styles.options_text}>{dropDownData.Stared.text}</Text>
      </TouchableRipple>
      <TouchableRipple
        rippleColor="#adf7b2"
        style={{
          width: "100%",
          alignItems: "center",
          marginBottom: "3%",
          height: "22%",
          justifyContent: "center",
        }}
        onPress={() => {
          dropDownData.Settings.onPress();
        }}
      >
        <Text style={styles.options_text}>{dropDownData.Settings.text}</Text>
      </TouchableRipple>
    </>
  );
}

const styles = StyleSheet.create({
  options: {
    position: "absolute",
    top: 55,
    right: 0,
    marginRight: 20,
    backgroundColor: "#ddd",

    alignItems: "center",
    justifyContent: "space-between",

    zIndex: 1,
    padding: 20,
    borderRadius: 10,
    flexDirection: "column",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 3.84,
    elevation: 5,
  },
  options_text: {
    fontSize: 20,
  },
});
