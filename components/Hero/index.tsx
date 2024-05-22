import React from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import Header from '../Header'

const Hero = () => {
  return (
    <View>
      <View style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text>Halo</Text>
        </View>
      </View>
      <Header title="Kategori"/>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.container}>
        <View style={styles.selector}>
          <Text>Halo</Text>
        </View>
        <View style={styles.selector}>
          <Text>Halo</Text>
        </View>
        <View style={styles.selector}>
          <Text>Halo</Text>
        </View>
        <View style={styles.selector}>
          <Text>Halo</Text>
        </View>
        <View style={styles.selector}>
          <Text>Halo</Text>
        </View>
        <View style={styles.selector}>
          <Text>Halo</Text>
        </View>
        <View style={styles.selector}>
          <Text>Halo</Text>
        </View>
        <View style={styles.selector}>
          <Text>Halo</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  selector: {
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 3,
    borderColor: 'black',
    borderWidth: 1,
    marginRight: 10,
  },
  banner: {
    paddingHorizontal: 15,
    height: 150,
  },
  bannerContent: {
    backgroundColor: 'grey',
    borderRadius: 5,
    padding: 10,
    height: 150,
  }
})

export default Hero