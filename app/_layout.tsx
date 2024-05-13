import { Stack } from "expo-router";
import { Text, View } from "react-native";
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
        },
      }}
    >
      <Stack.Screen 
        name="index" 
        options={{
            header: () => (
              <View style={{
                  height: 100,
                  backgroundColor: '#121212',
                  paddingTop: 25,
                  paddingHorizontal: 20,
                  borderBottomColor: 'white',
                  borderBottomWidth: 1,
                }}
              >
                <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center'}}>
                  <View>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#ABABAB' }}>BacaIn</Text>
                  </View>
                  <View>
                    <Feather name="bell" size={20} color="#ABABAB" />
                  </View>
                </View>
              </View>
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

