import React from 'react'
import { View, Text, Image } from 'react-native'

const NewsCard = ({ article, index }: any) => {
  return (
    <View style={{ backgroundColor: 'white', padding: 10, borderRadius: 10, flexDirection: 'row', gap: 10, justifyContent: 'space-between', alignItems: 'center' }}>
        <View style={{ maxWidth: 200, flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
            <Text style={{ fontWeight: 'bold' }}>{article.title.substring(0, 80)}{article.title.length > 80 ? '...' : ''}</Text>
            <Text style={{ color: 'gray', fontSize: 12, marginTop: 5 }}>{article.publishedAt.substring(0, 10)}</Text>
        </View>
        <View>
            <Image source={{ uri: article.urlToImage }} style={{ width: 150, height: 100, borderRadius: 5 }} />
        </View>
    </View>
  )
}

export default NewsCard