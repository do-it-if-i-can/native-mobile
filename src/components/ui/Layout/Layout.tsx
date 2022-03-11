import type { FC, ReactNode } from "react";
import React, { useMemo } from "react";
import { StyleSheet } from "react-native";

import { SafeAreaView } from "~/components/ui/View";
import type { CustomViewStyleProps } from "~/types/style";

type LayoutProps = CustomViewStyleProps & {
  children: ReactNode;
  isCenter?: true;
  safeArea?: "top-horizontal" | "bottom-horizontal" | "horizontal";
};

type Edges = ("top" | "bottom" | "left" | "right")[];

export const Layout: FC<LayoutProps> = ({
  // theme
  bg = "bg1",
  lightBg,
  darkBg,
  // LayoutProps
  isCenter = false,
  safeArea,
  children,
}) => {
  const edges: Edges = useMemo(() => {
    switch (safeArea) {
      case "top-horizontal":
        return ["top", "left", "right"];
      case "bottom-horizontal":
        return ["bottom", "left", "right"];
      case "horizontal":
        return ["left", "right"];
      default:
        return ["top", "bottom", "left", "right"];
    }
  }, [safeArea]);

  return (
    <SafeAreaView {...{ edges, bg, lightBg, darkBg }} style={[isCenter && style.center]}>
      {children}
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
});
