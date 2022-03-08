import type { FC } from "react";
import React, { memo, useCallback } from "react";
import { Alert, StyleSheet } from "react-native";

import { Text } from "~/components/ui/Text";
import { TouchableOpacity } from "~/components/ui/View";

type Props = {
  id: number;
};

export const SwipableButton: FC<Props> = memo(({ id }) => {
  const onPress = useCallback(() => {
    Alert.alert("削除しますか？（開発用）", "", [
      { text: "キャンセル" },
      { text: "削除", onPress: () => console.info("削除する", id) },
    ]);
  }, [id]);

  return (
    <TouchableOpacity activeOpacity={0.6} bg="danger" style={style.bg} onPress={onPress}>
      <Text color="white" style={style.label}>
        削除
      </Text>
    </TouchableOpacity>
  );
});

const style = StyleSheet.create({
  bg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 16,
    textAlign: "center",
  },
});
