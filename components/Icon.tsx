import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface IconProps {
  name: keyof typeof MaterialCommunityIcons.glyphMap; // This stays string unless we want stricter typing
  size?: number;
  backgroundColor?: string;
  iconColor?: string;
}

function Icon({
  name,
  size = 40,
  backgroundColor = "#000",
  iconColor = "white",
}: IconProps) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor, // key-value the same
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5} />
    </View>
  );
}

export default Icon;
