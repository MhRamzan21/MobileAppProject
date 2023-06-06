import { TouchableOpacity, Text, StyleSheet } from "react-native";
import colors from "../app/colors";

const Button = ({ text, action }) => {
  return (
    <TouchableOpacity style={styles.LoginButton} onPress={action}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  LoginButton: {
    backgroundColor: colors.lightCoral,
    borderRadius: 7,
    height: 53,
    width: 121,
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: colors.deepBlue,
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Button;