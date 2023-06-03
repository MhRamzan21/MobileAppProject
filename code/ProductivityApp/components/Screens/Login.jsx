import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import colors from "../../app/colors";
import { useNavigation } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Login() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Text style={styles.tm}>TM</Text>
        <Text style={styles.loginHeading}>TaskMate</Text>
      </View>
      <TextInput placeholder="Email or Username" style={styles.Input} />
      <TextInput
        placeholder="Password"
        style={styles.Input}
        secureTextEntry={true}
      />
      <Text style={styles.forgot}>Forgot Password?</Text>
      <TouchableOpacity style={styles.LoginButton}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.footerView}>
        <Text style={styles.footerText}>
          Don't have an account?{' '}
          <Text
            style={styles.footerLink}
            onPress={() => navigation.navigate('Signup')}>
            Sign up
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"center",
    letterSpacing: 0,
    marginBottom: 60,
  },
  tm: {
    color: colors.beige,
    transform: [{ rotate: "90deg" }],
    fontSize: 48,
    fontWeight: "bold",
    textAlign: "center",
  },
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: colors.deepBlue,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  loginHeading: {
    fontSize: 48,
    color: colors.lightCoral,
    fontWeight: "bold",
    textAlign: "center",
  },
  Input: {
    height: 53,
    width: 264,
    marginTop: 30,
    padding: 10,
    borderRadius: 7,
    backgroundColor: colors.beige,
    color: colors.deepBlue,
  },
  forgot: {
    color: colors.beige,
    fontWeight: "bold",
    paddingTop: 10,
    fontSize: 16,
  },
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
  footerView: {
    alignItems: "center",
    marginTop: 20,
  },
  footerText: {
    marginTop: 20,
    fontSize: 16,
    color: colors.beige,
  },
  footerLink: {
    color: colors.beige,
    fontWeight: "bold",
    fontSize: 16,
  },
});
