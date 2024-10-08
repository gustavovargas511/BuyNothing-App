import { TextInput, View, Text, Switch } from "react-native";
import WelcomeScreen from "./screens/WelcomeScreen";
import Card from "@/components/Card";
import ListingDetailsScreen from "./screens/ListingDetailsScreen";
import ViewImageScreen from "./screens/ViewImageScreen";
import MessagesScreen from "./screens/MessagesScreen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "@/components/Icon";
import ListItem from "@/components/ListItem";
import AccountScreen from "./screens/AccountScreen";
import ListingsScreen from "./screens/ListingsScreen";
import { useState } from "react";
import AppTextInput from "@/components/AppTextInput";
import CustomDropdown from "@/components/AppPicker";
import LoginScreen from "./screens/LoginScreen";
import FmkLoginScreen from "./screens/DemoLoginScreen";
import ListingEditScreen from "./screens/ListingEditScreen";

export default function Index() {
  // return <WelcomeScreen />;
  // return <ListingDetailsScreen />;
  // return <ViewImageScreen />;
  // return (
  //   <GestureHandlerRootView style={{ flex: 1 }}>
  //     <MessagesScreen />
  //   </GestureHandlerRootView>
  // );
  // return (
  //   <SafeAreaView>
  //     <ListItem
  //       // image={require("../assets/images/myself.jpg")}
  //       title="My Title"
  //       subTitle="My Sub Title"
  //     />
  //   </SafeAreaView>
  // );
  // return <AccountScreen />;
  // return <ListingsScreen />;
  // const [firstName, setFirstName] = useState("");
  // const [isNew, setIsNew] = useState(false);
  // const items = [
  //   { label: "Plumber", value: "plumber" },
  //   { label: "Electrician", value: "electrician" },
  //   { label: "Carpenter", value: "carpenter" },
  //   { label: "Painter", value: "painter" },
  //   { label: "Gardener", value: "gardener" },
  //   { label: "Roofing Contractor", value: "roofer" },
  //   { label: "HVAC Technician", value: "hvac_technician" },
  //   { label: "Landscaper", value: "landscaper" },
  //   { label: "House Cleaner", value: "house_cleaner" },
  //   { label: "Mason", value: "mason" },
  // ];

  // const handleValueChange = (value: string) => {
  //   console.log("Selected value:", value);
  // };

  // return (
  //   <SafeAreaView>
  //     {/* <Text>{firstName}</Text>
  //     <TextInput
  //       placeholder="First Name"
  //       onChangeText={(text) => setFirstName(text)}
  //       style={{
  //         borderBottomColor: "#ccc",
  //         borderBottomWidth: 1,
  //         paddingTop: 10,
  //       }}
  //     /> */}

  //     <CustomDropdown items={items} onValueChange={handleValueChange} />
  //     <AppTextInput iconName="email" placeholder="Enter username" />
  //     {/* <Switch value={isNew} onValueChange={(newValue) => setIsNew(newValue)} /> */}
  //   </SafeAreaView>
  // );

  // return <LoginScreen />;
  return (<ListingEditScreen/>)
}
