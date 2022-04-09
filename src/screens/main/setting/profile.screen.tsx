import type { FC } from "react";
import React from "react";

import { LayoutErrorBoundary } from "~/components/functional/ErrorBoundary";
import { KeyboardAvoiding } from "~/components/functional/KeyboardAvoiding";
import type { ProfileScreenProps } from "~/components/screen/Profile";
import { Profile } from "~/components/screen/Profile";
import { Layout } from "~/components/ui/Layout";

export const ProfileScreen: FC<ProfileScreenProps> = (props) => {
  return (
    <LayoutErrorBoundary>
      <Layout safeArea="bottom-horizontal">
        <KeyboardAvoiding>
          <Profile {...props} />
        </KeyboardAvoiding>
      </Layout>
    </LayoutErrorBoundary>
  );
};
