import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppText from "@/components/AppText/AppText";

import colors from "../config/colors";

export default function ListingDetailsScreen() {
  return (
    <View>
      <Image
        style={styles.image}
        source={require("../../assets/images/item1.jpg")}
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Plumbing Services</AppText>
        <AppText style={styles.info}>
          $$$: By hour or by specific service
        </AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 400,
  },
  info: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
});
