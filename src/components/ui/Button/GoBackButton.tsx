import { useNavigation } from "@react-navigation/native";
import type { FC } from "react";
import React, { memo, useCallback } from "react";
import { StyleSheet } from "react-native";

import { ChevronLeftIcon, XIcon } from "~/components/ui/Icon";
import { BounceableView } from "~/components/ui/View";
import type { IconThemeProps } from "~/types/style";

type Props = IconThemeProps & {
  isFloating?: true;
  type?: "back" | "close";
  onPress?: () => void;
};

export const GoBackButton: FC<Props> = memo((props) => {
  const { icon = "icon1", lightIcon, darkIcon, isFloating, onPress, type = "back" } = props;
  const navigation = useNavigation();

  const onGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <BounceableView
      viewStyle={[style.button, isFloating && style.float]}
      activeScale={0.9}
      onPress={onPress || onGoBack}
    >
      {type === "back" && <ChevronLeftIcon {...{ icon, lightIcon, darkIcon }} size={28} />}
      {type === "close" && <XIcon {...{ icon, lightIcon, darkIcon }} size={28} />}
    </BounceableView>
  );
});

const style = StyleSheet.create({
  button: {
    width: "auto",
  },
  float: {
    position: "absolute",
    top: 5,
    left: "3%",
  },
});
