import { useRouter } from 'expo-router';
import { Pressable, Text, View } from "react-native";

export default function About() {
    const router = useRouter();
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>About Us</Text>
            <Pressable onPress={() => router.back()} style={{padding: 10, backgroundColor: 'lightblue', borderRadius: 5, marginTop: 10}}>
                <Text>Go Back</Text>
            </Pressable>
        </View>
    );
}