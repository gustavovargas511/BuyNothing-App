import AppTextInput from "@/components/AppTextInput";
import BtnPrimary from "@/components/BtnPrimary";
import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Formik } from "formik";

function LoginScreen() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image
          source={require("../../assets/images/share_the_unwanted.png")}
          style={styles.logo}
        />
        <Formik
          initialValues={{ email: "", pass: "" }}
          onSubmit={(values) => console.log(values)}
        >
          {({ handleChange, handleSubmit }) => (
            <>
              <AppTextInput
                iconName="email"
                autoCorrect={false}
                keyboardType="email-address"
                placeholder="your email here"
                autoCapitalize="none"
                onChangeText={handleChange("email")}
              />
              <AppTextInput
                iconName="lock"
                autoCorrect={false}
                secureTextEntry
                placeholder="your password here"
                autoCapitalize="none"
                onChangeText={handleChange("pass")}
              />
              <BtnPrimary handleClick={handleSubmit}>Login</BtnPrimary>
            </>
          )}
        </Formik>
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
export default LoginScreen;
