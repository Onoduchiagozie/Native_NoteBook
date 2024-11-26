import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTrashCan, faPen } from "@fortawesome/free-solid-svg-icons";
import { BlogContext } from "./BlogContext";

const IndexScreen = ({}) => {
  const { todoList, addTodo, RemoveTodo, renderMe } = useContext(BlogContext);

  const [myValue, setValue] = useState("");

  useEffect(() => {
    renderMe();
  }, []);

  const onSubmitTodo = (report) => {
    addTodo(report);
    setValue(" ");
  };

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30,
      }}
    >
      <Text className="font-bold" style={{ fontSize: 20 }}>
        My TodoList Today !
      </Text>

      <View
        style={{
          padding: 15,
          margin: 15,
          marginBottom: 20,
          borderRadius: 10,

          flexDirection: "row",
        }}
        className="bg-gray-700"
      >
        <TextInput
          placeholder="Enter new post"
          style={{ color: "white" }}
          value={myValue}
          onChangeText={(x) => setValue(x)}
          onSubmitEditing={() => onSubmitTodo(myValue)}
        />
        <TouchableOpacity onPress={() => onSubmitTodo(myValue)}>
          <FontAwesomeIcon
            style={{ marginLeft: 15, marginTop: 5, width: 10 }}
            icon={faPen}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          justifyContent: "center",
          backgroundColor: "#DCD8D3",
          width: "80%",
          height: "80%",
          borderRadius: 10,
        }}
        className="p-1"
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
