import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import {
  CommonActions,
  getFocusedRouteNameFromRoute,
  useIsFocused,
  useNavigationState,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomNavigation } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import StackGroupHome from "./StackNavigation";
import CallsScreen from "../screens/CallsScreen";
import Profile from "../screens/Profile";
import { AppProvider } from "../CustomeHooks/useContext";

const Tab = createBottomTabNavigator();

export default function TabGroup({ route }) {
  const [isTabBarVisible, setIsTabBarVisible] = useState(true);

  const isFocused = useIsFocused();

  const state = useNavigationState((state) => state);
  let routeName;
  if (!state) {
    routeName = "Welcome";
  } else {
    // console.log("State", state);
    routeName =
      getFocusedRouteNameFromRoute(state?.routes[state?.index]) ?? "Home";
  }

  useEffect(() => {
    const shouldShowTabBar = ["MessagesScreen", "Home"].includes(routeName);
    setIsTabBarVisible(shouldShowTabBar);

    return () => {
      setIsTabBarVisible(shouldShowTabBar);
    };
  }, [routeName, isFocused]);

  return (
    <AppProvider>
      <View style={styles.container}>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
          }}
          tabBar={({ navigation, state, descriptors, insets }) =>
            isTabBarVisible && (
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
            )
          }
        >
          <Tab.Screen
            name="Home"
            component={StackGroupHome}
            options={{
              tabBarLabel: "Chats",
              tabBarIcon: ({ color, size }) => (
                <Icon name="android-messages" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Community"
            component={Profile}
            options={{
              tabBarLabel: "Community",
              tabBarIcon: ({ color, size }) => (
                <Icon name="account-group-outline" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Calls"
            component={CallsScreen}
            options={{
              tabBarLabel: "Calls",
              tabBarIcon: ({ color, size }) => (
                <Icon name="phone" size={size} color={color} />
              ),
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
