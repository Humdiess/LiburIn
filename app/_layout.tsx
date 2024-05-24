import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen 
          name="index" 
          options={{ 
            headerTitle: "LiburIn",
            headerTitleAlign: "center",
            headerShadowVisible: false
          }}
      />
      <Stack.Screen name="places/[slug]" />
    </Stack>
  );
}
