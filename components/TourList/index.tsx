import { Text, View, Image } from 'react-native'

const tourList = ({name, image}:any) => {
  return (
    <View>
      <Image source={{ uri: 'https://picsum.photos/200/300' }} />
      <Text>{name}</Text>
    </View>
  )
}

export default tourList