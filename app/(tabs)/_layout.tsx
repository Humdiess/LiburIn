import { Tabs } from 'expo-router'
import React from 'react'

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen 
        name="index" 
        options={{
            title: 'LiburIn',
            headerTitleAlign: 'center',
            headerShadowVisible: true,
            headerTitleStyle: {
              fontSize: 24,
              fontWeight: 'semibold'
            }
        }}
      />
      <Tabs.Screen 
        name="search" 
        options={{
            title: 'Search',
            headerShadowVisible: false,
            headerShown: false
        }}
      />
    </Tabs>
  )
}

export default TabsLayout