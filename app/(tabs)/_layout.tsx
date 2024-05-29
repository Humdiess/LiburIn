import { Tabs } from 'expo-router'
import React from 'react'
import { Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen 
        name="index" 
        options={{
            title: 'LiburIn',
            headerShadowVisible: true,
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 24,
              fontWeight: '700'
            },
            tabBarLabel: () => null,
            tabBarIcon: ({ focused, color }) => (
              <Icon name="home" size={24} color={focused ? 'black' : color} />
            )
        }}
      />
      <Tabs.Screen 
        name="search" 
        options={{
            title: 'Search',
            headerShadowVisible: false,
            headerShown: false,
            tabBarLabel: () => null,
            tabBarIcon: ({ focused, color }) => (
              <Icon name="search" size={24} color={focused ? 'black' : color} />
            ),
            tabBarHideOnKeyboard: true
        }}
      />
    </Tabs>
  )
}

export default TabsLayout