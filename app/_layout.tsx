import { Stack } from "expo-router";
import { View } from "react-native";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#121212",
        },
        headerBlurEffect: "dark",
        headerTintColor: "white",
      }}
    >
      <Stack.Screen name="Home" />
    </Stack>
  );
}
