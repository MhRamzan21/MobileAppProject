import React, { useState, useEffect } from "react";
import { View, TextInput, Button } from "react-native";

const EditTask = ({ task }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = () => {
    const updatedTask = {
      tid: task.tid,
      title,
      description,
    };

    setTask(updatedTask);
    alert("Task has been updated!");
  };

  return (
    <View>
      <TextInput
        placeholder="Title"
        value={title}
        onChange={handleTitleChange}
      />
      <TextInput
        placeholder="Description"
        value={description}
        onChange={handleDescriptionChange}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
        backgroundColor: colors.deepBlue,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
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
export default EditTask;
