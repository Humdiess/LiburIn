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
        }
      }}
    >
      <Stack.Screen 
        name="index" 
        options={{
            header: () => (
              <View style={{
                  flexDirection: 'row',
                  justifyContent: 'center', 
                  alignItems: 'center', 
                  height: 80 ,
                  backgroundColor: '#141414',
                  shadowColor: "#000",
                  padding: 10,
                  marginBottom: 10
                }}
              >
                <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', paddingTop: 10 }}>
                  <View>
                    <Text style={{ color: 'white', fontSize: 20 }}>BacaIn</Text>
                  </View>
                  <View>
                    <Feather name="search" size={20} color="white" />
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

