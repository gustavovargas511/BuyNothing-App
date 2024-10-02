import BtnPrimary from "@/components/BtnPrimary";
import BtnSecondary from "@/components/BtnSecondary";
import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

function WelcomeScreen() {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("../../assets/images/background.jpg")}
    >
      <View style={styles.logoPosition}>
        <Image
          style={styles.logo}
          source={require("../../assets/images/share_the_unwanted.png")}
        />
        <Text style={styles.txt}>
          Share the Unwanted: Your Extra Could Be Their Essential!
        </Text>
      </View>
      <View style={styles.btnsContainer}>
        <BtnPrimary>Login</BtnPrimary>
        <View style={styles.btnMargin}>
          <BtnSecondary>Register</BtnSecondary>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 200,
  },
  logoPosition: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  txt: {
    fontSize: 25,
    fontWeight: "600",
    textAlign: "center",
    color: "white",
  },
  btnsContainer: {
    padding: 20,
    width: "100%",
  },
  btnMargin: {
    marginTop: 10, // Add your desired margin here
  },
});

export default WelcomeScreen;
