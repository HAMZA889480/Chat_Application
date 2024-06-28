import { View, Text, StyleSheet } from "react-native";

export default function Home() {
  return (
    <View style={styles.HomeContainer}>
      <Text>These are your Profile settings</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  HomeContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
