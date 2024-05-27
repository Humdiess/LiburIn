import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import { Link, useRouter } from 'expo-router';

interface TourListProps {
  name: string;
  image: string;
  slug: string;
  category: string;
}

const TourList: React.FC<TourListProps> = ({ name, image, slug, category }) => {

  const router = useRouter()
    
  const handlePress = () => {
    console.log(`Navigating to slug: ${slug}`);
    router.push(`/${slug}`)
  }

  return (
    <Pressable style={styles.container} onPress={handlePress}>
        <Image source={{ uri: image }} style={styles.image} />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.category}>{category}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '48%',
    marginBottom: 15,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  name: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  category: {
    marginTop: 5,
    fontSize: 14,
    color: 'gray',
    textAlign: 'center',
  },
});

export default TourList;