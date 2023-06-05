import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, StyleSheet, Button, Alert } from 'react-native';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('https://api.example.com/tasks')
      .then(response => response.json())
      .then(data => setTasks(data));
  }, []);

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));

    Alert.alert(
      'Delete Task',
      'Are you sure you want to delete this task?',
      [
        {
            text: 'Delete',
            onPress: () => {},
        },
        {
          text: 'Cancel',
          onPress: () => {},
        },
        
      ],
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Text style={styles.tm}>TM</Text>
      </View>
      <View style={styles.tasks}>
        {tasks.map((task, index) => (
          <View key={index} style={styles.task}>
            <Text style={styles.taskTitle}>{task.title}</Text>
            <Text style={styles.taskDueDate}>{task.dueDate}</Text>
            <Button
              title="Complete"
              style={styles.completeButton}
              onPress={() => {
                task.completed = true;
                setTasks(tasks);
              }}
            />
            <Button
              title="Delete"
              style={styles.deleteButton}
              onPress={() => deleteTask(task.id)}
            />
          </View>
        ))}
      </View>
      <TextInput
        style={styles.input}
        placeholder="Enter new task"
        onChange={(text) => addTask(text)}
      />
      <Button title="Add Task" style={styles.addButton} onPress={addTask} />
    </View>
  );
};

const styles = StyleSheet.create({
    logo: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        letterSpacing: 0,
        marginBottom: 60,
      },
      tm: {
        color: colors.beige,
        transform: [{ rotate: "90deg" }],
        fontSize: 48,
        fontWeight: "bold",
        textAlign: "center",
      },
      container: {
        flex: 1,
        height: "100%",
        backgroundColor: colors.deepBlue,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
      },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 10,
  },
  tasks: {
    flex: 1,
    marginTop: 10,
  },
  task: {
    margin: 10,
    borderRadius: 5,
    backgroundColor: colors.beige,
  },
  taskTitle: {
    fontSize: 16,
  },
  taskDueDate: {
    fontSize: 12,
  },
  completeButton: {
    backgroundColor: colors.lightCoral,
    borderRadius: 5,
    padding: 10,
  },
  deleteButton: {
    backgroundColor: colors.lightCoral,
    borderRadius: 5,
    padding: 10,
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
});

export default App;
