import { BottomTabBarButtonProps } from "@react-navigation/bottom-tabs";
import { PlatformPressable } from "@react-navigation/elements";
import * as Haptics from "expo-haptics";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";

export function HapticTab(props: BottomTabBarButtonProps) {
  const { accessibilityState, style, ...rest } = props;

  const focused = accessibilityState?.selected;

  const resolvedStyle: StyleProp<ViewStyle> = [
    style,
    styles.tab,
    focused && styles.activeTab,
  ];

  return (
    <PlatformPressable
      {...rest}
      style={resolvedStyle}
      onPressIn={(ev) => {
        if (process.env.EXPO_OS === "ios") {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }
        props.onPressIn?.(ev);
      }}
    />
  );
}

const styles = StyleSheet.create({
  tab: {
    borderTopWidth: 3,
    borderTopColor: "transparent",
  },

  activeTab: {
    borderTopColor: "#F8991E",
    backgroundColor: '#8d25c1'
  },
});