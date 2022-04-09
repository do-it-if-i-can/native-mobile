import type { FC, ReactNode } from "react";
import React from "react";
import { StyleSheet } from "react-native";

import { List } from "~/components/ui/List";
import { View } from "~/components/ui/View";

export type SettingListProps = {
  type?: "button";
  children: ReactNode;
  onPress?: () => void;
};

export const SettingListItem: FC<SettingListProps> = ({ type, children, onPress }) => {
  if (type === "button") {
    return (
      <List viewStyle={style.list} onPress={onPress}>
        {children}
      </List>
    );
  }

  return <View style={style.list}>{children}</View>;
};

const style = StyleSheet.create({
  list: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: "4%",
    paddingHorizontal: "4%",
  },
});
