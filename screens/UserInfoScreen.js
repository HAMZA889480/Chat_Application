import React, { useState } from "react";
import { CameraView, useCameraPermissions } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import { View, Text, StyleSheet, Image } from "react-native";
import { TouchableRipple, TextInput, IconButton } from "react-native-paper";
// import  from "../CustomeHooks/useDimensions"

import { useNavigation } from "@react-navigation/native";
export default function UserInfoScreen() {
  const [u_name, setU_name] = useState("");
  const [status, setStatus] = useState("");

  //state for saving image
  const [image, setImage] = useState(null);

  //states for camera permissions
  const [facing, setFacing] = useState("back");

  const [hasbuttonClicked, setHasButtonClicked] = useState(false);

  const [permission, requestPermission] = useCameraPermissions();

  const navigation = useNavigation();

  //function to handle camera request

  const handleCameraRequest = async () => {
    if (permission) {
      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        // allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      // console.log("Result", result);
      // console.log("Image URI", result.assets[0].uri);
      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    } else if (permission === false) {
      alert("Camera permission is denied");
    } else {
      requestPermission();
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: "8%",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <View style={{ marginTop: "5%" }}>
        <Text style={{ fontSize: 25, textAlign: "center", color: "#12941a" }}>
          Tell us about yourself
        </Text>
      </View>

      {image ? (
        <View
          style={{
            marginTop: "10%",
            width: 150,
            height: 150,
            borderRadius: 75,

            justifyContent: "center",
          }}
        >
          <Image
            source={{ uri: image }}
            style={{ width: "100%", height: "100%", borderRadius: 75 }}
          />
        </View>
      ) : (
        <View
          style={{
            marginTop: "10%",
            width: 150,
            height: 150,
            borderRadius: 75,
            backgroundColor: "#ebe4e4",
            borderStyle: "dashed",
            borderWidth: 2,
            borderColor: "#169e1f",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "#169e1f", fontSize: 25 }}>Pic</Text>
          <IconButton
            style={{ position: "absolute", bottom: 0, right: -5 }}
            icon="camera"
            iconColor="#fff"
            size={25}
            mode="contained"
            containerColor="#169e1f"
            onPress={() => handleCameraRequest()}
            rippleColor="#fff"
          />
        </View>
      )}

      <View style={{ marginTop: "20%", width: "100%" }}>
        <TextInput
          label="Email Address"
          style={{ fontSize: 18 }}
          mode="outlined"
          activeOutlineColor="#999"
          value={u_name}
          onChangeText={(text) => {
            setU_name(text);
          }}
        />
      </View>
      <View style={{ marginTop: "5%", width: "100%" }}>
        <TextInput
          label="Status"
          style={{ fontSize: 18 }}
          mode="outlined"
          activeOutlineColor="#999"
          value={status}
          onChangeText={(text) => {
            setStatus(text);
          }}
        />
      </View>

      <TouchableRipple
        rippleColor="#adf7b2"
        style={{
          //   height: "6%",
          width: "50%",
          alignSelf: "center",
          marginTop: "10%",
        }}
        onPress={() => {
          navigation.navigate("Messages");
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
            Save Info
          </Text>
        </View>
      </TouchableRipple>
    </View>
  );
}
