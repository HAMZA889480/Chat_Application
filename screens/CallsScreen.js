import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import { IconButton } from "react-native-paper";
import SearchBar from "../components/SearchBar";
import { useIsFocused } from "@react-navigation/native";
import callsData from "../data/callsData";
import CallList from "../components/CallList";
import { useScreenDimensions } from "../CustomeHooks/useDimensions";
import StartBtn from "../components/NewButton";
import DropDownMenu from "../components/DropDownMenu";
import { useCallDropDown } from "../CustomeHooks/useCallDropDown";
export default function Home() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const closeDropDown = () => {
    setIsDropdownVisible(false);
  };

  const { screenHeight, screenWidth } = useScreenDimensions();

  const callDropDownData = useCallDropDown();

  //get screen focus status from react navigation hook
  const isFocused = useIsFocused();

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
    <View style={{ flex: 1 }}>
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
              {callDropDownData.map((dropDownData) => {
                return (
                  <DropDownMenu
                    key={dropDownData.id}
                    dropDownData={dropDownData}
                  />
                );
              })}
            </View>
          )}

          <SearchBar secondTag="Missed" />
          <View
            style={{
              position: "absolute",
              marginTop: screenWidth * 1.5,
              right: 30,
              zIndex: 1,
            }}
          >
            <StartBtn name="phone-plus" onPressHandler="new-call" />
          </View>

          <ScrollView style={{ flexGrow: 1 }}>
            <View style={styles.HomeContainer}>
              {callsData.map((callData) => {
                return <CallList key={callData.id} callRecords={callData} />;
              })}
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
