import React, { useEffect, useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";

import SearchBar from "../components/SearchBar";
import { Icon, IconButton } from "react-native-paper";
import ChatList from "../components/ChatList";
import { useScreenDimensions } from "../CustomeHooks/useDimensions";
import { useMessageDropDown } from "../CustomeHooks/useMessageDropDown";
import DropDownMenu from "../components/DropDownMenu";
import { useIsFocused } from "@react-navigation/native";
import { useChatList } from "../CustomeHooks/useContext";
import StartBtn from "../components/NewButton";

export default function Messages() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const closeDropDown = () => {
    setIsDropdownVisible(false);
  };

  const { screenHeight, screenWidth } = useScreenDimensions();
  const messageDropDownData = useMessageDropDown();
  const isFocused = useIsFocused();
  const { chatList, setChatList } = useChatList();

  useEffect(() => {
    if (!isFocused) {
      if (isDropdownVisible) {
        setIsDropdownVisible(false);
      }
    }
    return () => {
      if (isDropdownVisible) {
        setIsDropdownVisible(false);
      }
    };
  }, [isFocused]);

  return (
    <View style={{ flex: 1 }}>
      <TouchableWithoutFeedback
        onPress={() => {
          if (isDropdownVisible) {
            closeDropDown();
          }
        }}
      >
        <View style={styles.main_message_container}>
          <View style={styles.main_home}>
            <Text style={styles.appName}>WhatsApp</Text>
            <View style={styles.main_options}>
              <IconButton
                icon="camera"
                size={27}
                iconColor="#169e1f"
                onPress={() => console.log("Pressed")}
              />
              <IconButton
                icon="dots-vertical"
                iconColor="#169e1f"
                size={27}
                onPress={toggleDropdown}
              />
            </View>
          </View>
          {isDropdownVisible && (
            <View
              style={[
                styles.options,
                { width: screenWidth * 0.5, height: screenHeight * 0.3 },
              ]}
            >
              {messageDropDownData.map((dropDownData) => (
                <DropDownMenu
                  key={dropDownData.id}
                  dropDownData={dropDownData}
                />
              ))}
            </View>
          )}
          <SearchBar secondTag="Unread" />
          <View
            style={{
              position: "absolute",
              marginTop: screenWidth * 1.5,
              right: 30,
              zIndex: 1,
            }}
          >
            <StartBtn name="plus" onPressHandler="new-message" />
          </View>
          <ScrollView style={{ flexGrow: 1 }}>
            {/* ChatList Component displays the list of chats */}
            <View style={styles.HomeContainer}>
              {chatList.length === 0 ? (
                <View>
                  <Text>No Chat Record.</Text>
                </View>
              ) : (
                chatList.map((message) => (
                  <ChatList key={message.id} message={message} />
                ))
              )}
            </View>
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  main_message_container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  main_options: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "24%",
  },
  HomeContainer: {
    backgroundColor: "#fff",
    paddingTop: 10,
  },
  main_home: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  appName: {
    color: "#169e1f",
    fontWeight: "bold",
    fontSize: 25,
    letterSpacing: 0.5,
  },
  options: {
    position: "absolute",
    top: "5%",
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
