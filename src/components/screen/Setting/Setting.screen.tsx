import type { FC } from "react";
import React from "react";

import { LayoutErrorBoundary } from "~/components/functional/Error";
import { SafeAreaLayout } from "~/components/ui/Layout";

import type { SettingScreenProps } from "./ScreenProps";
import { Setting } from "./Setting";

export const SettingScreen: FC<SettingScreenProps> = (props) => {
  return (
    <LayoutErrorBoundary>
      <SafeAreaLayout>
        <Setting {...props} />
      </SafeAreaLayout>
    </LayoutErrorBoundary>
  );
};
