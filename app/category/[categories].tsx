import { router, useLocalSearchParams } from 'expo-router';
import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, Image, ScrollView, Pressable, StyleSheet } from 'react-native';

const CategoryList = () => {
    const { categories } = useLocalSearchParams()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
      fetch(`https://dewalaravel.com/api/categories/${categories}/places`)
        .then(response => response.json())
        .then(data => {
          setData(data.data);
          setLoading(false);
        })
        .catch(error => {
          setError(error.message);
          setLoading(false);
        });
    }, []);

    if (loading) {
      return (
        <View>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text>Loading...</Text>
        </View>
      );
    }

    if (error) {
      return (
        <View>
          <Text>Error: {error}</Text>
        </View>
      );
    }

    if (data.length === 0) {
      return (
          <View>
              <Text>Tidak ada tempat dengan kategori {categories}</Text>
          </View>
      );
    }

    const handlePress = (slug: string) => {
        router.push(`/place/${slug}`)
    }

  return (
    <ScrollView style={styles.container}>
        {data.map((item: { slug: string; photo: string; name: string }) => (
            <Pressable onPress={() => handlePress(item.slug)} style={styles.card}>
                <Image source={{ uri: item.photo }} style={styles.image} />
                <Text style={styles.name}>{item.name}</Text>
            </Pressable>
        ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 15
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        overflow: 'hidden',
        gap: 10,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 8,
    },
    name: {
        fontWeight: '600',
        fontSize: 16
    }
})

export default CategoryList;