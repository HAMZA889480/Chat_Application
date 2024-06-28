import { NavigationContainer } from "@react-navigation/native";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import TabGroup from "./Navigation/BottomNavigation";

export default function Navigation() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <TabGroup />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
