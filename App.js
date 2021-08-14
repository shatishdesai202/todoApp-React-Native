import React, { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import TodoList from "./component/TodoList";
import TodoTextInput from "./component/TodoTextInput";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [isEdit, setIsEdit] = useState({ id: null, status: false });
  const [todoList, setTodoList] = useState([]);
  const [isModalVisible, setisModalVisible] = useState(false);

  useEffect(() => {
    if (!todoList.length) {
      setInputValue("");
    }
  }, [todoList]);

  const handleChangeValue = (enteredValue) => {
    setInputValue(enteredValue);
  };

  const handleClick = () => {
    setisModalVisible(false);
    if (!isEdit.status) {
      inputValue &&
        setTodoList((prev) => [
          ...prev,
          {
            id: (Math.random() + Date.now()).toFixed(5).toString(),
            value: inputValue,
          },
        ]);
    } else {
      setTodoList((prev) =>
        prev.map((item) =>
          item.id === isEdit.id
            ? { ...item, value: inputValue ? inputValue : item.value }
            : item
        )
      );
      setIsEdit({ id: null, status: false });
    }
    setInputValue("");
  };

  const handleLongPress = (id) => {
    return setTodoList((prev) => prev.filter((item) => item.id !== id));
  };

  const handleEdit = (id) => {
    let item = todoList.find((item) => id === item.id);
    setInputValue(item.value);
    setIsEdit({ id: id, status: true });
  };

  return (
    <View style={styles.container}>
      <TodoTextInput
        isModalVisible={isModalVisible}
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleClick={() => handleClick()}
        handleChangeValue={() => handleChangeValue()}
      />
      <View style={styles.flatList}>
        <FlatList
          data={todoList}
          renderItem={(item) => (
            <TodoList
              todoItem={item.item.value}
              setisModalVisible={() => setisModalVisible()}
              handleLongPress={() => handleLongPress(item.item.id)}
              handleEdit={() => handleEdit(item.item.id)}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
      <TouchableOpacity
        style={styles.addButtonView}
        onPress={() => setisModalVisible(!isModalVisible)}
      >
        <Text style={styles.addButtonViewText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 50,
    paddingHorizontal: 30,
    width: "100%",
    backgroundColor: "#a49ed1",
  },
  inputBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 2,
    width: "100%",
    height: "20%",
  },
  textInput: {
    width: "80%",
  },
  flatList: {
    width: "100%",
  },
  addButtonView: {
    position: "absolute",
    bottom: 0,
    right: 0,
    padding: 20,
    margin: 20,
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 100,
    backgroundColor: "#0D79EF",
  },
  addButtonViewText: {
    fontSize: 30,
  },
});
