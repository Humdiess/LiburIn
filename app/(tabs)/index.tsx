import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View, StyleSheet, ActivityIndicator, InteractionManager, Image } from 'react-native';
import TourList from '@/components/TourList';
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
    <ScrollView showsVerticalScrollIndicator={false} style={styles.home}>
      <View style={styles.banner}>
        <Image source={require('../../assets/images/banner.png')} style={styles.bannerImage} />
      </View>
      <View style={styles.header}>
        <Text style={styles.headerText}>Terbaru</Text>
      </View>
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
  home: {
    padding: 15,
    backgroundColor: 'white',
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 10,
  },
  banner: {
    height: 200,
    width: '100%',
    borderRadius: 8,
    overflow: 'hidden',
  },
  bannerImage: {
    height: 200,
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 8,
  },
  header: {
    paddingVertical: 15,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
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