import ListItem from "@/components/ListItem";
import React from "react";
import { FlatList, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Separator from "@/components/Separator";
import SwipeComponent from "@/components/SwipeComponent.tsx";

const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../../assets/images/myself.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../../assets/images/myself.jpg"),
  },
];

function MessagesScreen() {
  return (
    <SafeAreaView>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        //destructuring data on renderItem
        renderItem={({ item }) => (
          <SwipeComponent
            onSwipeLeft={() => console.log("Edit", item)}
            onSwipeRight={() => console.log("Delete", item)}
          >
            <ListItem
              title={item.title}
              subTitle={item.description}
              image={item.image}
              handleSelection={() => console.log("Clicked!", item)}
            />
          </SwipeComponent>
        )}
        ItemSeparatorComponent={Separator}
      />
    </SafeAreaView>
  );
}

export default MessagesScreen;
