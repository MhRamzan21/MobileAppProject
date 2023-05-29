import { StyleSheet, Text, View } from "react-native";
import colors from "./colors"
import Login from "../components/Screens/Login";

export default function Page() {
  return (
    <View>
      <Login />
    </View>
  );
}


const styles = StyleSheet.create({
  text: {
    color: colors.deepBlue,
    fontSize: 20,
    
  }
})
