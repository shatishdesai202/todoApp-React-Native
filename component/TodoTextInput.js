import React from "react";
import { Button, TextInput, StyleSheet, Modal, View } from "react-native";

const TodoTextInput = ({
  handleClick,
  setInputValue,
  inputValue,
  isModalVisible,
  setisModalVisible,
}) => {
  return (
    <Modal
      presentationStyle="pageSheet"
      visible={isModalVisible}
      animationType="slide"
    >
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter You task here"
          onChangeText={(enteredValue) => setInputValue(enteredValue)}
          value={inputValue}
        />
        <Button title="Hit me!" onPress={() => handleClick()} />
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: "row",
  },
  textInput: {
    width: "80%",
    height: 30,
  },
});

export default TodoTextInput;
