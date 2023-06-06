import { StyleSheet, TextInput, View, TouchableOpacity, Text, Image } from "react-native";
import colors from "../../app/colors";
import { useNavigation } from "expo-router";
import back from "../assets/Images/back.png";
import { collection, addDoc } from "firebase/firestore";
import { authentication, db } from "../../firebase/FirebaseConfig";
import { useState } from "react";

export default AddTask = () => {
  const navigation = useNavigation();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  const addTaskToDB = async (title, description, time, date) => {
    const user = authentication.currentUser; // Get the current user
    if (user) {
      const userId = user.uid; // Get the user's ID
  
      const userTasksCollection = collection(db, "Users", userId, "Tasks"); // Use the user's ID in the collection path
      try {
        await addDoc(userTasksCollection, {
          Title: title,
          Description: description,
          Time: time,
          Date: date,
        });
        console.log("Task added Successfully");
      } catch (error) {
        console.log("Error adding task:", error);
      }
    } else {
      console.log("No user found");
    }
  };
  
  

  const handleAddTask = async() => {
    await addTaskToDB(title, description, time, date);
    console.log("Task added Successfully")
    navigation.navigate("dash");
  };

  return (
    <View style={styles.container}>
      <View style={styles.c1}>
        <TouchableOpacity onPress={() => navigation.navigate("dash")}>
          <Image source={back} style={styles.backarrow} />
        </TouchableOpacity>
      </View>

      {/* <View style={styles.cp}>Change Password</View> */}
      <View style={styles.inpCenter}>
        <Text style={styles.label}>Title: </Text>
        <TextInput
          style={styles.Input}
          placeholder="Add Title here"
          onChangeText={setTitle}
          value={title}
        />
        <Text style={styles.label}>Description: </Text>
        <TextInput
          style={styles.Input1}
          placeholder="Add Description here..."
          onChangeText={setDescription}
          value={description}
        />
        <Text style={styles.label}>Time: </Text>
        <TextInput
          style={styles.Input}
          placeholder="Add Time here..."
          onChangeText={setTime}
          value={time}
        />
        <Text style={styles.label}>Date: </Text>
        <TextInput
          style={styles.Input}
          placeholder="Add Date here..."
          onChangeText={setDate}
          value={date}
        />
        <TouchableOpacity style={styles.LoginButton} onPress={handleAddTask}>
          <Text style={styles.buttonText}>Add Task</Text>
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
    backarrow:{
        height: 25,
        width: 25,
        marginTop: 10,
        // marginLeft: 5,
    },
    inpCenter: {
        flex: 1,
        alignItems: "center",
      },
      Input: {
        height: 60,
        width: 352,
        marginTop: 0,
        padding: 10,
        borderRadius: 7,
        borderWidth: 3,
        borderRadius: 10, 
        borderColor: colors.lightCoral,
        backgroundColor: colors.beige,
        color: colors.deepBlue,
        alignItems: "center",
        justifyContent: "center",
      },
      Input1: {
        height: 160,
        width: 352,
        marginTop: 0,
        padding: 10,
        borderRadius: 7,
        borderWidth: 3,
        borderRadius: 10, 
        borderColor: colors.lightCoral,
        backgroundColor: colors.beige,
        color: colors.deepBlue,
        // alignItems: "center",
        // justifyContent: "center",
      },
      LoginButton: {
        backgroundColor: colors.lightCoral,
        borderRadius: 7,
        height: 59,
        width: 140,
        marginTop: 30,
        alignItems: "center",
        justifyContent: "center",
      },
      buttonText: {
        color: colors.deepBlue,
        fontSize: 24,
        fontWeight: "bold",
      },
      label: {
        textAlign: 'justify',
        fontSize: 24,
        fontWeight: '200',
        marginTop: 30,
        color: colors.beige,
      }

})