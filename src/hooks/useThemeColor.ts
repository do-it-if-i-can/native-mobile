import { THEME } from "~/constants";

import { useColorScheme } from "./useColorScheme";

export const useThemeColor = (
  themeProps: { light?: string; dark?: string },
  themeName: keyof typeof THEME.light & keyof typeof THEME.dark,
) => {
  const themeColor = useColorScheme();
  const colorFromProps = themeProps[themeColor];
  return colorFromProps || THEME[themeColor][themeName];
};
