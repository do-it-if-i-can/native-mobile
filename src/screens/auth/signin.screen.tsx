import type { FC } from "react";
import React from "react";

import { LayoutErrorBoundary } from "~/components/functional/ErrorBoundary";
import type { SignInScreenProps } from "~/components/screen/SignIn";
import { SignIn } from "~/components/screen/SignIn";
import { Layout } from "~/components/ui/Layout";

export const SignInScreen: FC<SignInScreenProps> = (props) => {
  return (
    <LayoutErrorBoundary>
      <Layout safeArea="bottom-horizontal" bg="bg2" isCenter>
        <SignIn {...props} />
      </Layout>
    </LayoutErrorBoundary>
  );
};
