import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";

import { useColorScheme } from "@/hooks/use-color-scheme";
import { finishOnboarding } from "@/store/onboardingSlice";
import { RootState, store } from "@/store/store";
import { Montserrat_400Regular, Montserrat_400Regular_Italic, Montserrat_500Medium, Montserrat_700Bold, Montserrat_800ExtraBold_Italic, useFonts } from "@expo-google-fonts/montserrat";




function AppContent() {
  const dispatch = useDispatch();
  const completed = useSelector((state: RootState) => state.onboarding.completed);
  

  useEffect(() => {
    const checkOnboarding = async () => {
      const value = await AsyncStorage.getItem("onboardingCompleted");

      if (value === "true") {
        dispatch(finishOnboarding());
      }
    };

    checkOnboarding();
  }, []);

  

  return (
    <Stack initialRouteName={completed ? "(tabs)" : "onboarding/index"}>
      <Stack.Screen name="onboarding/index" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="modal" options={{ presentation: "modal", title: "Modal" }} />
    </Stack>
  );
}

export default function RootLayout() {
  const colorScheme = useColorScheme();
    const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_400Regular_Italic,
    Montserrat_700Bold,
    Montserrat_800ExtraBold_Italic,
    Montserrat_500Medium
  });

    if (!fontsLoaded) {
    return null
  }

  return (
    <Provider store={store}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <AppContent />
        <StatusBar style="auto" />
      </ThemeProvider>
    </Provider>
  );
}