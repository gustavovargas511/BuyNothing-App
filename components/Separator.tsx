import React from "react";
import { View, StyleSheet } from "react-native";

import colors from "@/app/config/colors";

function Separator() {
  return <View style={styles.line} />;
}

const styles = StyleSheet.create({
  line: {
    width: "100%",
    height: 1,
    backgroundColor: colors.black,
  },
});

export default Separator;
