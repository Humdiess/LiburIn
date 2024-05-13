import React, { useEffect, useState } from 'react'
import { View, Text, Pressable, Linking, Image } from 'react-native'

interface Article {
    url: string;
    title: string;
    publishedAt: string;
}

const NewsList = () => {

    const [news, setNews] = useState([]);

    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/top-headlines?country=id&apiKey=2b83182a6fda40c2974b34dd530d151d"
        );
        const data = await response.json();
        setNews(data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    return (        
      <View style={{ flex: 1 }}>
        {news.map((article: Article) => (
            <View key={article.url} style={{ flexDirection: 'row', padding: 10, alignItems: 'center', borderBottomColor: '#2D2D2D', borderBottomWidth: 1 }}>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#ABABAB', marginBottom: 5 }}>{article.title.substring(0, 80)}</Text>
                    <Text style={{ color: '#ABABAB', fontSize: 12 }}>{article.publishedAt.substring(0, 10)}</Text>
                </View>
                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                    <Image source={{ uri: "https://www.suarasurabaya.net/wp-content/uploads/2024/05/sdxrebh-e1714543653564.jpg.webp" }} style={{ width: 150, height: 100, resizeMode: 'cover', borderRadius: 5 }} />
                </View>
            </View>
        ))}
    </View>
    )
}

export default NewsList