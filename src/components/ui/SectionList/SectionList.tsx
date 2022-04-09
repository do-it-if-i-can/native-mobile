import type { FC } from "react";
import React, { Fragment } from "react";
import { StyleSheet } from "react-native";

import { Text } from "~/components/ui/Text";
import { View } from "~/components/ui/View";
import type { CommonTheme } from "~/styles/theme";

import { SettingListItem } from "./SettingListItem";

type ThemeKey = "os" | "light" | "dark";

type Common = {
  id: string;
  leftLabel?: string;
  leftComponent?: JSX.Element;
  rightLabel?: string;
  rightComponent?: JSX.Element;
  color?: CommonTheme;
};

type ButtonType = {
  type: "button";
  onPress: () => void;
};

type ViewType = {
  type?: never;
  onPress?: never;
};

export type SectionListDataType = {
  id: string;
  sectionLabel?: string;
  list: (Common & (ButtonType | ViewType))[];
}[];

type Props = {
  resolvedTheme?: ThemeKey;
  data: SectionListDataType;
};

const currentThemeCheck = (resolvedTheme?: ThemeKey) => {
  switch (resolvedTheme) {
    case "light":
      return "ライト";
    case "dark":
      return "ダーク";
    default:
      return "端末の設定に合わせる";
  }
};

export const SectionList: FC<Props> = ({ resolvedTheme, data }) => {
  const currentTheme = currentThemeCheck(resolvedTheme);

  return (
    <>
      {data.map(({ id, sectionLabel, list }) => (
        <View key={id} style={style.list}>
          {sectionLabel && (
            <Text style={style.section_label} color="color2">
              {sectionLabel}
            </Text>
          )}

          {list.map((item) => (
            <SettingListItem key={item.id} type={item.type} onPress={item.onPress}>
              <View style={style.list_item}>
                {item.leftComponent}
                <Text style={[style.list_text, item.leftComponent ? style.text_left : null]} color={item.color}>
                  {item.leftLabel}
                </Text>
              </View>

              <View style={style.list_item}>
                <Text style={[style.list_text, item.rightComponent ? style.text_right : null]} color={item.color}>
                  {item.rightLabel}
                </Text>
                {item.id === "theme" && (
                  <Text style={[style.list_text, item.rightComponent ? style.text_right : null]}>{currentTheme}</Text>
                )}
                {item.rightComponent}
              </View>
            </SettingListItem>
          ))}
        </View>
      ))}
    </>
  );
};

const style = StyleSheet.create({
  list: {
    // marginTop: "2%",
    paddingVertical: "4%",
  },
  section_label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: "2%",
    paddingHorizontal: "4%",
  },
  list_item: {
    width: "auto",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  list_text: {
    width: "auto",
    fontWeight: "600",
    fontSize: 16,
  },
  text_left: {
    marginLeft: 15,
  },
  text_right: {
    marginRight: 15,
  },
});
