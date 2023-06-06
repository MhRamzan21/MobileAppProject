import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { doc, getDoc, deleteDoc } from "firebase/firestore";
import { authentication, db } from "../../firebase/FirebaseConfig";
import colors from "../../app/colors";
import back from "../assets/Images/back.png";
import { useNavigation } from "expo-router";
import Button from "../Button";


const TaskDetails = ({ route }) => {
    const navigation = useNavigation();
  const { taskId } = route.params;
  const [taskDetails, setTaskDetails] = useState(null);

  useEffect(() => {
    const fetchTaskDetails = async () => {
      const user = authentication.currentUser;
      if (user) {
        const userId = user.uid;
        const taskDocRef = doc(db, "Users", userId, "Tasks", taskId);
        const taskDoc = await getDoc(taskDocRef);
        if (taskDoc.exists()) {
          setTaskDetails(taskDoc.data());
        } else {
          console.log("No such document!");
        }
      } else {
        console.log("No user found");
      }
    };

    fetchTaskDetails();
  }, [taskId]);

  const handleDeleteTask = async () => {
    const user = authentication.currentUser;
    if (user) {
      const userId = user.uid;
      const taskDocRef = doc(db, "Users", userId, "Tasks", taskId);
      await deleteDoc(taskDocRef);
      navigation.navigate("dash");
    } else {
      console.log("No user found");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.c1}>
        <TouchableOpacity onPress={() => navigation.navigate("dash")}>
          <Image source={back} style={styles.backarrow} />
        </TouchableOpacity>
      </View>
      <View style={styles.show}>
        {taskDetails ? (
          <>
            <Text style={styles.textDes}>Title: {taskDetails.Title}</Text>
            <Text style={styles.textDes}>Time: {taskDetails.Time}</Text>
            <Text style={styles.textDes}>Description: {taskDetails.Description}</Text>
            <Text style={styles.textDes}>Date: {taskDetails.Date}</Text>
            {/* Add more fields as needed */}
          </>
        ) : (
          <Text>Loading...</Text>
        )}
      </View>
        <Button text="Delete" action={handleDeleteTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.deepBlue,
    height: "100%",
    //   alignItems: "center",
  },
  c1: {
    backgroundColor: colors.beige,
    height: "5%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 30,
  },
  show: {
    backgroundColor: colors.beige,
    margin: 10,
    borderRadius: 10,
    borderWidth: 5,
    borderColor: colors.lightCoral,
  },
  backarrow: {
    height: 25,
    width: 25,
    marginTop: 10,
    // marginLeft: 5,
  },
  textDes: {
    marginLeft: 10,
    fontSize: 32,
    fontWeight: "bold",

  }
});
export default TaskDetails;
