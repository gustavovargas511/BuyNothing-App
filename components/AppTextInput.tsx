import React from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Platform,
  TextInputProps,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import iconSet from "@expo/vector-icons/build/Fontisto";

import colors from "@/app/config/colors";
import defaultStyles from "../app/config/styles";

interface AppTextInputProps extends TextInputProps {
  iconName?: keyof typeof MaterialCommunityIcons.glyphMap;
  placeholder?: string;
}

function AppTextInput({ iconName, placeholder, ...props }: AppTextInputProps) {
  return (
    <View style={styles.container}>
      {iconName && (
        <MaterialCommunityIcons
          name={iconName}
          size={20}
          color={colors.mediumGrey}
          style={styles.icon}
        />
      )}
      <TextInput
        style={defaultStyles.text}
        placeholder={placeholder}
        {...props}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.ligthGrey,
    borderRadius: 10,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
});
export default AppTextInput;
