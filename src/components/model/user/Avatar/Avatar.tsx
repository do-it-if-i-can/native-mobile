import type { FC } from "react";
import React from "react";
import { Image, StyleSheet } from "react-native";
import { useRecoilValue } from "recoil";

import { IconButton } from "~/components/ui/Button";
import { DummyAvatar } from "~/components/ui/DummyAvatar";
import { user } from "~/stores/user";

type Props = {
  onPress?: () => void;
};

export const Avatar: FC<Props> = (props) => {
  const authSession = useRecoilValue(user);

  return (
    <IconButton onPress={props.onPress}>
      {authSession?.user ? (
        <Image source={{ uri: authSession.user.avatar }} style={style.avatar} />
      ) : (
        <DummyAvatar size={40} />
      )}
    </IconButton>
  );
};

const style = StyleSheet.create({
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 999,
  },
});
