import { useLocalSearchParams } from "expo-router"
import { useState, useEffect } from "react"
import { ActivityIndicator } from "react-native";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native"

const PlaceDetail = () => {
  const { slug } = useLocalSearchParams()
  const [place, setPlace] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  const getPlace = async () => {
    const response = await fetch(`https://dewalaravel.com/api/places/${slug}`)
    const placeData = await response.json()
    setPlace(placeData.data)
  };

  useEffect(() => {
    getPlace()
  }, [slug])

  // if (loading) {
  //   return <ActivityIndicator size="large" color="#0000ff" style={styles.loading} />;
  // }

  if (!place) {
    return <Text style={{ textAlign: "center" }}>Loading...</Text>
  }

  return (
    <ScrollView style={{height: '100%'}}>
      <Image source={{ uri: place.photo }} style={styles.image} />
      <View style={styles.container}>
        <Text style={styles.name}>{place.name}</Text>
        <Text style={styles.description}>{place.description}</Text>
      </View>
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
    height: 250,
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
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
},
});

export default PlaceDetail
