import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { OtpInput } from "react-native-otp-entry";
import { TextInput, TouchableRipple } from "react-native-paper";
import validator from "validator";
import { useNavigation } from "@react-navigation/native";

export default function EmailValideScreen({ route }) {
  //getting email from previous screen
  const { email } = route.params;

  //state for otp input
  const [valideOTP, setValideOTP] = useState(false);
  //state for otp data
  const [otp, setOtp] = useState("");

  //for navigation to next screen
  const navigation = useNavigation();

  const isNumericOTP = (otp) => {
    if (validator.isNumeric(otp)) {
      setValideOTP(true);
      setOtp(otp);
      console.log("OTP", otp);
    } else {
      setValideOTP(false);
    }
  };

  // function that verify the otp when button is clicked
  const otpVerifier = () => {
    //send otp to server for verification.
    //here is the code to verify

    //after verification navigate to next screen
    navigation.navigate("UserInfoScreen");
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
          OTP send to
        </Text>
        <Text style={{ fontSize: 25, textAlign: "center", color: "#12941a" }}>
          {email}
        </Text>
      </View>
      <View style={{ marginTop: "40%" }}>
        <OtpInput
          numberOfDigits={6}
          onTextChange={(text) => {
            text.length === 6 ? isNumericOTP(text) : setValideOTP(false);
          }}
          onFilled={(text) => {
            //validate otp conatins only numbers
            // validator.isNumeric(text);
            isNumericOTP(text);
          }}
        />
      </View>

      {valideOTP && (
        <TouchableRipple
          rippleColor="#adf7b2"
          onPress={() => {
            otpVerifier();
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
              Verify
            </Text>
          </View>
        </TouchableRipple>
      )}
    </View>
  );
}
