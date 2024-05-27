import { Tabs } from 'expo-router'
import React from 'react'

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen 
        name="index" 
        options={{
            title: 'Home',
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