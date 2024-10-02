import React, { PropsWithChildren } from "react";
import { Text, StyleSheet, Platform, TextStyle } from "react-native";

interface AppTextProps extends PropsWithChildren {
  style?: TextStyle; //namins "style" so can be passed style={}
  // children: React.ReactNode; // Ensure you declare the children prop
}

function AppText({ children, style }: AppTextProps) {
  return <Text style={[styles.text, style]}>{children}</Text>; // Merge the styles properly
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});

export default AppText;
