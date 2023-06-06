import React, { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import colors from "../../app/colors";
import { useNavigation } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";
import { authentication, db } from "../../firebase/FirebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Button from "../Button";

export default function Login() {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errMessage, setErrMessage] = useState("");

  const resetUser = () => {
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const matchPassword = () => {
    password === confirmPassword
      ? handleSignup()
      : setErrMessage("Passwords do no match");
  };
  const signupSuccess = () => {
    console.log("User Registered Successfully");
    navigation.navigate("dash");
  };
  const AddUserToDB = async (user) => {
    await setDoc(doc(db, "Users", user.uid), {
      UserName: username,
      Email: user.email,
    });
  };

  const handleSignup = () => {
    createUserWithEmailAndPassword(authentication, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        AddUserToDB(user);
        signupSuccess();
        resetUser();
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          setErrMessage("That email address is already in use!");
        }
        if (error.code === "auth/invalid-email") {
          setErrMessage("That email address is invalid!");
        }
        if (error.code === "auth/weak-password") {
          setErrMessage("Password should be at least 6 characters");
        } else {
          console.log(error);
          setErrMessage("Something went wrong, try again.");
        }
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Text style={styles.tm}>TM</Text>
        <Text style={styles.loginHeading}>TaskMate</Text>
      </View>
      <Text style={styles.h1}>Create Account</Text>
      <TextInput
        placeholder="Username"
        style={styles.Input}
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        placeholder="Email Address"
        style={styles.Input}
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        placeholder="Password"
        style={styles.Input}
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
      />
      {errMessage && <Text style={styles.ErrorMessage}>{errMessage}</Text>}
      <TextInput
        placeholder=" Confirm Password"
        style={styles.Input}
        onChangeText={setConfirmPassword}
        value={confirmPassword}
        secureTextEntry={true}
      />
      <Button text="Sign Up" action={handleSignup}/>
      <View style={styles.footerView}>
        <Text style={styles.footerText}>
          Already Register?{" "}
          <Text
            style={styles.footerLink}
            onPress={() => navigation.navigate("Login")}
          >
            Login
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
    justifyContent: "center",
    letterSpacing: 0,
    marginBottom: 60,
  },
  h1: {
    color: colors.beige,
    fontWeight: "bold",
    fontSize: 24,
  },
  tm: {
    color: colors.beige,
    transform: [{ rotate: "90deg" }],
    fontSize: 48,
    fontWeight: "bold",
    textAlign: "center",
  },
  ErrorMessage: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
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
