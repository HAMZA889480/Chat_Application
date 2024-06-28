import React from "react";
import SelfInfoList from "../components/SelfInfoList";
import { View, StyleSheet, Text } from "react-native";
import settingsOptions from "../data/settingsOptions";
import SettingsList from "../components/SettingsList";
export default function SettingsScreen() {
  return (
    <View>
      <SelfInfoList />
      {settingsOptions.map((setting) => {
        return <SettingsList key={setting.name} setting={setting} />;
      })}
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
    height: "25%",
    marginBottom: 7,
    borderBottomWidth: 2,
    borderBottomColor: "#ccc",
    paddingLeft: 25,
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

  settingsOptions: {
    paddingTop: 0,
    paddingBottom: 0,
    borderBottomWidth: 0,
  },
});
