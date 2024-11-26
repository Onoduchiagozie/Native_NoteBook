import React, { useContext, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTrashCan, faPen } from "@fortawesome/free-solid-svg-icons";
import { BlogContext } from "./BlogContext";
import { LinearGradient } from "expo-linear-gradient";

const IndexScreen = () => {
  const { todoList, addTodo, RemoveTodo } = useContext(BlogContext);
  const [myValue, setValue] = useState("");

  const onSubmitTodo = (report) => {
    addTodo(report);
    setValue("");
    console.log(report);
  };

  return (
    <LinearGradient colors={["white", "ash"]}>
      <View style={styles.container}>
        <Text className="font-bold" style={styles.headerText}>
          My TodoList Today!
        </Text>

        <View style={styles.inputContainer} className="bg-gray-700">
          <TextInput
            placeholder="Enter new post"
            onChangeText={(x) => setValue(x)}
            onSubmitEditing={() => onSubmitTodo(myValue)}
            style={styles.input}
            value={myValue}
          />
          <TouchableOpacity onPress={() => onSubmitTodo(myValue)}>
            <FontAwesomeIcon style={styles.icon} icon={faPen} />
          </TouchableOpacity>
        </View>

        <View style={styles.listContainer} className="p-1">
          <FlatList
            data={todoList}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.listItem}>
                <Text>{item.title}</Text>
                <TouchableOpacity onPress={() => RemoveTodo(item.id)}>
                  <FontAwesomeIcon icon={faTrashCan} />
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientBackground: {
    flex: 1,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  inputContainer: {
    padding: 15,
    margin: 15,
    marginBottom: 20,
    borderRadius: 10,
    flexDirection: "row",
    backgroundColor: "grey",
  },
  input: {
    flex: 1,
  },
  icon: {
    marginLeft: 15,
    marginTop: 5,
  },
  listContainer: {
    justifyContent: "center",
    backgroundColor: "#DCD8D3",
    width: "80%",
    height: "80%",
    borderRadius: 10,
  },
  listItem: {
    marginTop: 15,
    margin: 10,
    padding: 10,
    backgroundColor: "grey",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default IndexScreen;
