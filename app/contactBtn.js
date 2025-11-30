import { useRouter } from 'expo-router';
import { Button } from 'react-native';

function ContactButton() {
  const router = useRouter();

  return (
    <Button title="Contact" onPress={() => router.push("/contact")} />
  );
}

export default ContactButton;
