import { Link } from "expo-router";
import { Text, View } from "react-native";


export default function Page() {
  return (
    <View>
      <Text>Welcome to the our App!</Text>
      <Link href={"/about"}>Go to About</Link>
      <Link href={"/contact"}>Go to Contact</Link>
      </View>
  );
}