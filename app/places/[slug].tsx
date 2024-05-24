import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { fetchPlaceDetail } from '@/utils/api';

const PlaceDetail = () => {
  const { slug } = useLocalSearchParams();
  const [place, setPlace] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const placeData = await fetchPlaceDetail(slug as string);
        setPlace(placeData);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" style={styles.loading} />;
  }

  if (error) {
    return <Text style={styles.error}>{error}</Text>;
  }

  if (!place) {
    return <Text style={styles.error}>Place not found</Text>;
  }

  // Tambahkan pemeriksaan null untuk place.category
  const categoryName = place.category?.name || 'Unknown Category';

  return (
    <View style={styles.container}>
      <Image source={{ uri: place.photo }} style={styles.image} />
      <Text style={styles.name}>{place.name}</Text>
      <Text style={styles.description}>{place.description}</Text>
      {/* Gunakan categoryName yang telah diperiksa */}
      <Text style={styles.category}>Category: {categoryName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  category: {
    fontSize: 14,
    color: 'gray',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginVertical: 20,
  },
});

export default PlaceDetail;