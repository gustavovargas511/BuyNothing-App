import React from "react";
import { View, StyleSheet } from "react-native";

import colors from "@/app/config/colors";

function Separator() {
  return <View style={styles.line} />;
}

const styles = StyleSheet.create({
  line: {
    width: "100%",
    height: 2,
    backgroundColor: colors.ligthGrey,
  },
});

export default Separator;
