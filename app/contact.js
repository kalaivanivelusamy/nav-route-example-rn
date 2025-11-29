import { useRouter } from 'expo-router';
import { Button, Text, View } from "react-native";

export default function Contact() {
        const router = useRouter();
    return (
               <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                   <Text>Contact</Text>
                   <Button title = "Go Back" onPress={() => router.back()} />
               </View>
        
    );

}