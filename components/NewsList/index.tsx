import React from 'react'
import { View, Text } from 'react-native'
import NewsCard from './NewsCard'
import InputSearch from '../Search/InputSearch'

const NewsList = () => {
    const [news, setNews] = React.useState([])

    React.useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch('https://newsapi.org/v2/everything?q=Apple&from=2024-05-11&sortBy=popularity&apiKey=2b83182a6fda40c2974b34dd530d151d')
                const data = await response.json()
                setNews(data.articles.slice(0, 5))
            } catch (error) {
                console.error('Error fetching news', error)
            }
        }
        fetchNews()
    }, [])

  return (
    <View 
    style={{ padding: 10, gap: 10 }}
    >
        <InputSearch />
        {news.map((article: any, index: number) => (
            <NewsCard key={index} article={article} />
        ))}
    </View>
  )
}

export default NewsList