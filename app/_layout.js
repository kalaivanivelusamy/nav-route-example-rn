import { Stack } from 'expo-router';
import ContactButton from './contactBtn';


export default function RootLayout() {

  return (
      <Stack>
        <Stack.Screen name="index" options={
          {
            headerTitle: "Home",
            headerRight: ContactButton
          }
        }/>
        <Stack.Screen name="about" />
        <Stack.Screen name="contact" />
      </Stack>
  );
}
