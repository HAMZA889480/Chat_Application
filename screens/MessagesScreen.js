import React, { useEffect, useState, useContext } from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import messageData from "../data/messageData";
import SearchBar from "../components/SearchBar";
import { IconButton } from "react-native-paper";

import ChatList from "../components/ChatList";
import { useScreenDimensions } from "../CustomeHooks/useDimensions";
import { useMessageDropDown } from "../CustomeHooks/useMessageDropDown";
import DropDownMenu from "../components/DropDownMenu";
import { useIsFocused } from "@react-navigation/native";
import { useChatList } from "../CustomeHooks/useContext";
export default function Messages() {
  //drop down toggle-logic
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const closeDropDown = () => {
    setIsDropdownVisible(false);
  };

  //get screen dimensions from custom hook
  const { screenHeight, screenWidth } = useScreenDimensions();

  //get drop down data from custom hook
  const messageDropDownData = useMessageDropDown();

  //get screen focus status from react navigation hook
  const isFocused = useIsFocused();

  const { chatList, setChatList } = useChatList();
  // console.log("userData", userData);

  useEffect(() => {
    //close dropdown if screen is not focused. To check dropDown  just before
    //screen is focused.

    //just to emphazie the dropdown is closed when screen is not focused.
    if (!isFocused) {
      if (isDropdownVisible) {
        setIsDropdownVisible(false);
      }
    }

    //close dropdown if screen is not focused and dropdown is open
    return () => {
      if (isDropdownVisible) {
        setIsDropdownVisible(false);
      }
    };
  }, [isFocused]);

  return (
    <ScrollView>
      <TouchableWithoutFeedback
        onPress={() => {
          //close dropdown if it is open
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
                onPress={() => {
                  toggleDropdown();
                }}
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
              {/* Displying dropDown option from useMessageDropDown.js */}
              {messageDropDownData.map((dropDownData) => {
                return (
                  <DropDownMenu
                    key={dropDownData.id}
                    dropDownData={dropDownData}
                  />
                );
              })}
            </View>
          )}

          {/* Search Bar Component with secondTag prop */}
          <SearchBar secondTag="Unread" />

          {/* ChatList Component displayes the list of chat*/}
          <View style={styles.HomeContainer}>
            {/* {messageData.length === 0 ? (
              <View>
                <Text>No Chat Record.</Text>
              </View>
            ) : (
              messageData.map((message) => {
                return <ChatList key={message.id} message={message} />;
              })
            )} */}

            {chatList.length === 0 ? (
              <View>
                <Text>No Chat Record.</Text>
              </View>
            ) : (
              chatList.map((message) => {
                return <ChatList key={message.id} message={message} />;
              })
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
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
    // width: "50%",
    alignItems: "center",
    justifyContent: "space-between",
    // height: "20%",
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
