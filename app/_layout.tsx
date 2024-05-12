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
        headerTitleStyle: {
          fontWeight: "bold",
        },
        contentStyle: {
          backgroundColor: "#121212",
        }
      }}
    >
      <Stack.Screen 
        name="index" 
        options={{
            title: 'Home',
         }} 
      />
      <Stack.Screen 
        name="profile" 
        options={{
            title: 'Profile',
         }} 
      />
    </Stack>
  );
}
