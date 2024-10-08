import AppTextInput from "@/components/AppTextInput";
import BtnPrimary from "@/components/BtnPrimary";
import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Formik } from "formik";
import * as Yup from "yup";
import AppText from "@/components/AppText/AppText";
import colors from "../config/colors";

const validationSchema = Yup.object().shape({
  email: Yup.string().required("Email can not be empty").email().label("Email"),
  pass: Yup.string().required("Password can not be empty").min(4).label("Pass"),
});

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
          validationSchema={validationSchema}
        >
          {({
            handleChange,
            handleSubmit,
            errors,
            touched,
            setFieldTouched,
          }) => (
            <>
              <AppTextInput
                iconName="email"
                autoCorrect={false}
                keyboardType="email-address"
                placeholder="your email here"
                autoCapitalize="none"
                onBlur={() => setFieldTouched("email")}
                onChangeText={handleChange("email")}
              />
              {touched.email && errors.email && (
                <AppText style={styles.errorMgs}>{errors.email}</AppText>
              )}
              <AppTextInput
                iconName="lock"
                autoCorrect={false}
                secureTextEntry
                placeholder="your password here"
                autoCapitalize="none"
                onBlur={() => setFieldTouched("pass")}
                onChangeText={handleChange("pass")}
              />
              {touched.pass && errors.pass && (
                <AppText style={styles.errorMgs}>{errors.pass}</AppText>
              )}
              <View style={styles.btn}>
                <BtnPrimary handleClick={handleSubmit}>Login</BtnPrimary>
              </View>
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
  errorMgs: {
    padding: 10,
    borderRadius: 10,
    color: colors.danger,
  },
  btn: {
marginTop: 15,
  }
});
export default LoginScreen;
