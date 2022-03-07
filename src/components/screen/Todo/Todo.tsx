import type { FC } from "react";
import React from "react";
import { Button, StyleSheet } from "react-native";

import { TodoAddButton } from "~/components/model/todo/TodoAddButton";
import { TodoItem } from "~/components/model/todo/TodoItem";
import { Text } from "~/components/ui/Text";
import { View } from "~/components/ui/View";

import type { TodoScreenProps } from "./ScreenProps";

export const Todo: FC<TodoScreenProps> = ({ navigation }) => {
  const onPushSetting = () => {
    navigation.navigate("SettingNavigator");
  };

  return (
    <View style={style.container}>
      <Text style={style.message}>サンプルコード</Text>
      <Text style={style.hint}>⌘ + Shift + Aでテーマ切り替え</Text>
      <Button title="push setting modal" onPress={onPushSetting} />

      <Text style={style.status_label} color="primary">
        今日する
      </Text>
      <TodoAddButton />
      <TodoItem status="TODAY" title="React勉強（編集中）" isEdit />
      <TodoItem status="TODAY" title="React勉強" />

      <Text style={style.status_label} color="secondary">
        明日する
      </Text>
      <TodoAddButton />
      <TodoItem status="TOMORROW" title="React勉強" />
      <TodoItem status="TOMORROW" title="React勉強" />
      <TodoItem status="TOMORROW" title="React勉強" />

      <Text style={style.status_label} color="tertiary">
        今度する
      </Text>
      <TodoAddButton />
      <TodoItem status="SOMEDAY" title="React勉強" />
      <TodoItem status="SOMEDAY" title="React勉強" />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    padding: "3%",
  },
  //
  message: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "600",
    marginBottom: "3%",
  },
  hint: {
    textAlign: "center",
    marginBottom: "5%",
  },

  status_label: {
    fontSize: 24,
    fontWeight: "600",
    marginVertical: "4%",
    paddingLeft: "2%",
  },
});
