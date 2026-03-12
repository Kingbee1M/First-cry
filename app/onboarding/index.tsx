import AsyncStorage from "@react-native-async-storage/async-storage";
import type { StackNavigationProp } from '@react-navigation/stack';
import React, { useRef, useState } from "react";
import { Dimensions, FlatList, StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux";
import { setHasSeen } from "../../shared/store/onboardingSlice";
import ScreenFour from "./screens/screenFour";
import ScreenOne from "./screens/screenOne";
import ScreenThree from "./screens/screenThree";
import ScreenTwo from "./screens/screenTwo";

const { width, height } = Dimensions.get("window");
type OnboardingStackParamList = {
  '(tabs)': undefined;
  'onboarding/index': undefined;
};

type OnboardingScreenNavigationProp = StackNavigationProp<
  OnboardingStackParamList,
  'onboarding/index'
>;


export default function OnboardingScreen({
  navigation,
}: {
  navigation: OnboardingScreenNavigationProp;
}) {
  const dispatch = useDispatch();
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const completeOnboarding = async () => {
    await AsyncStorage.setItem("hasSeenOnboarding", "true");
    dispatch(setHasSeen(true));

    navigation.replace("(tabs)");
  };

  const nextSlide = () => {
    if (currentIndex < slides.length - 1) {
      const nextIndex = currentIndex + 1;
      flatListRef.current?.scrollToIndex({ index: nextIndex });
      setCurrentIndex(nextIndex);
    } else {
      completeOnboarding();
    }
  };

  const slides = [
    { key: "screen-1", component: <ScreenOne next={nextSlide} /> },
    { key: "screen-2", component: <ScreenTwo next={nextSlide} /> },
    { key: "screen-3", component: <ScreenThree next={nextSlide} /> },
    { key: "screen-4", component: <ScreenFour next={nextSlide} /> },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={slides}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <View style={styles.slide}>{item.component}</View>
        )}
        horizontal
        pagingEnabled
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    width: width,
    height: height, // full screen
  },
});