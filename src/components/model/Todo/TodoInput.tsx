import type { FC } from "react";
import React, { memo, useCallback, useRef, useState } from "react";
import { StyleSheet } from "react-native";

import { Button } from "~/components/ui/Button";
import { EntypoIcon } from "~/components/ui/Icon";
import { TextInput } from "~/components/ui/TextInput";
import { View } from "~/components/ui/View";
import { useThemeColor } from "~/hooks/useThemeColor";

export const TodoInput: FC = memo(() => {
  const inputRef = useRef(null);
  const shadowColor = useThemeColor({}, "color1");

  const [isFocused, setIsFocused] = useState(false);
  const onFocus = useCallback(() => setIsFocused(true), []);
  const onBlur = useCallback(() => setIsFocused(false), []);

  return (
    <View style={[style.inputAccessoryArea, { shadowColor }]} bg="bg1">
      <View style={style.inputBg}>
        <TextInput
          ref={inputRef}
          isFocused={isFocused}
          onFocus={onFocus}
          onBlur={onBlur}
          placeholder="タスクを入力する"
        />
      </View>

      {isFocused ? (
        <View style={style.flexRow} bg="bg1">
          <Button
            leftIcon={<EntypoIcon name="plus" icon="white" size={16} />}
            label="今日する"
            outlineStyle={style.buttonOutline}
            viewStyle={style.buttonBg}
            textStyle={style.buttonText}
            bg="primary"
            color="white"
          />
          <Button
            leftIcon={<EntypoIcon name="plus" icon="white" size={16} />}
            label="明日する"
            outlineStyle={style.buttonOutline}
            viewStyle={style.buttonBg}
            textStyle={style.buttonText}
            bg="secondary"
            color="white"
          />
          <Button
            leftIcon={<EntypoIcon name="plus" icon="white" size={16} />}
            label="今度する"
            outlineStyle={style.buttonOutline}
            viewStyle={style.buttonBg}
            textStyle={style.buttonText}
            bg="tertiary"
            color="white"
          />
        </View>
      ) : null}
    </View>
  );
});

const style = StyleSheet.create({
  // keyboard
  inputAccessoryArea: {
    paddingTop: "3%",

    // shadow
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.05,
    elevation: 1,
  },
  inputBg: {
    paddingBottom: "3%",
    paddingHorizontal: "3%",
  },
  flexRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: "3%",
    paddingBottom: "3%",
  },
  buttonOutline: {
    width: "32%",
  },
  buttonBg: {
    paddingVertical: 10,
  },
  buttonText: {
    fontSize: 14,
    width: "auto",
    marginLeft: "4%",
  },
});
