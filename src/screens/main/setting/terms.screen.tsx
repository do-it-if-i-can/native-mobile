import type { FC } from "react";
import React from "react";

import { LayoutErrorBoundary } from "~/components/functional/ErrorBoundary";
import type { TermsScreenProps } from "~/components/screen/Terms";
import { Terms } from "~/components/screen/Terms";
import { Layout } from "~/components/ui/Layout";

export const TermsScreen: FC<TermsScreenProps> = (props) => {
  return (
    <LayoutErrorBoundary>
      <Layout safeArea="bottom-horizontal">
        <Terms {...props} />
      </Layout>
    </LayoutErrorBoundary>
  );
};
