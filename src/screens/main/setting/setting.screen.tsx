import type { FC } from "react";
import React from "react";

import { LayoutErrorBoundary } from "~/components/functional/ErrorBoundary";
import type { SettingScreenProps } from "~/components/screen/Setting";
import { Setting } from "~/components/screen/Setting";
import { Layout } from "~/components/ui/Layout";

export const SettingScreen: FC<SettingScreenProps> = (props) => {
  return (
    <LayoutErrorBoundary>
      <Layout safeArea="bottom-horizontal">
        <Setting {...props} />
      </Layout>
    </LayoutErrorBoundary>
  );
};
