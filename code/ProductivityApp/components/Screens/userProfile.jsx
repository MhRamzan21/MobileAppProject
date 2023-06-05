import { useNavigation } from "expo-router";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { authentication } from "../../firebase/FirebaseConfig";
import { getUserData } from "../../firebase/Context";
import { signOut } from "firebase/auth";
import colors from "../../app/colors";
import Icon from "react-native-vector-icons/MaterialIcons";
import Button from "../Button";

export default Profile = () => {
  const [username, setUsername] = useState("");
  const [errMessage, setErrMessage] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await getUserData(authentication.currentUser.uid);
        console.log(userData.UserName);
        if (userData && userData.UserName) {
          setUsername(userData.UserName);
        }
      } catch (error) {
        console.log(error.message);
        setErrMessage(error.message);
      }
    };

    if (authentication.currentUser) {
      fetchUserData();
    }
  }, []);

  const handleLogout = () => {
    signOut(authentication)
      .then(() => {
        resetUserState();
        console.log("User signed out!");
        navigation.navigate("Login");
      })
      .catch((error) => {
        console.log(error.message);
        setErrMessage(error.message);
      });
  };

  const resetUserState = () => {
    setUsername("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.c1}>
        <Icon
          name="arrow-back"
          size={24}
          color={colors.deepBlue}
        />
      </View>

      <View style={styles.profilePicture}>ProfilePicture</View>
      {username ? (
        <Text style={styles.name}>{username}</Text>
      ) : (
        <Text style={styles.name}>Loading...</Text>
      )}
      <View style={styles.chpContainer}>
        <Text style={styles.chp} onPress={() => navigation.navigate("ChangePass")}>
          Change Password
        </Text>
        <Icon name="arrow-forward" size={24} color={colors.beige} />
      </View>
      <View style={styles.chpContainer} >
        <Text style={styles.chp} onPress={() => navigation.navigate("DeleteAccount")}>
          Delete my Account
        </Text>
        <Icon name="arrow-forward" size={24} color={colors.beige} />
      </View>

      <View style = {styles.chpContainer}>
          <Text style={styles.chp} onPress={() => navigation.navigate("Privacy")}>
            Privacy Policy
          </Text>
      </View>
      <Button text="Log Out" action={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.deepBlue,
    height: "100%",
    alignItems: "center",
  },
  c1: {
    backgroundColor: colors.beige,
    height: "5%",
    width: "100%",
    justifyContent: "center",
    paddingLeft: 30,
  },
  name: {
    color: colors.beige,
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 20,
    marginBottom: 30,
  },
  profilePicture: {
    marginTop: 120,
    height: 150,
    width: 150,
    backgroundColor: colors.beige,
    borderRadius: 75,
    alignItems: "center",
    justifyContent: "center",
  },
  chpContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 25,
    paddingHorizontal: 20,
  },
  chp: {
    color: colors.beige,
    fontWeight: "bold",
    fontSize: 24,
    marginLeft: 10,
  },
});
