import type { FC } from "react";
import React from "react";

import { LayoutErrorBoundary } from "~/components/functional/Error";
import { SafeAreaLayout } from "~/components/ui/Layout";

import type { SignInScreenProps } from "./ScreenProps";
import { SignIn } from "./SignIn";

export const SignInScreen: FC<SignInScreenProps> = (props) => {
  return (
    <LayoutErrorBoundary>
      <SafeAreaLayout bg="bg2" isCenter>
        <SignIn {...props} />
      </SafeAreaLayout>
    </LayoutErrorBoundary>
  );
};
