import React, { useEffect, useState } from 'react'
import { View, Text, Pressable, Linking } from 'react-native'

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
        <View>
            {news.map((article: Article) => (
                <View key={article.url} style={{ padding: 10 }}>
                  <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#ABABAB' }}>{article.title}</Text>
                  <Text style={{ color: '#ABABAB' }}>{article.publishedAt}</Text>
                  <Pressable onPress={() => Linking.openURL(article.url)}>
                    <Text style={{ color: 'blue' }}>Baca selengkapnya</Text>
                  </Pressable>
                </View>
            ))}
        </View>
    )
}

export default NewsList