import { useRouter } from 'expo-router';
import { Pressable, Text, View } from "react-native";

export default function Blog() {
    const router = useRouter();
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Blog page</Text>
      
      <Pressable onPress={() => router.push("/blog/1")} style={{padding: 10, backgroundColor: 'lightblue', borderRadius: 5, marginTop: 10}}>
        <Text>Blog post 1</Text>
      </Pressable>
      <Pressable onPress={() => router.push("/blog/2?author=John")} style={{padding: 10, backgroundColor: 'lightblue', borderRadius: 5, marginTop: 10}}>
        <Text>Blog post 2</Text>
      </Pressable>
      <Pressable onPress={() => router.back()} style={{padding: 10, backgroundColor: 'lightblue', borderRadius: 5, marginTop: 10}}>
        <Text>Back to Home</Text>
      </Pressable>
        </View>
    );
}