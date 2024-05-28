import { useLocalSearchParams } from "expo-router"
import { useState, useEffect } from "react"
import { View, Text, Image, StyleSheet, ScrollView } from "react-native"

const PlaceDetail = () => {
  const { slug } = useLocalSearchParams()
  const [place, setPlace] = useState<any>(null)

  const getPlace = async () => {
    const response = await fetch(`https://dewalaravel.com/api/places/${slug}`)
    const placeData = await response.json()
    setPlace(placeData.data)
  };

  useEffect(() => {
    getPlace()
  }, [slug])

  if (!place) {
    return <Text>Loading...</Text>
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: place.photo }} style={styles.image} />
      <Text style={styles.name}>{place.name}</Text>
      {/* <Text style={styles.name}>{place.category.name}</Text> */}
      <Text style={styles.description}>{place.description}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  name: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    marginTop: 10,
    fontSize: 16,
    color: 'gray',
  },
});

export default PlaceDetail
