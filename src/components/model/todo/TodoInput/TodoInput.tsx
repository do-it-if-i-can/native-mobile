import type { FC } from "react";
import React, { memo, useCallback, useRef, useState } from "react";
import { StyleSheet } from "react-native";

import { Button } from "~/components/ui/Button";
import { PlusIcon } from "~/components/ui/Icon";
import { TextInput } from "~/components/ui/TextInput";
import { View } from "~/components/ui/View";
import { useThemeColor } from "~/hooks/useThemeColor";

export const TodoInput: FC = memo(() => {
  const inputRef = useRef(null);
  const shadowColor = useThemeColor({}, "color1");

  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const onChangeText = useCallback((text) => setValue(text), []);
  const onFocus = useCallback(() => setIsFocused(true), []);
  const onBlur = useCallback(() => setIsFocused(false), []);

  return (
    <View style={[style.input_accessory_area, { shadowColor }]} bg="bg1">
      <TextInput
        ref={inputRef}
        value={value}
        onChangeText={onChangeText}
        isFocused={isFocused}
        viewStyle={style.input_bg}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder="タスクを入力する"
      />

      {isFocused || value ? (
        <View style={style.flex_row} bg="bg1">
          <Button
            leftIcon={<PlusIcon size={20} />}
            label="今日する"
            outlineStyle={style.button_outline}
            viewStyle={style.button_bg}
            textStyle={style.button_text}
            bg="primary"
            color="white"
          />
          <Button
            leftIcon={<PlusIcon size={20} />}
            label="明日する"
            outlineStyle={style.button_outline}
            viewStyle={style.button_bg}
            textStyle={style.button_text}
            bg="secondary"
            color="white"
          />
          <Button
            leftIcon={<PlusIcon size={20} />}
            label="今度する"
            outlineStyle={style.button_outline}
            viewStyle={style.button_bg}
            textStyle={style.button_text}
            bg="tertiary"
            color="white"
          />
        </View>
      ) : null}
    </View>
  );
});

const style = StyleSheet.create({
  input_accessory_area: {
    paddingTop: "3%",

    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.05,
    elevation: 1,
  },
  input_bg: {
    width: "96%",
    marginHorizontal: "2%",
    marginBottom: "3%",
  },
  flex_row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: "3%",
    paddingBottom: "3%",
  },
  button_outline: {
    width: "32%",
  },
  button_bg: {
    paddingVertical: 10,
  },
  button_text: {
    fontSize: 14,
    width: "auto",
    marginLeft: "4%",
  },
});
