import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme.web";
import React from "react";
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
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

  icon?: React.ReactNode; // optional icon
  iconPosition?: "left" | "right"; // icon position

  image?: any; // optional image source
  imagePosition?: "left" | "right"; // image position
};

export default function ButtonUI({
  title,
  onPress,
  disabled = false,
  loading = false,
  variant = "primary",
  style,
  textStyle,
  icon,
  iconPosition = "left",
  image,
  imagePosition = "left",
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
      style={[styles.button, variantStyles[variant], isDisabled && styles.disabled, style]}
    >
      {loading ? (
        <ActivityIndicator color={colors.text} />
      ) : (
        <View style={[styles.content, (icon || image) ? { flexDirection: "row", alignItems: "center", justifyContent: "center" } : null]}>
          {image && imagePosition === "left" && <Image source={image} style={styles.image} />}
          {icon && iconPosition === "left" && <View style={styles.icon}>{icon}</View>}

          <Text style={[styles.text, textColor, textStyle]}>{title}</Text>

          {icon && iconPosition === "right" && <View style={styles.icon}>{icon}</View>}
          {image && imagePosition === "right" && <Image source={image} style={styles.image} />}
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "90%",
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 10,
  },

  disabled: {
    backgroundColor: "#C4C5C4",
  },

  content: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  icon: {
    marginHorizontal: 5,
  },

  image: {
    width: 20,
    height: 20,
    marginHorizontal: 5,
    resizeMode: "contain",
  },

  text: {
    fontWeight: "600",
    fontSize: 16,
  },
});