import type { FC } from "react";
import React, { memo, useMemo, useState } from "react";
import { StyleSheet } from "react-native";

import { Swipable } from "~/components/functional/Animation";
import { Radio } from "~/components/ui/Radio";
import { Text } from "~/components/ui/Text";
import { View } from "~/components/ui/View";

import { SwipableButton } from "./SwipableButton";

type Props = {
  id: number;
  status: "TODAY" | "TOMORROW" | "SOMEDAY";
  title: string;
  isEdit?: true;
};

export const TodoItem: FC<Props> = memo(({ id, status, title, isEdit }) => {
  const [radio, onChangeValue] = useState(false);

  const RadioTheme = useMemo(() => {
    switch (status) {
      case "TODAY":
        return "primary";
      case "TOMORROW":
        return "secondary";
      case "SOMEDAY":
        return "tertiary";
    }
  }, [status]);

  return (
    <Swipable right={[{ component: <SwipableButton id={id} /> }]}>
      <View style={style.container} bg={isEdit ? "edit" : "bg0"}>
        <Radio bg={RadioTheme} activeValue={radio} value={true} onChangeValue={onChangeValue} />
        <Text
          // eslint-disable-next-line react-native/no-inline-styles
          style={[style.todo_text, radio ? { textDecorationLine: "line-through" } : null]}
          color={radio ? "color2" : "color1"}
        >
          {title}
        </Text>
      </View>
    </Swipable>
  );
});

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: "2%",
    paddingHorizontal: "2%",
  },
  todo_text: {
    marginLeft: "3%",
    fontSize: 18,
  },
});
