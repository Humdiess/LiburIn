import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { fetchPlacesByCategory, Place } from '@/utils/api';
import { router } from 'expo-router';

interface CategoryProps {
  route: {
    params: {
      slug: string;
    };
  };
}

const Category: React.FC<CategoryProps> = ({ route }) => {
    const { slug } = route?.params || {};
    const [data, setData] = useState<Place[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          console.log('Category Slug:', slug);
          const placesData = await fetchPlacesByCategory(slug);
          console.log('Filtered Places:', placesData);
          setData(placesData);
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

  if (data.length === 0) {
    return <Text style={styles.error}>No places found for this category.</Text>;
  }

  const handlePress = (place: Place) => {
    router.push(`/${place.slug}`);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.itemContainer} onPress={() => router.push(`/${item.slug}`)}>
            <Image source={{ uri: item.photo }} style={styles.itemImage} />
            <View style={styles.itemTextContainer}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemCategory}>{item.category.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 15,
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
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    overflow: 'hidden',
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  itemTextContainer: {
    marginLeft: 10,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemCategory: {
    marginTop: 5,
    fontSize: 14,
    color: 'gray',
  },
});

export default Category;