import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MessagesScreen from "../screens/MessagesScreen";
import ChatScreen from "../screens/ChatScreen";
import { useNavigation } from "@react-navigation/native";

import { View, Text, Image, TouchableOpacity } from "react-native";
import { IconButton } from "react-native-paper";
import defaultUserImage from "../assets/user_default_1.png";
import { Ionicons } from "@expo/vector-icons";
import SettingsScreen from "../screens/SettingsScreen";
import EmailInputScreen from "../screens/EmailInputScreen";
import EmailOTPScreen from "../screens/EmailOTPScreen";
import UserInfoScreen from "../screens/UserInfoScreen";
import NewConversation from "../screens/NewConversation";
import WelcomeScreen from "../screens/WelcomeScreen";

const Stack = createNativeStackNavigator();

export default function StackGroupHome() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        route="Home"
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EmailInputScreen"
        component={EmailInputScreen}
        options={{
          headerTitle: () => null,

          // headerStyle: {
          //   backgroundColor: "#0fba1a",
          // },
          // headerTintColor: "#fff",

          headerLeft: () => {
            const navigation = useNavigation();
            return (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingTop: 10,
                  paddingBottom: 10,
                }}
              >
                <TouchableOpacity
                  onPress={() => navigation.goBack()}
                  style={{ marginRight: 10 }}
                >
                  <Ionicons name="arrow-back" size={24} color="#0fba1a" />
                </TouchableOpacity>

                <Text
                  style={{
                    color: "#0fba1a",
                    marginLeft: 10,
                    fontSize: 22,
                    letterSpacing: 0.8,
                  }}
                >
                  Email Input
                </Text>
              </View>
            );
          },
        }}
      />
      <Stack.Screen
        name="EmailOTPScreen"
        component={EmailOTPScreen}
        options={{
          headerTitle: () => null,

          // headerStyle: {
          //   backgroundColor: "#0fba1a",
          // },
          // headerTintColor: "#fff",

          headerLeft: () => {
            const navigation = useNavigation();
            return (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingTop: 10,
                  paddingBottom: 10,
                }}
              >
                <TouchableOpacity
                  onPress={() => navigation.goBack()}
                  style={{ marginRight: 10 }}
                >
                  <Ionicons name="arrow-back" size={24} color="#0fba1a" />
                </TouchableOpacity>

                <Text
                  style={{
                    color: "#0fba1a",
                    marginLeft: 10,
                    fontSize: 22,
                    letterSpacing: 0.8,
                  }}
                >
                  Email Verification
                </Text>
              </View>
            );
          },
        }}
      />

      <Stack.Screen
        name="UserInfoScreen"
        component={UserInfoScreen}
        options={{
          headerTitle: () => null,

          // headerStyle: {
          //   backgroundColor: "#0fba1a",
          // },
          // headerTintColor: "#fff",

          headerLeft: () => {
            const navigation = useNavigation();
            return (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingTop: 10,
                  paddingBottom: 10,
                }}
              >
                <TouchableOpacity
                  onPress={() => navigation.goBack()}
                  style={{ marginRight: 10 }}
                >
                  <Ionicons name="arrow-back" size={24} color="#0fba1a" />
                </TouchableOpacity>

                <Text
                  style={{
                    color: "#0fba1a",
                    marginLeft: 10,
                    fontSize: 22,
                    letterSpacing: 0.8,
                  }}
                >
                  User Info
                </Text>
              </View>
            );
          },
        }}
      />

      <Stack.Screen
        name="MessagesScreen"
        component={MessagesScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        route="ChatScreen"
        name="ChatScreen"
        component={ChatScreen}
        options={{
          headerTitle: () => null,

          headerStyle: {
            backgroundColor: "#0fba1a",
          },
          headerTintColor: "#fff",

          headerLeft: () => {
            const navigation = useNavigation();
            return (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingTop: 10,
                  paddingBottom: 10,
                }}
              >
                <TouchableOpacity
                  onPress={() => navigation.goBack()}
                  style={{ marginRight: 10 }}
                >
                  <Ionicons name="arrow-back" size={24} color="#fff" />
                </TouchableOpacity>
                <Image
                  source={defaultUserImage}
                  style={{ width: 50, height: 50, borderRadius: 30 }}
                />
                <Text
                  style={{
                    color: "#fff",
                    marginLeft: 10,
                    fontSize: 22,
                    letterSpacing: 0.8,
                  }}
                >
                  UserName
                </Text>
              </View>
            );
          },
          headerRight: () => {
            return (
              <IconButton
                icon="dots-vertical"
                iconColor="#fff"
                style={{ marginRight: -10 }}
                size={25}
                onPress={() => {
                  console.log("More Options");
                }}
              />
            );
          },
        }}
      />

      <Stack.Screen
        name="NewConversation"
        component={NewConversation}
        options={{
          headerTitle: () => null,

          headerStyle: {
            backgroundColor: "#fff",
          },

          headerLeft: () => {
            const navigation = useNavigation();
            return (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingTop: 10,
                  paddingBottom: 10,
                }}
              >
                <TouchableOpacity
                  onPress={() => navigation.goBack()}
                  style={{ marginRight: 10 }}
                >
                  <Ionicons name="arrow-back" size={24} color="#0fba1a" />
                </TouchableOpacity>

                <Text
                  style={{
                    color: "#0fba1a",
                    marginLeft: 10,
                    fontSize: 20,
                    letterSpacing: 0.7,
                  }}
                >
                  Select Contact
                </Text>
              </View>
            );
          },
          headerRight: () => {
            return (
              <View style={{ display: "flex", flexDirection: "row" }}>
                <IconButton
                  icon="magnify"
                  iconColor="#0fba1a"
                  size={25}
                  onPress={() => {
                    console.log("Search Contacts");
                  }}
                />

                <IconButton
                  icon="dots-vertical"
                  iconColor="#0fba1a"
                  style={{ marginRight: -10 }}
                  size={25}
                  onPress={() => {
                    console.log("More Options Contacts");
                  }}
                />
              </View>
            );
          },
        }}
      />
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
    </Stack.Navigator>
  );
}
