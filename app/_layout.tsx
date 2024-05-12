import { Stack } from "expo-router";
import { View } from "react-native";
import { Feather } from '@expo/vector-icons';

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
            headerRight: () => (
              <Feather name="bell" size={20} color="white" />
            )
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
