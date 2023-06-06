import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import colors from "../../app/colors";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useEffect, useState } from "react";
import { getUserData } from "../../firebase/Context";
import { authentication } from "../../firebase/FirebaseConfig";

export default ChangePass = () => {
  const [username, setUsername] = useState("");
  const [errMessage, setErrMessage] = useState("");
  //   const navigation = useNavigation();

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
  return (
    <View style={styles.container}>
      <View style={styles.c1}>
        <Icon name="arrow-back" size={24} color={colors.deepBlue} />
      </View>
      <View style={styles.pcenter}>
        <View style={styles.profilePicture}>ProfilePicture</View>
        {username ? (
          <Text style={styles.name}>{username}</Text>
        ) : (
          <Text style={styles.name}>Loading...</Text>
        )}
      </View>
      <View style={styles.cp}>Change Password</View>
      <View style={styles.inpCenter}>
        <TextInput style={styles.Input} placeholder="Old Password" />
        <TextInput style={styles.Input} placeholder="New Password" />
        <TextInput style={styles.Input} placeholder="Confirm Password" />
        <TouchableOpacity style={styles.LoginButton}>
          <Text style={styles.buttonText}>Change Password</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.deepBlue,
    height: "100%",
    // alignItems: "center",
  },
  c1: {
    backgroundColor: colors.beige,
    height: "5%",
    width: "100%",
    justifyContent: "center",
    paddingLeft: 30,
  },
  profilePicture: {
    marginTop: 50,
    marginLeft: 20,
    height: 150,
    width: 150,
    backgroundColor: colors.beige,
    borderRadius: 75,
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    color: colors.beige,
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 100,
    marginLeft: 20,
    // marginBottom: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  pcenter: {
    flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "center",
  },
  cp: {
    color: colors.beige,
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 30,
  },
  inpCenter: {
    flex: 1,
    alignItems: "center",
  },
  Input: {
    height: 53,
    width: 264,
    marginTop: 30,
    padding: 10,
    borderRadius: 7,
    backgroundColor: colors.beige,
    color: colors.deepBlue,
    alignItems: "center",
    justifyContent: "center",
  },
  LoginButton: {
    backgroundColor: colors.lightCoral,
    borderRadius: 7,
    height: 59,
    width: 229,
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
