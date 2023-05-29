import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import colors from "../../app/colors";

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Text style={styles.tm}>TM</Text>
        <Text style={styles.loginHeading}>TaskMate</Text>
      </View>
      <TextInput placeholder="Email or Username" style={styles.email} />
      <TextInput
        placeholder="Password"
        style={styles.password}
        secureTextEntry={true}
      />
      <Text style={styles.forgot}>
        Forgot Password?
      </Text>
      <View style={styles.LoginButton}>
        <Text style={styles.buttonText}>Login</Text>
      </View>
      <View style={styles.footerView}>
        <Text style={styles.footerText}>
          Don't have an account? <Text style={styles.footerLink}>Sign up</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    flexDirection: "row",
    alignItems: "center",
    letterSpacing: 0,
  },
  tm: {
    color: colors.beige,
    transform: [{rotate: "90deg"}],
    fontSize: 48,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    height: '100%',
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
    marginBottom: 20,
  },
  email: {
    height: 53,
    width: 264,
    marginTop: 20,
    padding: 10,
    borderRadius: 7,
    backgroundColor: colors.beige,
    color: colors.deepBlue,
  },
  password: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 53,
    width: 264,
    marginTop: 20,
    padding: 10,
    borderRadius: 7,
    backgroundColor: colors.beige,
    color: colors.deepBlue,
  },
  forgot: {
    color: colors.beige,
    fontWeight: 'bold',
    paddingTop: 10,
    fontSize: 16,
  },
  LoginButton: {
    backgroundColor: colors.lightCoral,
    borderRadius: 7,
    height: 53,
    width: 121,
    marginTop: 20,
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
    fontSize: 16,
    color: colors.beige,
  },
  footerLink: {
    color: colors.beige,
    fontWeight: "bold",
    fontSize: 16,
  },
});
