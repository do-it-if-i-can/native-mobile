import type { FC } from "react";
import React, { memo, useCallback, useMemo } from "react";
import { StyleSheet } from "react-native";
import { useRecoilState, useSetRecoilState } from "recoil";

import { Radio } from "~/components/ui/Radio";
import { Text } from "~/components/ui/Text";
import { View } from "~/components/ui/View";
import { editTodoState } from "~/stores/editTodoState";
import { todoListState } from "~/stores/todoListState";

type Props = {
  id: number;
  status: "TODAY" | "TOMORROW" | "SOMEDAY";
  title: string;
  isEdit?: true;
  isDone: boolean;
};

export const TodoItem: FC<Props> = memo((props) => {
  const RadioTheme = useMemo(() => {
    switch (props.status) {
      case "TODAY":
        return "primary";
      case "TOMORROW":
        return "secondary";
      case "SOMEDAY":
        return "tertiary";
    }
  }, [props.status]);

  const [editTodo, setEditTodo] = useRecoilState(editTodoState);
  const setTodoList = useSetRecoilState(todoListState);

  const onTodoDone = useCallback(() => {
    setTodoList((prevState) => {
      const newState = [...prevState];
      const index = newState.findIndex((item) => item.id === props.status);
      newState[index] = {
        ...newState[index],
        items: newState[index].items.map((item) => (item.id === props.id ? { ...item, done: !item.done } : item)),
      };
      return newState;
    });
  }, [props.id, props.status]);

  const onTodoEdit = useCallback(() => {
    setEditTodo({
      isFocused: true,
      id: props.id,
      value: props.title,
      category: props.status,
    });
  }, []);

  return (
    <View style={style.container} bg={editTodo.id === props.id ? "edit" : "bg0"}>
      <Radio bg={RadioTheme} activeValue={props.isDone} value={true} onChangeValue={onTodoDone} />
      <Text
        // eslint-disable-next-line react-native/no-inline-styles
        style={[style.todo_text, props.isDone ? { textDecorationLine: "line-through" } : null]}
        color={props.isDone ? "color2" : "color1"}
        onPress={onTodoEdit}
      >
        {props.title}
      </Text>
    </View>
  );
});

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: "2%",
    paddingHorizontal: "2%",
  },
  todo_text: {
    marginLeft: "3%",
    fontSize: 18,
  },
});
