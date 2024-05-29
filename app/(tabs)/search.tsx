import { router, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';
import { fetchPlaces, Place } from '@/utils/api';

const Search = () => {
  const [data, setData] = useState<Place[]>([]);
  const [filteredData, setFilteredData] = useState<Place[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState<string>('');
  const [showCancel, setShowCancel] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const placesData = await fetchPlaces();
        setData(placesData);
        setFilteredData(placesData);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (text: string) => {
    setQuery(text);
    if (text) {
      const filtered = data.filter(place => place.name.toLowerCase().includes(text.toLowerCase()));
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
  };
  
  const handleCancel = () => {
    setQuery('');
    setFilteredData(data);
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" style={styles.loading} />;
  }

  if (error) {
    return <Text style={styles.error}>{error}</Text>;
  }

  return (
    <View style={styles.container}>
        <View style={styles.searchContainer}>
            <TextInput
                style={styles.searchBar}
                placeholder="Search..."
                value={query}
                onChangeText={handleSearch}
            />
            <TouchableOpacity onPress={handleCancel} style={styles.cancelButton}>
              <Text style={{ color: 'grey' }}>Cancel</Text>
            </TouchableOpacity>
        </View>
      <FlatList
        data={filteredData}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.itemContainer} onPress={() => router.push(`/place/${item.slug}`)}>
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
    paddingHorizontal: 15,
    paddingTop: 15
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    left: 0,
    right: 0,
    marginBottom: 15,
    paddingTop: 30,
    gap: 10,
    maxWidth: '100%',
  },
  cancelButton: {

  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    width: '85%',
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

export default Search;