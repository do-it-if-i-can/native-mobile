import type { FC } from "react";
import React from "react";

import { LayoutErrorBoundary } from "~/components/functional/ErrorBoundary";
import type { ProfileScreenProps } from "~/components/screen/Profile";
import { Profile } from "~/components/screen/Profile";
import { Layout } from "~/components/ui/Layout";

export const ProfileScreen: FC<ProfileScreenProps> = (props) => {
  return (
    <LayoutErrorBoundary>
      <Layout safeArea="bottom-horizontal">
        <Profile {...props} />
      </Layout>
    </LayoutErrorBoundary>
  );
};
