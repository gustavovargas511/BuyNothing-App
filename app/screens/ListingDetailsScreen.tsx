import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppText from "@/components/AppText/AppText";

import colors from "../config/colors";
import ListItem from "@/components/ListItem";

export default function ListingDetailsScreen() {
  return (
    <View>
      <Image
        style={styles.image}
        source={require("../../assets/images/item1.jpg")}
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Plumbing Services</AppText>
        <AppText style={styles.info}>Hourly: $10</AppText>
        <AppText style={styles.info}>Job: $20ish</AppText>
        <View style={styles.infoContainer}>
          <ListItem
            image={require("../../assets/images/myself.jpg")}
            title="Gustavo Vargas"
            subTitle="5 Listings"
          />
        </View>
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
    marginVertical: 1,
  },
  infoContainer: {
    marginTop: 20,
  },
});
