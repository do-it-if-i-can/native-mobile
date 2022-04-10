import { useNavigation } from "@react-navigation/native";
import type { FC } from "react";
import React, { useCallback } from "react";

import { ChevronLeftIcon, XIcon } from "~/components/ui/Icon";

import { IconButton } from "./IconButton";

type Props = {
  type: "back" | "close";
  onPress?: () => void;
};

export const HeaderLeftButton: FC<Props> = ({ type, onPress }) => {
  const navigation = useNavigation();

  const onGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <IconButton onPress={onPress || onGoBack}>
      {type === "back" ? <ChevronLeftIcon icon="icon2" /> : <XIcon icon="icon2" />}
    </IconButton>
  );
};
