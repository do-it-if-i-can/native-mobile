import type { FC } from "react";
import React, { memo, useMemo, useRef, useState } from "react";
import { StyleSheet } from "react-native";

import { Radio } from "~/components/ui/Radio";
import { Text } from "~/components/ui/Text";
import { View } from "~/components/ui/View";

type Props = {
  status: "TODAY" | "TOMORROW" | "SOMEDAY";
  title: string;
  isEdit?: true;
};

export const TodoItem: FC<Props> = memo(({ status, title, isEdit }) => {
  const ref = useRef(null);
  const [radio, onChangeValue] = useState(false);

  const onPress = () => {
    onChangeValue((prev) => !prev);
  };

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
    <View style={style.container} bg={isEdit ? "edit" : "bg0"}>
      <Radio bg={RadioTheme} activeValue={radio} value={true} onChangeValue={onChangeValue} />
      <Text
        ref={ref}
        // eslint-disable-next-line react-native/no-inline-styles
        style={[style.todo_text, radio ? { textDecorationLine: "line-through" } : null]}
        color={radio ? "color2" : "color1"}
        onPress={onPress}
      >
        {title}
      </Text>
    </View>
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
