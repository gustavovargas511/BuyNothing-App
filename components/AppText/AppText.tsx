import React, { PropsWithChildren } from "react";
import { Text, StyleSheet, Platform, TextStyle, TextProps } from "react-native";

import defaultStyles from "../../app/config/styles";

interface AppTextProps extends PropsWithChildren, TextProps {
  style?: TextStyle; //namins "style" so can be passed style={}
  // children: React.ReactNode; // Ensure you declare the children prop
}

function AppText({ children, style, ...props }: AppTextProps) {
  return <Text style={[defaultStyles.text, style]} {...props}>{children}</Text>; // Merge the styles properly
}

// const styles = StyleSheet.create({
//   text: {
//     fontSize: 18,
//     fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
//   },
// });

export default AppText;
