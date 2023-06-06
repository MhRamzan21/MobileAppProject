import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import colors from "../../app/colors";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
  deleteUser,
  reauthenticateWithCredential,
  EmailAuthProvider,
} from "firebase/auth";
import { useState } from "react";
import { authentication } from "../../firebase/FirebaseConfig";
import { useNavigation } from "expo-router";

export default DeleteAccount = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation('');
  const handleDelete = async () => {
    const credential = EmailAuthProvider.credential(email, password);
    try {
      await reauthenticateWithCredential(
        authentication.currentUser,
        credential
      );
      await deleteUser(authentication.currentUser);
      console.log("User account deleted successfully");
      navigation.navigate('Signup')
      // navigate to a confirmation screen or log out the user
    } catch (error) {
      console.log(error);
      // display an error message to the user
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.c1}>
        <Icon name="arrow-back" size={24} color={colors.deepBlue} />
      </View>
      <Text style={styles.pt}>Delete My Account</Text>
      <Text style={styles.pt1}>
        Deleting your account will:{"\n"}- Delete your account info and profile
        photo.{"\n"}- Delete your history on this phone.
      </Text>
      <Text style={styles.pt2}>
        Enter your Email and Password to delete your Account
      </Text>
      <View style={styles.inpCenter}>
        <TextInput
          style={styles.Input}
          placeholder="Email Address"
          onChangeText={setEmail}
          value={email}
        />
        <TextInput
          style={styles.Input}
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.LoginButton} onPress={handleDelete}>
          <Text style={styles.buttonText}>Delete My Account</Text>
        </TouchableOpacity>
      </View>
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
  pt: {
    color: colors.beige,
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 30,
  },
  pt1: {
    color: colors.beige,
    fontSize: 24,
    padding: 5,
    marginTop: 10,
    //   textAlign: "center",
  },
  pt2: {
    color: colors.beige,
    fontSize: 24,
    padding: 5,
    marginTop: 40,
    textAlign: "center",
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
