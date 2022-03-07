import type { FlexStyle, StyleProp, TextStyle, TransformsStyle, ViewStyle } from "react-native";

import type { BgTheme, BorderTheme, ColorTheme, CommonTheme, IconTheme } from "~/styles/theme";

type OutlineStyle = Pick<ViewStyle, keyof FlexStyle | keyof TransformsStyle>;

export type StyleProps = {
  textStyle?: StyleProp<TextStyle>;
  viewStyle?: StyleProp<ViewStyle>;
  outlineStyle?: StyleProp<OutlineStyle>;

  color?: CommonTheme | ColorTheme;
  lightColor?: string;
  darkColor?: string;

  bg?: CommonTheme | BgTheme;
  lightBg?: string;
  darkBg?: string;

  icon?: CommonTheme | IconTheme;
  lightIcon?: string;
  darkIcon?: string;

  border?: CommonTheme | BorderTheme;
  lightBorder?: string;
  darkBorder?: string;
};

export type ColorThemeProps = Pick<StyleProps, "color" | "lightColor" | "darkColor">;

export type BgThemeProps = Pick<StyleProps, "bg" | "lightBg" | "darkBg">;

export type IconThemeProps = Pick<StyleProps, "icon" | "lightIcon" | "darkIcon">;

export type borderThemeProps = Pick<StyleProps, "border" | "lightBorder" | "darkBorder">;

export type CustomViewStyleProps = Pick<StyleProps, "viewStyle" | "bg" | "lightBg" | "darkBg">;

export type TextInputStyleProps = Omit<StyleProps, "outlineStyle">;
