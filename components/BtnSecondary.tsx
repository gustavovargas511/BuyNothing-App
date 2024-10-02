import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { PropsWithChildren } from "react";

interface BtnSecondaryProps extends PropsWithChildren {
  handleClick?: () => void;
}

const BtnSecondary = ({ children, handleClick }: BtnSecondaryProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={handleClick}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#6c757d", // Bootstrap primary color
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5, // To add rounded corners
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    color: "#fff", // White text, matching Bootstrap
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default BtnSecondary;
