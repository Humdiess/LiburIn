import { Link } from 'expo-router';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      <Link href={'/'} style={styles.button}>Halo</Link>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 15,
    borderBottomColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    color: 'blue',
  }
});

export default Header;
