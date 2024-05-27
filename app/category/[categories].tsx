import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { View, Text } from "react-native";

const CategoryList = () => {
    const [categories, setCategories] = useState<any>(null);

    const getCategories = async () => {
        const response = await fetch("https://dewalaravel.com/api/categories/domestik/place");
        const categoriesData = await response.json();

        console.log(categoriesData);

        setCategories(categoriesData);
    };

    return (
        <View>
            <Text>Category List</Text>
            {categories && categories.map((item: any) => (
                <Text>{item.name}</Text>
            ))}
        </View>
    )
}

export default CategoryList;

