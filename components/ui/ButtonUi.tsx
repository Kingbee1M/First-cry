import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme.web";
import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";

type Props = {
  title: string;
  onPress: () => void;

  disabled?: boolean;
  loading?: boolean;

  variant?: "primary" | "secondary" | "outline" | "ghost";

  style?: ViewStyle;
  textStyle?: TextStyle;
};

export default function ButtonUI({
  title,
  onPress,
  disabled = false,
  loading = false,
  variant = "primary",
  style,
  textStyle,
}: Props) {
  const colorScheme = useColorScheme() ?? "light";
  const colors = Colors[colorScheme];

  const isDisabled = disabled || loading;

  const variantStyles = {
    primary: {
      backgroundColor: "#F8991E",
    },

    secondary: {
      backgroundColor: "#3669C9",
    },

    outline: {
      borderWidth: 2,
      borderColor: "#E0E0E0",
      backgroundColor: colors.background,
    },

    ghost: {
      backgroundColor: "transparent",
    },
  };

  const textColor = {
    color: variant === "primary" || variant === "secondary"
      ? "#fff"
      : colors.text,
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      disabled={isDisabled}
      style={[
        styles.button,
        variantStyles[variant],
        isDisabled && styles.disabled,
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={colors.text} />
      ) : (
        <Text style={[styles.text, textColor, textStyle]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "90%",
    paddingVertical: 15,
    alignItems: "center",
  },

  disabled: {
    backgroundColor: "#C4C5C4",
  },

  text: {
    fontWeight: "600",
    fontSize: 16,
  },
});