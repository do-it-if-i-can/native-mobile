import type { FC } from "react";
import React from "react";

import { LayoutErrorBoundary } from "~/components/functional/ErrorBoundary";
import type { ThemeScreenProps } from "~/components/screen/Theme";
import { Theme } from "~/components/screen/Theme";
import { Layout } from "~/components/ui/Layout";

export const ThemeScreen: FC<ThemeScreenProps> = (props) => {
  return (
    <LayoutErrorBoundary>
      <Layout safeArea="bottom-horizontal">
        <Theme {...props} />
      </Layout>
    </LayoutErrorBoundary>
  );
};
