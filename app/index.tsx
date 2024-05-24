import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View, StyleSheet, ActivityIndicator, InteractionManager } from 'react-native';
import TourList from '@/components/TourList';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import { fetchPlaces, Place } from '@/utils/api';

const Index = () => {
  const [data, setData] = useState<Place[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const placesData = await fetchPlaces();
        setData(placesData);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" style={styles.loading} />;
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ backgroundColor: 'white' }}>
      <Hero categories={[]} />
      <Header title="Terbaru" />
      <View style={styles.container}>
        {data.map((item) => (
          <TourList
            name={item.name}
            image={item.photo}
            key={item.id}
            slug={item.slug}
            category={item.category.name}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 10,
    paddingHorizontal: 15,
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

export default Index;