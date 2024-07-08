import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import ChatList from "../components/ChatList";
import { TouchableRipple, Icon, IconButton } from "react-native-paper";

export default function NewMessageScreen({ route }) {
  //console.log(route);
  const { contactDetails } = route.params;
  //console.log("New Conversation Screen", contactDetails);

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView>
        <TouchableRipple
          key="New Contact"
          onPress={() => navigate("ChatScreen")}
          onLongPress={() => console.log("Long Pressed")}
          rippleColor="#adf7b2"
          style={styles.list_container}
        >
          <>
            <View style={styles.user_image}>
              <IconButton
                icon="account-plus"
                size={33}
                iconColor="#fff"
                containerColor="#0fba1a"
              />
            </View>
            <View style={styles.list_content}>
              <View style={styles.user_name_container}>
                <Text style={styles.user_name}>New Contact</Text>

                {/* <Text style={styles.time}>{data.time}</Text> */}
              </View>
              <View style={styles.data_container}>
                <Text style={styles.data_body}>Add New Contact</Text>
              </View>
            </View>
          </>
        </TouchableRipple>
        {contactDetails
          ? contactDetails.map((contact, index) => {
              //console.log(contact);
              return <ChatList key={index} data={contact} />;
            })
          : alert("Error Fetching Contacts. Please try again later.")}
      </ScrollView>
    </View>
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
