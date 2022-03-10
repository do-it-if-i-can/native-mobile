import type { FC } from "react";
import React from "react";

import { LayoutErrorBoundary } from "~/components/functional/Error";
import { Layout } from "~/components/ui/Layout";

import type { SignInScreenProps } from "./ScreenProps";
import { SignIn } from "./SignIn";

export const SignInScreen: FC<SignInScreenProps> = (props) => {
  return (
    <LayoutErrorBoundary>
      <Layout safeArea="bottom-horizontal" bg="bg2" isCenter>
        <SignIn {...props} />
      </Layout>
    </LayoutErrorBoundary>
  );
};
