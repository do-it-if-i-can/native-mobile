import type { FC } from "react";
import React, { useCallback } from "react";
import { useRecoilValue } from "recoil";

import { ChevronRightIcon, ExternalLinkIcon } from "~/components/ui/Icon";
import { SectionList } from "~/components/ui/SectionList";
import type { SectionListDataType } from "~/components/ui/SectionList/SectionList";
import { theme } from "~/stores/theme";

import type { SettingScreenProps } from ".";

const currentThemeCheck = (resolvedTheme: null | "light" | "dark") => {
  switch (resolvedTheme) {
    case "light":
      return "ライト";
    case "dark":
      return "ダーク";
    default:
      return "端末の設定に合わせる";
  }
};

export const Setting: FC<SettingScreenProps> = (props) => {
  const themeInfo = useRecoilValue(theme);
  const currentTheme = currentThemeCheck(themeInfo);

  const SECTION_LIST_DATA: SectionListDataType = [
    {
      id: "setting",
      sectionLabel: "設定",
      list: [
        {
          id: "profile",
          type: "button",
          leftLabel: "プロフィール",
          rightComponent: <ChevronRightIcon />,
          onPress: useCallback(() => props.navigation.navigate("ProfileScreen"), [props.navigation]),
        },
        {
          id: "account",
          type: "button",
          leftLabel: "アカウント",
          rightComponent: <ChevronRightIcon />,
          onPress: useCallback(() => props.navigation.navigate("AccountScreen"), [props.navigation]),
        },
        {
          id: "theme",
          type: "button",
          leftLabel: "テーマ",
          rightLabel: currentTheme,
          rightComponent: <ChevronRightIcon />,
          onPress: useCallback(() => props.navigation.navigate("ThemeScreen"), [props.navigation]),
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
          rightComponent: <ChevronRightIcon />,
          onPress: useCallback(() => props.navigation.navigate("PrivacyScreen"), [props.navigation]),
        },
        {
          id: "terms",
          type: "button",
          leftLabel: "利用規約",
          rightComponent: <ChevronRightIcon />,
          onPress: useCallback(() => props.navigation.navigate("TermsScreen"), [props.navigation]),
        },
        {
          id: "license",
          type: "button",
          leftLabel: "オープンソースライセンス",
          rightComponent: <ExternalLinkIcon />,
          onPress: useCallback(() => props.navigation.navigate("TermsScreen"), [props.navigation]),
        },
        {
          id: "contact",
          leftLabel: "お問い合わせ",
        },
        {
          id: "version",
          leftLabel: "バージョン",
          rightLabel: "1.0.0",
        },
      ],
    },
  ];

  return <SectionList data={SECTION_LIST_DATA} />;
};
