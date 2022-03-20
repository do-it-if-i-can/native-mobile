import type { FC } from "react";
import React from "react";

import { LayoutErrorBoundary } from "~/components/functional/ErrorBoundary";
import type { NotFoundScreenProps } from "~/components/screen/404";
import { NotFound } from "~/components/screen/404";
import { Layout } from "~/components/ui/Layout";

export const NotFoundScreen: FC<NotFoundScreenProps> = (props) => {
  return (
    <LayoutErrorBoundary>
      <Layout safeArea="bottom-horizontal">
        <NotFound {...props} />
      </Layout>
    </LayoutErrorBoundary>
  );
};
