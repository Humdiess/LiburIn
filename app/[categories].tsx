import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

const CategoryList = () => {
    const { categories } = useLocalSearchParams();

    return (
        <View>
            <Text>Category List</Text>
        </View>
    )
}

export default CategoryList;

