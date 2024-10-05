import { View } from "react-native";
import WelcomeScreen from "./screens/WelcomeScreen";
import Card from "@/components/Card";
import ListingDetailsScreen from "./screens/ListingDetailsScreen";
import ViewImageScreen from "./screens/ViewImageScreen";
import MessagesScreen from "./screens/MessagesScreen";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Index() {
  // return <WelcomeScreen />;
  // return <ListingDetailsScreen />;
  // return <ViewImageScreen />;
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <MessagesScreen />
    </GestureHandlerRootView>
  );
}
