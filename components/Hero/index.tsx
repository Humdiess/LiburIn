import React from 'react'
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native'
import Header from '../Header'

const Hero = () => {
  return (
    <View>
      <View style={styles.banner}>
        <View style={styles.bannerContent}>
          <Image source={require('./banner.png')} style={styles.image}/>
        </View>
      </View>
      <Header title="Kategori"/>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.container}>
        <View style={styles.selector}>
          <Text>Gunung</Text>
        </View>
        <View style={styles.selector}>
          <Text>Taman Nasional</Text>
        </View>
        <View style={styles.selector}>
          <Text>Museum</Text>
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
    borderRadius: 7.5,
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderColor: 'black',
    borderWidth: 1,
    marginRight: 10,
  },
  banner: {
    paddingHorizontal: 15,
    height: 150,
    marginTop: 15,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  bannerContent: {
    backgroundColor: 'grey',
    borderRadius: 7.5,
    height: 150,
    overflow: 'hidden',
  }
})

export default Hero