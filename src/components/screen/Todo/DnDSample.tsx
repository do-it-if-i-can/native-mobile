import type { FC } from "react";
import React, { useState } from "react";
import { Dimensions, StyleSheet } from "react-native";
import NestedDND from "react-native-nested-dnd/NestedDND";

import { TodoItem } from "~/components/model/todo/TodoItem";
import { Text } from "~/components/ui/Text";
import { View } from "~/components/ui/View";

import type { TodoScreenProps } from "./ScreenProps";

const SAMPLE_DATA = [
  {
    id: "TODAY",
    title: "今日する",
    color: "primary",
    items: [
      { id: 1, title: "React勉強", category: "TODAY" },
      { id: 2, title: "Svelte勉強", category: "TODAY" },
      { id: 3, title: "Angular勉強", category: "TODAY" },
      { id: 4, title: "Vue勉強", category: "TODAY" },
      { id: 5, title: "Next.js勉強", category: "TODAY" },
      { id: 6, title: "Remix勉強", category: "TODAY" },
    ],
  },
  {
    id: "TOMORROW",
    title: "明日する",
    color: "secondary",
    items: [
      { id: 7, title: "Python勉強", category: "TOMORROW" },
      { id: 8, title: "Go勉強", category: "TOMORROW" },
      { id: 9, title: "Java勉強", category: "TOMORROW" },
      { id: 10, title: "Ruby勉強", category: "TOMORROW" },
      { id: 11, title: "PHP勉強", category: "TOMORROW" },
      { id: 12, title: "Rust勉強", category: "TOMORROW" },
    ],
  },
  {
    id: "SOMEDAY",
    title: "今度する",
    color: "tertiary",
    items: [
      { id: 13, title: "Figma勉強", category: "SOMEDAY" },
      { id: 14, title: "Docker勉強", category: "SOMEDAY" },
      { id: 15, title: "Notion勉強", category: "SOMEDAY" },
      { id: 16, title: "Prisma勉強", category: "SOMEDAY" },
    ],
  },
] as const;

type SampleDataProps = typeof SAMPLE_DATA[number];

const RenderItem: FC<SampleDataProps["items"][number]> = (props) => {
  return (
    <View style={style.item_wrap}>
      <TodoItem status={props.category} title={props.title} />
    </View>
  );
};

const RenderGroupHeader: FC<SampleDataProps> = (props) => {
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
const keyExtractor = (props: SampleDataProps) => props.id; // keyを指定（group,data共通）

export const DnDSample: FC<TodoScreenProps> = () => {
  const [groups, setGroups] = useState(SAMPLE_DATA);

  return (
    <View style={style.container}>
      <NestedDND
        groups={groups}
        updateGroups={setGroups}
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
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 50,
    flexDirection: "column",
  },
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
