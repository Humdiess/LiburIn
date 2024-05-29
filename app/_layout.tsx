import { Stack, Tabs } from "expo-router";
import { SafeAreaView } from 'react-native';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="place/[slug]" options={{ headerShown: true, headerTitle: 'Place' }} />
      <Stack.Screen name="category/[categories]" options={{ headerShown: true, headerTitle: 'Category' }} />
    </Stack>
  );
}
