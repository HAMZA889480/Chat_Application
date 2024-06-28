import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, Feather, Ionicons } from "@expo/vector-icons";
import { View, StyleSheet, Text } from "react-native";
import CallsScreen from "../screens/CallsScreen";
import Profile from "../screens/Profile";

import StackGroupHome from "./StackNavigation";
import { AppProvider } from "../CustomeHooks/useContext";
// Bottom Tab Navigator
const Tab = createBottomTabNavigator();

export default function TabGroup() {
  return (
    <AppProvider>
      <View style={styles.container}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === "Home") {
                iconName = focused ? "message-text" : "message-text-outline";
                return (
                  <>
                    <MaterialCommunityIcons
                      name={iconName}
                      size={30}
                      color={color}
                    />
                  </>
                );
              } else if (route.name === "Calls") {
                iconName = focused ? "phone" : "phone";
                return <Feather name={iconName} size={30} color={color} />;
              } else if (route.name === "Profile") {
                iconName = focused ? "settings-sharp" : "settings-outline";
                return <Ionicons name={iconName} size={30} color={color} />;
              }
            },
            tabBarActiveTintColor: "#0af519",
            tabBarInactiveTintColor: "gray",
            tabBarLabelStyle: {
              fontSize: 13,
              letterSpacing: 1,
              fontWeight: "bold",
            },
          })}
        >
          <Tab.Screen
            name="Home"
            component={StackGroupHome}
            options={{ tabBarLabel: "Chats" }}
          />

          <Tab.Screen name="Calls" component={CallsScreen} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
      </View>
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
  },
  messageView: {
    paddingBottom: 30,
  },
});
