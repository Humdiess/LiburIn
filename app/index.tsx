import NewsList from "@/components/NewsList";
import { Text, View, ScrollView } from "react-native";

export default function Index() {
  return (
    <ScrollView>
      <NewsList />
    </ScrollView>
  );
}
