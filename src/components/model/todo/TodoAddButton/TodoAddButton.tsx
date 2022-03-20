import type { FC } from "react";
import React, { memo } from "react";
import { StyleSheet } from "react-native";

import { PlusCircleIcon } from "~/components/ui/Icon";
import { Text } from "~/components/ui/Text";
import { View } from "~/components/ui/View";

export const TodoAddButton: FC = memo(() => {
  return (
    <View style={style.container}>
      <PlusCircleIcon size={30} />
      <Text style={style.todo_text} color="color2">
        タスクを追加する
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
