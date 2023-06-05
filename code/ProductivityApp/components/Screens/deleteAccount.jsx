import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import colors from "../../app/colors";
import Icon from "react-native-vector-icons/MaterialIcons";

export default DeleteAccount = () => {
  return (
    <View style={styles.container}>
      <View style={styles.c1}>
        <Icon
          name="arrow-back"
          size={24}
          color={colors.deepBlue}
        />
      </View>
      <Text style={styles.pt}>Delete My Account</Text>
      <Text style={styles.pt1}>
      Deleting your account will:{'\n'}
         - Delete your account info and profile photo.{'\n'}
         - Delete your history on this phone.

      </Text>
      <Text style={styles.pt2}>
        Enter your Email and Password to delete your Account
      </Text>
      <View style={styles.inpCenter}>
        <TextInput style={styles.Input} placeholder="Email Address" />
        <TextInput style={styles.Input} placeholder="Password" />
        {/* <TextInput style={styles.Input} placeholder="Confirm Password" /> */}
        <TouchableOpacity style={styles.LoginButton}>
          <Text style={styles.buttonText}>Delete My Acount</Text>
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
      color: colors.beige,fontSize: 32,fontWeight: "bold",
      marginTop: 30,
    },
    pt1: {
      color: colors.beige, fontSize: 24,padding: 5,marginTop: 10,
    //   textAlign: "center",
    },
    pt2: {
        color: colors.beige, fontSize: 24,padding: 5,marginTop: 40,
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
  