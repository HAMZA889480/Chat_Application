import React from "react";
import { View, StyleSheet } from "react-native";
import { CommonActions } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomNavigation, Text } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import StackGroupHome from "./StackNavigation";
import CallsScreen from "../screens/CallsScreen";
import Profile from "../screens/Profile";
import { AppProvider } from "../CustomeHooks/useContext";

const Tab = createBottomTabNavigator();

export default function TabGroup() {
  return (
    <AppProvider>
      <View style={styles.container}>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
          }}
          tabBar={({ navigation, state, descriptors, insets }) => (
            <BottomNavigation.Bar
              navigationState={state}
              safeAreaInsets={insets}
              onTabPress={({ route, preventDefault }) => {
                const event = navigation.emit({
                  type: "tabPress",
                  target: route.key,
                  canPreventDefault: true,
                });

                if (event.defaultPrevented) {
                  preventDefault();
                } else {
                  navigation.dispatch({
                    ...CommonActions.navigate(route.name, route.params),
                    target: state.key,
                  });
                }
              }}
              renderIcon={({ route, focused, color }) => {
                const { options } = descriptors[route.key];
                if (options.tabBarIcon) {
                  return options.tabBarIcon({ focused, color, size: 30 });
                }

                return null;
              }}
              getLabelText={({ route }) => {
                const { options } = descriptors[route.key];
                const label =
                  options.tabBarLabel !== undefined
                    ? options.tabBarLabel
                    : options.title !== undefined
                    ? options.title
                    : route.title;

                return label;
              }}
              activeColor="#0c6911"
              activeIndicatorStyle={{
                backgroundColor: "#58f56d",
                marginBottom: -5,
              }}
            />
          )}
        >
          <Tab.Screen
            name="Home"
            component={StackGroupHome}
            options={{
              tabBarLabel: "Chats",
              tabBarIcon: ({ color, size }) => {
                return (
                  <Icon name="android-messages" size={size} color={color} />
                );
              },
            }}
          />

          <Tab.Screen
            name="Community"
            component={Profile}
            options={{
              tabBarLabel: "Community",
              tabBarIcon: ({ color, size }) => {
                return (
                  <Icon
                    name="account-group-outline"
                    size={size}
                    color={color}
                  />
                );
              },
            }}
          />
          <Tab.Screen
            name="Calls"
            component={CallsScreen}
            options={{
              tabBarLabel: "Calls",
              tabBarIcon: ({ color, size }) => {
                return <Icon name="phone" size={size} color={color} />;
              },
            }}
          />
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
});
