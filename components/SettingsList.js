import { View, Text, StyleSheet } from "react-native";
import { Icon, TouchableRipple } from "react-native-paper";
export default function SettingsMenu({ setting }) {
  return (
    <TouchableRipple
      rippleColor="#adf7b2"
      style={[styles.myInfo, styles.settingsOptions]}
      onPress={() => console.log("Pressed")}
    >
      <>
        <Icon
          source={setting.icon}
          style={styles.user_image}
          size={30}
          color="#45f751"
        />
        <View style={styles.list_content}>
          <View style={styles.user_name_container}>
            <Text style={styles.userName}>{setting.title}</Text>
          </View>
          <View style={styles.message_container}>
            <Text style={styles.userStatus}>{setting.description}</Text>
          </View>
        </View>
      </>
    </TouchableRipple>
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
    height: 80,
  },
});
