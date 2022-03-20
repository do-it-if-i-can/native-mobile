import type { FC } from "react";
import React from "react";

import { LayoutErrorBoundary } from "~/components/functional/ErrorBoundary";
import type { AccountScreenProps } from "~/components/screen/Account";
import { Account } from "~/components/screen/Account";
import { Layout } from "~/components/ui/Layout";

export const AccountScreen: FC<AccountScreenProps> = (props) => {
  return (
    <LayoutErrorBoundary>
      <Layout safeArea="bottom-horizontal">
        <Account {...props} />
      </Layout>
    </LayoutErrorBoundary>
  );
};
