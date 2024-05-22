import React from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import Header from '../Header'

const Hero = () => {
  return (
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
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    flexDirection: 'row',
  },
  selector: {
    borderRadius: 100,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderColor: 'black',
    borderWidth: 1,
    marginRight: 10,
  }
})

export default Hero