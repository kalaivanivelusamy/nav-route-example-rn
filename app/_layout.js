import { Stack } from 'expo-router';
import ContactButton from './contactBtn';


export default function RootLayout() {

  return (
      <Stack screenOptions={
          {
            headerRight: ContactButton,
            headerStyle: { backgroundColor: 'pink'  },
            headerTintColor: '#000',
            headerTitleStyle: { fontWeight: 'bold' },
          }
        }>
        <Stack.Screen name="index" />
        <Stack.Screen name="about" />
        <Stack.Screen name="contact" options={{headerTitle: "Contact",presentation: "modal"}}/>
        <Stack.Screen name="blog/index" options={
          {
            headerTitle: "All Blog posts"
          }
        } />
        {/* hide header for tabs layout*/}
       <Stack.Screen name="(tabs)" options={{headerShown: false}}/> 


      </Stack>
  );
}
