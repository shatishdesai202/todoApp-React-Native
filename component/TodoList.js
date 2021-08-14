import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const TodoList = ({
  todoItem,
  handleLongPress,
  handleEdit,
  setisModalVisible,
}) => {
  return (
    <TouchableOpacity
      onLongPress={() => handleLongPress()}
      activeOpacity={0.1}
      style={styles.todoItem}
      onPress={() => {
        handleEdit();
        setisModalVisible();
      }}
    >
      <Text style={styles.todoText}>{todoItem}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todoItem: {
    alignItems: "center",
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    height: 200,
    justifyContent: "center",
  },
  todoText: {
    fontSize: 60,
  },
});

export default TodoList;
