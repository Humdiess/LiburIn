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
      <Tabs.Screen 
        name="category" 
        options={{
            title: 'Category',
            headerShadowVisible: false,
            headerShown: true,
            tabBarStyle: {
              display: 'none'
            }
        }}
        
      />
    </Tabs>
  )
}

export default TabsLayout