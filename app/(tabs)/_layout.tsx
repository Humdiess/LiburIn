import { Tabs } from 'expo-router'
import React from 'react'

const TabsLayout = () => {
  return (
    <Tabs>
        <Tabs.Screen 
            name="index" 
            options={{ 
                title: 'LiburIn',
            }}
        />
        <Tabs.Screen name="places/[slug]" options={{ headerShown: false }} />
    </Tabs>
  )
}

export default TabsLayout