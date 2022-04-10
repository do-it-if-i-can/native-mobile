import type { FC } from "react";
import React from "react";

import { LayoutErrorBoundary } from "~/components/functional/ErrorBoundary";
import type { PrivacyScreenProps } from "~/components/screen/Privacy";
import { Privacy } from "~/components/screen/Privacy";
import { Layout } from "~/components/ui/Layout";

export const PrivacyScreen: FC<PrivacyScreenProps> = (props) => {
  return (
    <LayoutErrorBoundary>
      <Layout safeArea="horizontal">
        <Privacy {...props} />
      </Layout>
    </LayoutErrorBoundary>
  );
};
