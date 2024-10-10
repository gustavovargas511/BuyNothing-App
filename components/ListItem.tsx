import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageSourcePropType,
  TouchableHighlight,
  TouchableOpacity,
  Pressable,
} from "react-native";
import AppText from "./AppText/AppText";
import colors from "@/app/config/colors";
import Icon from "./Icon";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface ListItemProps {
  title: string;
  subTitle: string;
  image?: ImageSourcePropType; // Image source prop type
  handleSelection?: () => void;
}

function ListItem({ title, subTitle, image, handleSelection }: ListItemProps) {
  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor={colors.ligthGrey}
      onPress={handleSelection}
    >
      <View style={styles.container}>
        {image ? (
          <Image style={styles.image} source={image} />
        ) : (
          <View style={{ marginLeft: 10 }}>
            <Icon name="email" />
          </View>
        )}
        <View style={styles.infoContainer}>
          <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
          <AppText style={styles.subTitle} numberOfLines={2}>{subTitle}</AppText>
        </View>
          <MaterialCommunityIcons name="chevron-right" size={20} />
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    marginVertical: 5,
  },
  infoContainer: {
    flex: 1,
    padding: 5,
    paddingTop: 8,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 5,
    marginLeft: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
  },
  subTitle: {
    fontSize: 14,
    color: colors.mediumGrey,
  },
});

export default ListItem;
