// RootLayout.tsx
import { setHasSeen } from "@/store/onboardingSlice";
import { store } from "@/store/store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { Provider, useDispatch } from "react-redux";

function AppContent() {
  
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const [hasSeen, setHasSeenState] = useState(false);

  useEffect(() => {
    const loadOnboardingState = async () => {
      const value = await AsyncStorage.getItem("hasSeenOnboarding");
      const seen = value === "true";
      
      dispatch(setHasSeen(seen));  // update Redux state
      setHasSeenState(seen);       // update local state for layout decision
      setChecked(true);
    };

    loadOnboardingState();
  }, [dispatch]);

  if (!checked) return null; // wait until AsyncStorage is read

  return (
    <Stack>
      {!hasSeen ? (
        <Stack.Screen name="onboarding/index" options={{ headerShown: false }} />
      ) : (
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      )}
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}