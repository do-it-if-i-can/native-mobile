import type { FC } from "react";
import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import NestedDND from "react-native-nested-dnd/NestedDND";
import { useRecoilState } from "recoil";

import { TodoItem } from "~/components/model/todo/TodoItem";
import { Text } from "~/components/ui/Text";
import { View } from "~/components/ui/View";
import type { TodoState } from "~/stores/todoListState";
import { todoListState } from "~/stores/todoListState";

import type { TodoScreenProps } from ".";

const RenderItem: FC<any> = (props) => {
  return (
    <View style={style.item_wrap}>
      <TodoItem id={props.id} status={props.category} title={props.title} isDone={props.done} />
    </View>
  );
};

const RenderGroupHeader: FC<any> = (props) => {
  return (
    <View style={style.item_wrap}>
      <Text style={style.category_label} color={props.color}>
        {props.title}
      </Text>
    </View>
  );
};

const RenderHeader = () => {
  return <View style={style.bottom_space} />;
};

const headerHeight = 20;
const groupToItemsKey = "items"; // データレコードのkey
const keyExtractor = (props: TodoState) => props.id; // keyを指定（group,data共通）

export const DnDSample: FC<TodoScreenProps> = () => {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  return (
    <NestedDND
      groups={todoList}
      updateGroups={setTodoList}
      groupToItemsKey={groupToItemsKey}
      groupKeyExtractor={keyExtractor}
      itemKeyExtractor={keyExtractor}
      ghostStyle={style.ghostStyle}
      movedWrapStyle={style.movingStyle}
      renderItem={RenderItem}
      renderGroupHeader={RenderGroupHeader}
      renderBottomView={RenderHeader()}
      headerViewHeight={headerHeight}
      bottomViewHeight={headerHeight}
    />
  );
};

const style = StyleSheet.create({
  item_wrap: {
    paddingHorizontal: "3%",
    width: Dimensions.get("window").width,
  },
  category_label: {
    fontSize: 24,
    fontWeight: "600",
    marginVertical: "4%",
    paddingLeft: "2%",
  },
  ghostStyle: {
    opacity: 0.4,
  },
  movingStyle: {
    opacity: 0,
  },
  bottom_space: {
    height: 150,
  },
});
