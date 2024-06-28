import React, { useState, useEffect, useCallback, useContext } from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { Searchbar } from "react-native-paper";
// import data from "../data/messageData";

import chatListData from "../data/messageData";
import { useChatList } from "../CustomeHooks/useContext";

export default function SearchBar({ secondTag }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("All");

  const { chatList, setChatList } = useChatList();

  const filterData = useCallback(() => {
    //chek if chatData exists before searching.

    if (chatListData.length > 0) {
      const searchedData = chatListData.filter((item) =>
        item.sender
          .toLocaleLowerCase()
          .includes(searchQuery.toLocaleLowerCase())
      );
      setChatList(searchedData);
    } else {
      //if chatData is empty set userData to empty array
      setChatList("");
    }
  }, [searchQuery]);

  useEffect(() => {
    if (searchQuery !== "") {
      filterData();
    } else {
      setChatList(chatListData);
    }
  }, [searchQuery]);

  return (
    <View style={styles.home_top}>
      <View style={styles.search_bar}>
        <Searchbar
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
          onBlur={() => {
            //set the query string to be empty when navigate to other screen
            //thus complete chat list will be shown
            setSearchQuery("");
          }}
        />
      </View>
      <View style={styles.message_tags}>
        <Pressable
          style={[
            styles.message_tag_pressable,
            activeTab === "All" && styles.active_tab_color,
          ]}
          onPress={() => setActiveTab("All")}
        >
          <Text
            style={[
              styles.tag_name,
              activeTab === "All" && styles.active_tab_font_style,
            ]}
          >
            All
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.message_tag_pressable,
            activeTab === "Unread" && styles.active_tab_color,
          ]}
          onPress={() => setActiveTab("Unread")}
        >
          <Text
            style={[
              styles.tag_name,
              activeTab === "Unread" && styles.active_tab_font_style,
            ]}
          >
            {secondTag}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  home_top: {
    backgroundColor: "#fff",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  search_bar: {
    width: "100%",
    borderRadius: 10,
  },
  message_tags: {
    flexDirection: "row",
    marginTop: 15,
    width: "100%",
    height: 50,
  },
  active_tab_color: {
    backgroundColor: "#38f548",
  },
  active_tab_font_style: {
    fontSize: 17,
    color: "#fff",
    letterSpacing: 0.9,
  },
  message_tag_pressable: {
    width: "20%",
    backgroundColor: "#eee",

    borderColor: "#ddd",
    borderRadius: 20,
    borderWidth: 2,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  tag_name: {
    fontSize: 17,
    color: "#0af519",
    letterSpacing: 0.9,
  },
});
