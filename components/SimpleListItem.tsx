import React from "react";
import { View, StyleSheet, TouchableHighlight } from "react-native";
import Icon from "./Icon";
import AppText from "./AppText/AppText";
import MaterialCommunityIcons from "@expo/vector-icons/build/MaterialCommunityIcons";
import colors from "@/app/config/colors";

interface SimpleListItemProps {
  iconName: keyof typeof MaterialCommunityIcons.glyphMap;
  iconColor: string;
  title: string;
  handleSelection?: () => void;
}

function SimpleListItem({
  iconName,
  iconColor,
  title,
  handleSelection,
}: SimpleListItemProps) {
  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor={colors.ligthGrey}
      onPress={handleSelection}
    >
      <View style={styles.infoContainer}>
        <Icon name={iconName} backgroundColor={iconColor} />
        <View style={styles.titleContainer}>
          <AppText style={styles.title}>{title}</AppText>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  infoContainer: {
    flexDirection: "row",
    padding: 5,
    paddingTop: 8,
  },
  titleContainer: {
    justifyContent: "center",
    marginLeft: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
  },
});

export default SimpleListItem;
