import type { FC } from "react";
import React from "react";

import { LayoutErrorBoundary } from "~/components/functional/Error";
import { Layout } from "~/components/ui/Layout";

import { Account } from "./Account";
import type { AccountScreenProps } from "./ScreenProps";

export const AccountScreen: FC<AccountScreenProps> = (props) => {
  return (
    <LayoutErrorBoundary>
      <Layout safeArea="bottom-horizontal">
        <Account {...props} />
      </Layout>
    </LayoutErrorBoundary>
  );
};
