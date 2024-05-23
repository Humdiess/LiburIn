import { Link } from 'expo-router';
import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

interface TourListProps {
  name: string;
  image: string;
  slug: string;
}

const TourList: React.FC<TourListProps> = ({ name, image, slug }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image}/>
      <Link href={`${slug}`}>
        <View style={styles.content}>
          <Text>{name.substring(0, 15)}</Text>
        </View>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '48%',
    backgroundColor: 'white',
    borderRadius: 5,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 200,
  },
  content: {
    padding: 10,
  }
})

export default TourList;