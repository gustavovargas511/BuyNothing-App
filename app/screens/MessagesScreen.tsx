import ListItem from "@/components/ListItem";
import React, { useState } from "react";
import { FlatList, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Separator from "@/components/Separator";
import SwipeComponent from "@/components/SwipeComponent.tsx";

const initialMessages = [
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
  {
    id: 3,
    title: "T3",
    description: "D3",
    image: require("../../assets/images/myself.jpg"),
  },
  {
    id: 4,
    title: "T4",
    description: "D4",
    image: require("../../assets/images/myself.jpg"),
  },
];

function MessagesScreen() {
  const [refreshing, setRefreshing] = useState(false);
  const [msg, updateMsg] = useState(initialMessages);
  const handleDelete = (id: number) => {
    const newMessages = msg.filter((m) => m.id !== id);
    // console.log(newMessages);
    updateMsg(newMessages);
  };
  return (
    <SafeAreaView>
      <FlatList
        data={msg}
        keyExtractor={(message) => message.id.toString()}
        //destructuring data on renderItem
        renderItem={({ item }) => (
          <SwipeComponent
            // onSwipeLeft={() => console.log("Edit", item)}
            onSwipeRight={() => handleDelete(item.id)}
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
        refreshing={refreshing}
        onRefresh={() => {
          updateMsg(initialMessages);
        }}
      />
    </SafeAreaView>
  );
}

export default MessagesScreen;
