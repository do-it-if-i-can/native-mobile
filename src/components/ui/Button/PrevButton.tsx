import { MaterialIcons } from "@expo/vector-icons";
import type { VFC } from "react";
import React, { useCallback } from "react";
import { StyleSheet } from "react-native";

import { BounceableView } from "~/components/ui/View";
import { useThemeColor } from "~/hooks/useThemeColor";
import type { RootStackParamList, StackScreenProps } from "~/types";

type PrevProps = StackScreenProps<keyof RootStackParamList> & {
  screen: "TodoScreen";
};

export const PrevButton: VFC<PrevProps> = (props) => {
  const icon = useThemeColor({}, "icon2");

  const onPrevScreen = useCallback(() => {
    props.navigation.navigate(props.screen);
  }, [props.navigation, props.screen]);

  return (
    <BounceableView viewStyle={[defaultStyle.button]} activeScale={0.9} onPress={onPrevScreen}>
      <MaterialIcons name="keyboard-arrow-left" size={40} color={icon} />
    </BounceableView>
  );
};

const defaultStyle = StyleSheet.create({
  button: {
    width: "auto",
  },
});
