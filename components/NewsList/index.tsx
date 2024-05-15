import React from 'react'
import { View, Text } from 'react-native'

const NewsList = () => {
    const [news, setNews] = React.useState([])

    React.useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch('https://newsapi.org/v2/top-headlines?country=id&apiKey=2b83182a6fda40c2974b34dd530d151d')
                const data = await response.json()
                setNews(data.articles)
            } catch (error) {
                console.error('Error fetching news', error)
            }
        }
        fetchNews()
    }, [])

  return (
    <View style={styles.container}>
        {news.map((article: any, index: number) => (
            <Text key={index}>{article.title}</Text>
        ))}
    </View>
  )
}

const styles = {
    container: {
        BackgroundColor: 'white',
        padding: 20,
        gap: 20
    },
    text: {
        fontSize: 24,
    }
  }

export default NewsList