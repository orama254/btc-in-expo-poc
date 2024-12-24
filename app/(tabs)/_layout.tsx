import { Tabs } from 'expo-router';

import Ionicons from '@expo/vector-icons/Ionicons';


export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen 
            name="index"
            options={{ 
                headerShown: false,
                tabBarIcon: ({ color, focused}) => (
                    <Ionicons
                        name={focused ? 'home-sharp' : 'home-outline'}
                        size={24}
                        color='#F7931A'
                    />
                ),
                tabBarLabel: 'Home',
                tabBarLabelStyle: {
                    color: '#F7931A',
                },
            }}
       />
      <Tabs.Screen name="send" />
      <Tabs.Screen name="receive" />
      <Tabs.Screen 
            name="about"
            options={{
                headerShown: false,
                tabBarIcon: ({ color, focused}) => (
                    <Ionicons
                        name={focused ? 'information-circle-sharp' : 'information-circle-outline'}
                        size={24}
                        color='#F7931A'
                    />
                ),
                tabBarLabel: 'About',
                tabBarLabelStyle: {
                    color: '#F7931A',
                },
            }}
       />
    </Tabs>
  );
}