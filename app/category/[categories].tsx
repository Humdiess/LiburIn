import { useLocalSearchParams } from 'expo-router';
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, Image, ScrollView } from 'react-native';

const CategoryList = () => {
    const { categories } = useLocalSearchParams()
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

//   console.log(data)

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

  return (
    <ScrollView>
        {data.map((item: any) => (
            <View key={item.id}>
                <Text>{item.name}</Text>
            </View>
        ))}
    </ScrollView>
  );
};

export default CategoryList;