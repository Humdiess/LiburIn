import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import TourList from '@/components/TourList';
import Header from '@/components/Header';
import Hero from '@/components/Hero';

interface Place {
  id: number;
  name: string;
  photo: string;
  slug: string;
}

const Index = () => {
  const [data, setData] = useState<Place[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dewalaravel.com/api/places');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        const processedData = jsonData.data.map((item: any) => ({
          ...item
        }));
        setData(processedData);
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

  if (error) {
    return <Text style={styles.error}>{error}</Text>;
  }


  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ backgroundColor: 'white' }}>
      <Hero />
      <Header title='Terbaru' />
      <View style={styles.container}>
        {data.map((item) => (
          <TourList name={item.name} image={item.photo} key={item.id} slug={item.slug} />
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