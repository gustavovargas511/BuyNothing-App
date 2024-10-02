import { View } from "react-native";
import WelcomeScreen from "./screens/WelcomeScreen";
import Card from "@/components/Card";

export default function Index() {
  return (
    <View
      style={{
        backgroundColor: "#f8f4f4",
        padding: 20,
        paddingTop: 100,
      }}
    >
      <Card
        title="Random Item 1"
        subTitle="$1000"
        image={require("../assets/images/item1.jpg")} // Image passed correctly
      />
    </View>
  );
}
