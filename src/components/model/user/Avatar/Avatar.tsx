import type { FC } from "react";
import React from "react";
import type { ImageSourcePropType } from "react-native";
import { Image } from "react-native";

import { DummyAvatar } from "~/components/ui/DummyAvatar";
import { TouchableOpacity } from "~/components/ui/View";

type Props = {
  source?: ImageSourcePropType;
  onPress?: () => void;
};

export const Avatar: FC<Props> = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
      {props.source ? <Image source={props.source} /> : <DummyAvatar size={40} />}
    </TouchableOpacity>
  );
};
