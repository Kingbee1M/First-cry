import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarItemStyle: {
            borderTopWidth: 2,
            borderTopColor: '#F8991E',
          },
        tabBarStyle: {
          backgroundColor: Colors[colorScheme ?? 'light'].background,
        },
        headerShown: false,
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol lib='Feather' size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: 'Cart',
          tabBarIcon: ({ color }) => <IconSymbol lib='Feather' size={28} name="shopping-cart" color={color} />,
        }}
      />
      <Tabs.Screen
        name="parenting"
        options={{
          title: 'Parenting',
          tabBarIcon: ({ color }) => <IconSymbol lib='Ionicons' size={28} name="people-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="wishlist"
        options={{
          title: 'Wishlist',
          tabBarIcon: ({ color }) => <IconSymbol lib='Feather' size={28} name="heart" color={color} />,
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: 'Account',
          tabBarIcon: ({ color }) => <IconSymbol lib='Feather' size={28} name="user" color={color} />,
        }}
      />
    </Tabs>
  );
}
