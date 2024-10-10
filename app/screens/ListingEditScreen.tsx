import AppTextInput from "@/components/AppTextInput";
import BtnPrimary from "@/components/BtnPrimary";
import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Formik } from "formik";
import * as Yup from "yup";
import AppText from "@/components/AppText/AppText";
import colors from "../config/colors";
import AppPicker from "@/components/AppPicker";
import MaterialCommunityIcons from "@expo/vector-icons/build/MaterialCommunityIcons";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title cannot be empty").label("Email"),
  price: Yup.number()
    .required("Price cannot be empty")
    .min(1)
    .max(100000)
    .label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const categories = [
  { label: "Plumber", value: "plumber" },
  { label: "Electrician", value: "electrician" },
  { label: "Carpenter", value: "carpenter" },
  { label: "Painter", value: "painter" },
  { label: "Gardener", value: "gardener" },
  { label: "Roofing Contractor", value: "roofer" },
  { label: "HVAC Technician", value: "hvac_technician" },
  { label: "Landscaper", value: "landscaper" },
  { label: "House Cleaner", value: "house_cleaner" },
  { label: "Mason", value: "mason" },
];

function ListingEditScreen() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Formik
          initialValues={{
            title: "",
            price: null,
            description: "",
            category: null,
          }}
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
                // iconName="email"
                autoCorrect={false}
                // keyboardType="email-address"
                placeholder="Title"
                autoCapitalize="none"
                onBlur={() => setFieldTouched("title")}
                onChangeText={handleChange("title")}
              />
              {touched.title && errors.title && (
                <AppText style={styles.errorMgs}>{errors.title}</AppText>
              )}
              <AppTextInput
                keyboardType="numeric"
                placeholder="Price"
                maxLength={9}
                onBlur={() => setFieldTouched("price")}
                onChangeText={handleChange("price")}
              />
              {touched.price && errors.price && (
                <AppText style={styles.errorMgs}>{errors.price}</AppText>
              )}
              <AppPicker
                items={categories}
                onValueChange={() => {
                  return;
                }}
              />
              <AppTextInput
                placeholder="Description"
                multiline
                numberOfLines={3}
                onBlur={() => setFieldTouched("description")}
                onChangeText={handleChange("description")}
              />
              {touched.description && errors.description && (
                <AppText style={styles.errorMgs}>{errors.description}</AppText>
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
  },
});
export default ListingEditScreen;
