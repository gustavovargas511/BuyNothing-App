import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

import colors from "../config/colors";

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <AntDesign name="close" size={30} color="white" />
      </View>
      <View style={styles.deleteIcon}>
        <AntDesign name="delete" size={30} color="white" />
      </View>
      <Image
        source={require("../../assets/images/clothes_bulk.jpg")}
        style={styles.productImg}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  closeIcon: {
    position: "absolute",
    top: 80,
    left: 30,
  },
  deleteIcon: {
    position: "absolute",
    top: 80,
    right: 30,
  },
  productImg: {
    width: "100%",
    height: "100%",
  },
});

export default ViewImageScreen;
