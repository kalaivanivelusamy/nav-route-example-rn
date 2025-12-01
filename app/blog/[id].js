import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { Pressable, Text, View } from "react-native";

export default function Blog() {
    const router = useRouter();
    const { id, author } = useLocalSearchParams();   
    return (
        <>
        <Stack.Screen options={{ title: `Blog Post ${id}` }} />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{marginBottom: 20,fontSize: 18}}>Blog page {id}</Text>
        { author && 
        ( 
        <Text style={{marginBottom: 20,fontSize: 16}}>Author: {author}</Text>
        ) }

        <Pressable onPress={() => router.back()} style={{padding: 10, backgroundColor: 'lightblue', borderRadius: 5, marginTop: 10}}>
        <Text>Back to Home</Text>
        </Pressable>
        </View>
        </>
    );
}