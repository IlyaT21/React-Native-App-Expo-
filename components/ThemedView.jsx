import React from "react";
import { View, Text, useColorScheme, StyleSheet } from "react-native";
import { Colors } from "../constants/Colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ThemedView = ({ children, style, safe = false, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  const insets = useSafeAreaInsets();

  // build base style once
  const wrapperStyle = [
    {
      backgroundColor: theme.background,
      flex: 1,
      ...(safe
        ? {
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
          }
        : {}),
    },
    style,
  ];

  // ensure raw strings/numbers are wrapped in <Text>
  const renderChild = (child, index) => {
    if (typeof child === "string" || typeof child === "number") {
      return (
        <Text
          key={`tv-text-${index}`}
          style={[styles.defaultText, { color: theme.text }]}
        >
          {child}
        </Text>
      );
    }
    return child;
  };

  return (
    <View style={wrapperStyle} {...props}>
      {React.Children.count(children)
        ? React.Children.map(children, renderChild)
        : null}
    </View>
  );
};

const styles = StyleSheet.create({
  defaultText: {
    fontSize: 16,
  },
});

export default ThemedView;
