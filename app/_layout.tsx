// RootLayout.tsx
import { store } from '@/shared/store/store';
import { Montserrat_500Medium, Montserrat_600SemiBold, Montserrat_700Bold, useFonts } from '@expo-google-fonts/montserrat';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Stack, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import Toast from "react-native-toast-message";
import { Provider } from "react-redux";


function AppContent() {
  const router = useRouter();

  const [checked, setChecked] = useState(false);
  const [hasSeenOnboarding, setHasSeenOnboarding] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [fontsLoaded] = useFonts({
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold
  })

  useEffect(() => {
    const checkAppState = async () => {
      const onboarding = await AsyncStorage.getItem("hasSeenOnboarding");
      const token = await AsyncStorage.getItem("authKey");

      setHasSeenOnboarding(onboarding === "true");
      setIsAuthenticated(!!token);

      setChecked(true);
    };

    checkAppState();
  }, []);

  useEffect(() => {
    if (!checked) return;

    if (!hasSeenOnboarding) {
      router.replace("/onboarding");
      return;
    }

    if (!isAuthenticated) {
      router.replace("/auth/login");
      return;
    }

    router.replace("/(tabs)");
  }, [checked, hasSeenOnboarding, isAuthenticated, router]);

  

  if (!fontsLoaded || !checked) {
    return null;
  }


  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}

export default function RootLayout() {
  return (
    <Provider store={store}>
      <AppContent />
      <Toast />
    </Provider>
  );
}