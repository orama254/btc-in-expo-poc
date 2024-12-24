import { View } from 'react-native';
import { Link, Stack } from 'expo-router';



export default function NotFoundScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Link href="/">Looks like you're lost, Go back Home!</Link>
    </View>
  );
}