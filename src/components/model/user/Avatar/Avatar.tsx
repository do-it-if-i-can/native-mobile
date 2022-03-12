import type { FC } from "react";
import React from "react";
import { Image, StyleSheet } from "react-native";
import { useRecoilValue } from "recoil";

import { DummyAvatar } from "~/components/ui/DummyAvatar";
import { TouchableOpacity } from "~/components/ui/View";
import { user } from "~/stores/user";

type Props = {
  onPress?: () => void;
};

export const Avatar: FC<Props> = ({ onPress }) => {
  const authSession = useRecoilValue(user);

  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
      {authSession?.user ? (
        <Image source={{ uri: authSession.user.avatar }} style={style.avatar} />
      ) : (
        <DummyAvatar size={40} />
      )}
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 999,
  },
});
