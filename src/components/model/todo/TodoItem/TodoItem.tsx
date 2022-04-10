/* eslint-disable react/jsx-handler-names */
import Swipeout from "rc-swipeout";
import type { FC } from "react";
import React, { memo, useMemo, useState } from "react";
import { StyleSheet } from "react-native";

import { Radio } from "~/components/ui/Radio";
import { Text } from "~/components/ui/Text";
import { View } from "~/components/ui/View";

type Props = {
  status: "TODAY" | "TOMORROW" | "SOMEDAY";
  title: string;
  isEdit?: true;
};

export const TodoItem: FC<Props> = memo((props) => {
  const [radio, onChangeValue] = useState(false);

  const RadioTheme = useMemo(() => {
    switch (props.status) {
      case "TODAY":
        return "primary";
      case "TOMORROW":
        return "secondary";
      case "SOMEDAY":
        return "tertiary";
    }
  }, [props.status]);

  return (
    <Swipeout
      left={[
        {
          text: "reply",
          onPress: () => console.log("reply"),
          style: { backgroundColor: "orange", color: "white" },
          className: "custom-class-1",
        },
      ]}
      right={[
        {
          text: "delete",
          onPress: () => console.log("delete"),
          style: { backgroundColor: "red", color: "white" },
          className: "custom-class-2",
        },
      ]}
      onOpen={() => console.log("open")}
      onClose={() => console.log("close")}
    >
      <View style={style.container} bg={props.isEdit ? "edit" : "bg0"}>
        <Radio bg={RadioTheme} activeValue={radio} value={true} onChangeValue={onChangeValue} />
        <Text
          // eslint-disable-next-line react-native/no-inline-styles
          style={[style.todo_text, radio ? { textDecorationLine: "line-through" } : null]}
          color={radio ? "color2" : "color1"}
        >
          {props.title}
        </Text>
      </View>
    </Swipeout>
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
