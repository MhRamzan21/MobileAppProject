import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import colors from "../../app/colors";
import dash from "../assets/Images/dash.png";
import profile from "..//assets/Images/profile.png";
import { useNavigation } from "expo-router";
import today from "../assets/Images/today.png";
import calender from "../assets/Images/calender.png";
import list from "../assets/Images/list.png";
import check from "../assets/Images/check.png";
import { useEffect, useState } from "react";
import { onSnapshot, query, orderBy, collection } from "firebase/firestore";
import { authentication, db } from "../../firebase/FirebaseConfig";

export default Dashbaord = () => {
  const navigation = useNavigation();
  const [tasks, setTasks] = useState([]);

  const fetchTasks = () => {
    const user = authentication.currentUser;
    if (user) {
      const userId = user.uid;
      const userTasksCollection = collection(db, "Users", userId, "Tasks");
      const q = query(userTasksCollection, orderBy("Date", "asc"));

      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const tasksData = [];
        querySnapshot.forEach((doc) => {
          tasksData.push({ id: doc.id, ...doc.data() });
        });
        setTasks(tasksData);
        console.log(tasksData);
      });

      return unsubscribe;
    } else {
      console.log("No user found");
    }
  };

  useEffect(() => {
    const unsubscribe = fetchTasks();
    return () => unsubscribe();
  }, []);
  const handleTaskPress = (taskId) => {
    navigation.navigate("TaskDetails", { taskId });
  };

  return (
    <View style={styles.container}>
      <View style={styles.c1}>
        {/* <Icon name="arrow-back" size={24} color={colors.deepBlue} /> */}
        <Image source={dash} style={styles.dashi} />
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Image source={profile} style={styles.prof} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("add")}>
        <View style={styles.c2}>
          <TextInput style={styles.sign} placeholder="+" />
          <Text style={styles.newtast}>New Task</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.c3}>
        <View style={styles.two}>
          <Image source={today} style={styles.boximage} />
          <Text style={styles.stbox}>Today</Text>
        </View>
        <View style={styles.two}>
          <Image source={calender} style={styles.boximage} />
          <Text style={styles.stbox}>Scheduled</Text>
        </View>
      </View>
      <View style={styles.c3}>
        <View style={styles.two}>
          <Image source={list} style={styles.boximage} />
          <Text style={styles.stbox}>All</Text>
        </View>
        <View style={styles.two}>
          <Image source={check} style={styles.boximage} />
          <Text style={styles.stbox}>Completed</Text>
        </View>
      </View>
      <View style={styles.c4}>
      <Text style={styles.mytasks}>My Tasks</Text>
      {tasks.map((task) => (
        <TouchableOpacity key={task.id} onPress={() => handleTaskPress(task.id)}>
          <View style={styles.taskItem}>
            <Text style={styles.taskTitle}>{task.Title}</Text>
            <Text style={styles.taskTime}>{"\n"}</Text>
            <Text style={styles.taskTime}>{task.Time}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
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
  dashi: {
    marginTop: 10,
    height: 20,
    width: 20,
  },
  prof: {
    marginTop: 10,
    marginRight: 5,
    height: 25,
    width: 25,
    // marginRight: 10,
  },
  c2: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginRight: 10,
    marginBottom: 40,
  },
  sign: {
    height: 20,
    width: 20,
    backgroundColor: colors.beige,
    color: colors.deepBlue,
    textAlign: "center",
    borderRadius: 50,
    marginTop: 10,
  },
  newtast: {
    color: colors.beige,
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 5,
    paddingLeft: 10,
  },
  c3: {
    // margin:30,
    marginTop: 10,
    marginRight: 30,
    marginLeft: 30,
    marginBottom: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  two: {
    height: 100,
    width: 150,
    backgroundColor: colors.lightCoral,
    cololr: colors.deepBlue,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: colors.beige,
  },
  stbox: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.deepBlue,
    marginTop: 20,
    marginLeft: 5,
  },
  boximage: {
    height: 40,
    width: 40,
  },
  mytasks: {
    fontSize: 32,
    fontWeight: "bold",
    color: colors.beige,
    marginTop: 30,
    marginLeft: 30,
  },
  taskItem: {
    flexDirection: "Column",
    // justifyContent: "space-between",
    // alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    backgroundColor: colors.beige,
    color: colors.deepBlue,
    borderRadius: 20,
    margin: 10,
    // borderBottomColor: colors.lightGray,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.deepBlue,
    // margin: 10,
  },
  taskTime: {
    fontSize: 14,
    color: colors.deepBlue,
  },
});
