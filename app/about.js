import { useRouter } from 'expo-router';
import { Button, Text, View } from "react-native";

export default function About() {
      const router = useRouter();
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>About Us</Text>
            <Button title = "Go Back" onPress={() => router.back()} />
        </View>
    );
}