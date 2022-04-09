import type { FC } from "react";
import React, { useCallback } from "react";

import { ChevronRightIcon } from "~/components/ui/Icon";
import { SectionList } from "~/components/ui/SectionList";
import type { SectionListDataType } from "~/components/ui/SectionList/SectionList";

import type { SettingScreenProps } from ".";

export const Setting: FC<SettingScreenProps> = (props) => {
  const SECTION_LIST_DATA: SectionListDataType = [
    {
      id: "setting",
      sectionLabel: "設定",
      list: [
        {
          id: "profile",
          type: "button",
          leftLabel: "プロフィール",
          onPress: useCallback(() => props.navigation.navigate("ProfileScreen"), [props.navigation]),
          rightComponent: <ChevronRightIcon />,
        },
        {
          id: "account",
          type: "button",
          leftLabel: "アカウント",
          onPress: useCallback(() => props.navigation.navigate("AccountScreen"), [props.navigation]),
          rightComponent: <ChevronRightIcon />,
        },
        {
          id: "theme",
          type: "button",
          leftLabel: "テーマ",
          onPress: useCallback(() => props.navigation.navigate("ThemeScreen"), [props.navigation]),
          rightComponent: <ChevronRightIcon />,
        },
      ],
    },
    {
      id: "support",
      sectionLabel: "サポート",
      list: [
        {
          id: "privacy",
          type: "button",
          leftLabel: "プライバシーポリシー",
          onPress: useCallback(() => props.navigation.navigate("ProfileScreen"), [props.navigation]),
          rightComponent: <ChevronRightIcon />,
        },
        {
          id: "terms",
          type: "button",
          leftLabel: "利用規約",
          onPress: useCallback(() => props.navigation.navigate("ProfileScreen"), [props.navigation]),
          rightComponent: <ChevronRightIcon />,
        },
        {
          id: "contact",
          type: "button",
          leftLabel: "お問い合わせ",
          onPress: useCallback(() => props.navigation.navigate("ProfileScreen"), [props.navigation]),
          rightComponent: <ChevronRightIcon />,
        },
      ],
    },
  ];

  return <SectionList data={SECTION_LIST_DATA} />;
};
