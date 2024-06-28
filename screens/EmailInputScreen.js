import React, { useState } from "react";
import validator from "validator";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { TextInput, TouchableRipple, HelperText } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
export default function EmailInputScreen() {
  //for navigation to next screen
  const navigation = useNavigation();

  //state for email input and email valiadtion
  const [email, setEmail] = useState("");

  const [emailError, setEmailError] = useState(false);

  const validateEmail = (email) => {
    return validator.isEmail(email);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: "8%",
        flexDirection: "column",
      }}
    >
      <View style={{ marginTop: "12%" }}>
        <Text style={{ fontSize: 25, textAlign: "center", color: "#12941a" }}>
          Provide your Email Address
        </Text>
      </View>
      <View style={{ marginTop: "40%" }}>
        <TextInput
          label="Email Address"
          style={{ fontSize: 18 }}
          mode="outlined"
          activeOutlineColor="#999"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
            validateEmail(text) ? setEmailError(false) : setEmailError(true);
          }}
        />
        {emailError && (
          <HelperText type="error">Email address is invalid!</HelperText>
        )}
      </View>

      <TouchableRipple
        rippleColor="#adf7b2"
        onPress={() => {
          if (!validateEmail(email)) {
            setEmailError(true);
          } else {
            setEmailError(false);

            navigation.navigate("EmailOTPScreen", { email });
          }
        }}
        style={{
          //   height: "6%",
          width: "50%",
          alignSelf: "center",
          marginTop: "10%",
        }}
      >
        <View
          style={{
            backgroundColor: "#169e1f",

            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            width: "100%",
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 22,
              letterSpacing: 1,
              paddingVertical: "6%",
            }}
          >
            Send OTP
          </Text>
        </View>
      </TouchableRipple>
    </View>
  );
}
