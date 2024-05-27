import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View, StyleSheet, ActivityIndicator, Image, TouchableOpacity } from 'react-native';
import TourList from '@/components/TourList';
import { fetchPlaces, fetchCategories, Place, Category } from '@/utils/api';
import { useRouter } from 'expo-router';

const Index = () => {
  const [data, setData] = useState<Place[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [placesData, categoriesData] = await Promise.all([fetchPlaces(), fetchCategories()]);
        setData(placesData);
        setCategories(categoriesData);
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
    <ScrollView showsVerticalScrollIndicator={false} style={styles.home}>
      <View style={styles.banner}>
        <Image source={require('../../assets/images/banner.png')} style={styles.bannerImage} />
      </View>
      <View style={styles.header}>
        <Text style={styles.headerText}>Terbaru</Text>
      </View>
      <View style={styles.categoryContainer}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={styles.categoryButton}
            // onPress={() => router.push(`/category?slug=${category.slug}`)}
            onPress={() => console.log('Category Slug:', category.slug)}
          >
            <Text style={styles.categoryButtonText}>{category.name}</Text>
          </TouchableOpacity>
        ))}
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
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  categoryButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    marginRight: 10,
    marginBottom: 10,
  },
  categoryButtonText: {
    fontSize: 16,
  },
});

export default Index;