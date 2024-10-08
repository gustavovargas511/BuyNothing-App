import AppTextInput from "@/components/AppTextInput";
import BtnPrimary from "@/components/BtnPrimary";
import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function DemoLoginScreen() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const sendInfo = () => {
    console.log(email, pass);
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image
          source={require("../../assets/images/share_the_unwanted.png")}
          style={styles.logo}
        />
        <AppTextInput
          iconName="email"
          autoCorrect={false}
          keyboardType="email-address"
          placeholder="your email here"
          autoCapitalize="none"
          onChangeText={(txt) => setEmail(txt)}
        />
        <AppTextInput
          iconName="lock"
          autoCorrect={false}
          secureTextEntry
          placeholder="your password here"
          autoCapitalize="none"
          onChangeText={(txt) => setPass(txt)}
        />
        <BtnPrimary handleClick={sendInfo}>Login</BtnPrimary>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
  },
});
export default DemoLoginScreen;
