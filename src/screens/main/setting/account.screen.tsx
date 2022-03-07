import type { FC } from "react";
import React from "react";

import type { AccountScreenProps } from "~/components/screen/Account";
import { AccountScreen as Screen } from "~/components/screen/Account";

export const AccountScreen: FC<AccountScreenProps> = (props) => {
  return <Screen {...props} />;
};
