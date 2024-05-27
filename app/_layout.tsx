import { Stack, Tabs } from "expo-router";
import { SafeAreaView } from 'react-native';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="[slug]" options={{ headerShown: true }} />
      <Stack.Screen name="[categories]" options={{ headerShown: true }} />
    </Stack>
  );
}
