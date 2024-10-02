import React from "react";
import { View, StyleSheet, Image, ImageSourcePropType } from "react-native";
import colors from "@/app/config/colors";
import AppText from "./AppText/AppText";

interface CardProps {
  title: string;
  subTitle: string;
  image: ImageSourcePropType; // Image source prop type
}

function Card({ title, subTitle, image }: CardProps) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200, // Set a fixed height for the image
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    paddingBottom: 10,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
});

export default Card;
