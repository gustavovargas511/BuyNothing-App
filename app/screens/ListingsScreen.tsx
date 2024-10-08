import Card from "@/components/Card";
import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../config/colors";

const listings = [
  {
    id: 1,
    title: "Basic faucet change",
    price: 200,
    image: require("../../assets/images/faucet.jpg"),
  },
  {
    id: 2,
    title: "Broken pipe",
    price: 250,
    image: require("../../assets/images/bpipe.jpg"),
  },
];

function ListingsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price.toString()}
            image={item.image}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: colors.ligthGrey,
  },
});
export default ListingsScreen;
