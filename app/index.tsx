import TourList from "@/components/TourList";
import { Text, View } from "react-native";
import React from 'react'

interface Place {
  id: number;
  name: string;
}

const index = async() => {
  const response = await fetch('https://dewalaravel.com/api/places')
  const place = await response.json()

  return (
    <View>
      {place.data.map((data:any) => {
        return <TourList name={data.name} image={data.photo}  />
      })}
      <Text>Halo</Text>
    </View>
  )
}

export default index
