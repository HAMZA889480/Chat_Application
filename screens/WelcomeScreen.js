import React, { useState, useEffect } from "react";

import { View, Text, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useScreenDimensions } from "../CustomeHooks/useDimensions";
import welcomePic from "../assets/Whatsapp Background Check All.png";
import { IconButton, TouchableRipple } from "react-native-paper";

export default function WelcomeScreen() {
  const navigation = useNavigation();
  const { screenHeight } = useScreenDimensions();

  const imageSize = screenHeight * 0.4;

  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-around",
        paddingHorizontal: "10%",
      }}
    >
      <View
        style={{
          width: "100%",

          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 35, fontWeight: "bold", color: "#0fba1a" }}>
          Welcome
        </Text>
      </View>

      <View
        style={{
          width: "100%",
          height: screenHeight * 0.4,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={welcomePic}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: imageSize / 2,
            opacity: 0.6,
          }}
        />
      </View>

      <TouchableRipple
        rippleColor="#adf7b2"
        onPress={() => {
          navigation.navigate("EmailInputScreen");
        }}
        style={{ height: "6%" }}
      >
        <View
          style={{
            backgroundColor: "#169e1f",
            height: "100%",
            flexDirection: "row",
            justifyContent: "center",

            alignItems: "center",
            borderRadius: 25,
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 22,
              letterSpacing: 1,
              marginRight: "5%",
            }}
          >
            Continue
          </Text>

          <IconButton
            style={{ position: "absolute", right: 0, marginRight: -1 }}
            icon="arrow-right"
            size={32}
            containerColor="#0ec219"
            iconColor="#fff"
          />
        </View>
      </TouchableRipple>
    </View>
  );
}

const styles = StyleSheet.create({});
