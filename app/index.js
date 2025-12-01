import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";


export default function Page() {
  return (
     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style ={{fontSize: 20, marginBottom: 20}}>Welcome to the our App!</Text>
      <Link href={"/about"} asChild>
       <Pressable style={{padding: 10, backgroundColor: 'lightblue', borderRadius: 5,marginBottom: 10}}> 
        <Text>About</Text>
       </Pressable>
      </Link>
      <Link href={"/contact"} asChild>
       <Pressable style={{padding: 10, backgroundColor: 'lightblue', borderRadius: 5}}> 
            <Text>Contact</Text>
       </Pressable>
      </Link>
      <Link href={"/blog"} asChild> 
       <Pressable style={{padding: 10, backgroundColor: 'lightblue', borderRadius: 5, marginTop: 10}}> 
            <Text>Blog Page</Text>
       </Pressable>
      </Link>
      <Link href={"/feed"} asChild> 
       <Pressable style={{padding: 10, backgroundColor: 'lightblue', borderRadius: 5, marginTop: 10}}> 
            <Text>Go to tabs</Text>
       </Pressable>
      </Link>
      </View>
  );
}