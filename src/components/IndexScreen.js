import React, { useContext, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTrashCan, faPen } from "@fortawesome/free-solid-svg-icons";
import { BlogContext } from "./BlogContext";

const IndexScreen = ({}) => {
  const { todoList, addTodo, RemoveTodo } = useContext(BlogContext);
  const [myValue, setValue] = useState("");

  const onSubmitTodo = (report) => {
    addTodo(report);
    setValue("");
    console.log(report);
  };

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30,
      }}
    >
      <Text style={{ fontSize: 20 }}>My TodoList Today !</Text>

      <TextInput
        value={myValue}
        placeholder="Enter new post"
        style={{
          padding: 15,
          margin: 15,
          marginBottom: 20,
          borderRadius: 10,
          backgroundColor: "#735a27",
          color: "#fff",
        }}
        onChangeText={(x) => setValue(x)}
        onSubmitEditing={() => onSubmitTodo(myValue)}
      />
      <FontAwesomeIcon icon={faTrashCan} />

      <View
        style={{
          justifyContent: "center",
          backgroundColor: "#DCD8D3",
          width: "80%",
          height: "80%",
          borderRadius: 10,
        }}
      >
        <FlatList
          data={todoList}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  marginTop: 15,
                  margin: 10,
                  padding: 10,
                  backgroundColor: "grey",
                  borderRadius: 10,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text>{item.title}</Text>
                <TouchableOpacity
                  onPress={() => {
                    RemoveTodo(item.id);
                  }}
                >
                  <FontAwesomeIcon icon={faTrashCan} />
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default IndexScreen;
