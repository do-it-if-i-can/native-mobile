import type { FC } from "react";
import React from "react";
import { useRecoilState } from "recoil";

import { CheckIcon } from "~/components/ui/Icon";
import { SectionList } from "~/components/ui/SectionList";
import type { SectionListDataType } from "~/components/ui/SectionList/SectionList";
import { theme } from "~/stores/theme";
import { deleteSecureStore, saveSecureStore } from "~/utils/secureStore";

import type { ThemeScreenProps } from ".";

const theme_key = "qin_todo_theme_vfauih87oa";

type Theme = null | "light" | "dark";

const IsCheckedIcon = (label: Theme, resolvedTheme: Theme) => {
  if (resolvedTheme === label) {
    return <CheckIcon icon="accent" />;
  }
};

export const Theme: FC<ThemeScreenProps> = () => {
  const [themeInfo, setThemeInfo] = useRecoilState(theme);

  const SECTION_LIST_DATA: SectionListDataType = [
    {
      id: "setting",
      list: [
        {
          id: "os",
          type: "button",
          leftLabel: "端末の設定に合わせる",
          rightComponent: IsCheckedIcon(null, themeInfo),
          onPress: async () => {
            await deleteSecureStore(theme_key);
            setThemeInfo(null);
          },
        },
        {
          id: "light",
          type: "button",
          leftLabel: "ライト",
          rightComponent: IsCheckedIcon("light", themeInfo),
          onPress: async () => {
            await saveSecureStore(theme_key, "light");
            setThemeInfo("light");
          },
        },
        {
          id: "dark",
          type: "button",
          leftLabel: "ダーク",
          rightComponent: IsCheckedIcon("dark", themeInfo),
          onPress: async () => {
            await saveSecureStore(theme_key, "dark");
            setThemeInfo("dark");
          },
        },
      ],
    },
  ];

  return <SectionList data={SECTION_LIST_DATA} />;
};
