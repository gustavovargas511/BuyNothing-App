import ListItem from "@/components/ListItem";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Separator from "@/components/Separator";
import colors from "../config/colors";
import Icon from "@/components/Icon";
import MaterialCommunityIcons from "@expo/vector-icons/build/MaterialCommunityIcons";
import AppText from "@/components/AppText/AppText";
import SimpleListItem from "@/components/SimpleListItem";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted" as keyof typeof MaterialCommunityIcons.glyphMap,
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Message",
    icon: {
      name: "email" as keyof typeof MaterialCommunityIcons.glyphMap,
      backgroundColor: colors.secondary,
    },
  },
];

function AccountScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title={"Gustavo Vargas"}
          subTitle={"gustavovargas511@1984development.com"}
          image={require("../../assets/images/myself.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={({ item }) => (
            <SimpleListItem
              title={item.title}
              iconName={item.icon.name}
              iconColor={item.icon.backgroundColor}
            />
          )}
          ItemSeparatorComponent={Separator}
        />
      </View>
      <View style={styles.container}>
        <SimpleListItem
          iconName="logout"
          iconColor={"#ffe66d"}
          title={"Log Out"}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    backgroundColor: colors.white,
  },
  screen: {
    flex: 1,
    backgroundColor: colors.ligthGrey,
  },
});
export default AccountScreen;
