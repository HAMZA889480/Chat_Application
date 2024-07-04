import { NavigationContainer } from "@react-navigation/native";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import TabGroup from "./Navigation/BottomNavigation";

export default function Navigation() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer
      // onStateChange={(state) => {
      //   const currentRouteName = state.routes[state.index].name;
      //   // console.log("Current Route Name", currentRouteName);
      // }}
      >
        <TabGroup />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
