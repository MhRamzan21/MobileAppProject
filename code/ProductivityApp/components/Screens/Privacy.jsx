import { View, Text, StyleSheet, Image } from "react-native";
import colors from "../../app/colors";
import back from "../assets/Images/back.png";

export default Privacy = () => {
  return (
    <View style={styles.container}>
      <View style={styles.c1}>
        <TouchableOpacity onPress={() => navigation.navigate("dash")}>
          <Image source={back} style={styles.backarrow} />
        </TouchableOpacity>
      </View>
      <Text style={styles.pt}>Privacy Policy</Text>
      <Text style={styles.pt1}>
        It's important to note that privacy policies can vary depending on the
        type of business or website, as well as the laws and regulations in your
        jurisdiction. It's always a good idea to consult with a legal
        professional to ensure that your privacy policies are compliant with
        applicable laws and regulations.
      </Text>
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
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 30,
  },
  pt1: {
    color: colors.beige,
    fontSize: 24,
    padding: 5,
    textAlign: "center",
  },
  backarrow: {
    height: 25,
    width: 25,
    marginTop: 10,
    // marginLeft: 5,
  },
});
