import type { FC } from "react";
import React from "react";

import { LayoutErrorBoundary } from "~/components/functional/Error";
import { SafeAreaLayout } from "~/components/ui/Layout";

import type { ThemeScreenProps } from "./ScreenProps";
import { Theme } from "./Theme";

export const ThemeScreen: FC<ThemeScreenProps> = (props) => {
  return (
    <LayoutErrorBoundary>
      <SafeAreaLayout>
        <Theme {...props} />
      </SafeAreaLayout>
    </LayoutErrorBoundary>
  );
};
