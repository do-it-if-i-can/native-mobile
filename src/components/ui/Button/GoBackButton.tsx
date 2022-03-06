import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import type { FC } from "react";
import React, { memo, useCallback } from "react";
import { StyleSheet } from "react-native";

import { BounceableView } from "~/components/ui/View";
import { useThemeColor } from "~/hooks/useThemeColor";
import type { IconThemeProps } from "~/types/style";

type Props = IconThemeProps & {
  isFloating?: true;
};

export const GoBackButton: FC<Props> = memo(
  ({
    // 基本的に使用しない
    // custom themeで色を指定する
    lightIcon,
    darkIcon,
    // custom theme
    icon = "icon1",
    isFloating,
  }) => {
    const iconColor = useThemeColor({ light: lightIcon, dark: darkIcon }, icon);
    const navigation = useNavigation();

    const onGoBack = useCallback(() => {
      navigation.goBack();
    }, [navigation]);

    return (
      <BounceableView viewStyle={[style.button, isFloating && style.float]} activeScale={0.9} onPress={onGoBack}>
        <MaterialIcons name="keyboard-arrow-left" size={40} color={iconColor} />
      </BounceableView>
    );
  },
);

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
