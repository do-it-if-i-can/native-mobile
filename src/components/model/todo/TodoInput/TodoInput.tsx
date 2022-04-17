import type { FC } from "react";
import React, { memo, useCallback, useEffect, useRef } from "react";
import { StyleSheet } from "react-native";
import { useRecoilState } from "recoil";

import { Button, IconButton } from "~/components/ui/Button";
import {
  ChevronDoubleDownIcon,
  ChevronDoubleUpIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  PlusIcon,
  RefreshIcon,
  XIcon,
} from "~/components/ui/Icon";
import { TextInput } from "~/components/ui/TextInput";
import { View } from "~/components/ui/View";
import { useThemeColor } from "~/hooks/useThemeColor";
import { editTodoState } from "~/stores/editTodoState";

export type Category = "SOMEDAY" | "TODAY" | "TOMORROW";

const checkedRadioBgTheme = (category: Category | null) => {
  switch (category) {
    case "TODAY":
      return "primary";
    case "TOMORROW":
      return "secondary";
    case "SOMEDAY":
      return "tertiary";
    default:
      return "primary";
  }
};

export const TodoInput: FC = memo(() => {
  const inputRef = useRef(null);

  const [editTodoStateInfo, setEditTodoStateInfo] = useRecoilState(editTodoState);

  const shadowColor = useThemeColor({}, "color1");
  const inputFocusColor = checkedRadioBgTheme(editTodoStateInfo?.category);

  const onChangeText = useCallback(
    (text: string) =>
      setEditTodoStateInfo((prev) => {
        return { ...prev, value: text };
      }),
    [],
  );

  const onBlur = useCallback(
    () =>
      setEditTodoStateInfo((prevState) => {
        if (!prevState.value) {
          return { isFocused: false, id: null, value: "", category: null };
        }
        return { ...prevState, isFocused: false };
      }),
    [],
  );

  const onFocus = useCallback(
    () =>
      setEditTodoStateInfo((prevState) => {
        return { ...prevState, isFocused: true };
      }),
    [],
  );

  const onInputClear = useCallback(() => {
    setEditTodoStateInfo((prevState) => {
      return { ...prevState, value: "", isFocused: true };
    });
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (editTodoStateInfo.category) inputRef.current?.focus();
  }, [editTodoStateInfo.category]);

  return (
    <View style={[style.input_accessory_area, { shadowColor }]} bg="bg1">
      <View
        style={{
          position: "relative",
        }}
      >
        <TextInput
          ref={inputRef}
          value={editTodoStateInfo.value}
          onChangeText={onChangeText}
          isFocused={editTodoStateInfo.isFocused}
          viewStyle={style.input_bg}
          textStyle={{
            paddingRight: 24,
          }}
          onFocus={onFocus}
          onBlur={onBlur}
          placeholder="タスクを入力する"
          border={inputFocusColor}
        />

        {editTodoStateInfo.value ? (
          <IconButton
            style={{
              position: "absolute",
              top: 10,
              right: 18,
            }}
            onPress={onInputClear}
          >
            <XIcon />
          </IconButton>
        ) : null}
      </View>

      {editTodoStateInfo.isFocused || editTodoStateInfo.value ? (
        <View style={style.flex_row} bg="bg1">
          <Button
            leftIcon={<TodayIcon category={editTodoStateInfo.category} />}
            label="今日する"
            outlineStyle={style.button_outline}
            viewStyle={style.button_bg}
            textStyle={style.button_text}
            bg="primary"
            color="white"
          />
          <Button
            leftIcon={<TomorrowIcon category={editTodoStateInfo.category} />}
            label="明日する"
            outlineStyle={style.button_outline}
            viewStyle={style.button_bg}
            textStyle={style.button_text}
            bg="secondary"
            color="white"
          />
          <Button
            leftIcon={<SomedayIcon category={editTodoStateInfo.category} />}
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

type IconProps = {
  category: Category | null;
};

export const TodayIcon: FC<IconProps> = (props) => {
  if (props.category === "TODAY") {
    return <RefreshIcon size={20} icon="white" />;
  }
  if (props.category === "TOMORROW") {
    return <ChevronUpIcon size={20} icon="white" />;
  }
  if (props.category === "SOMEDAY") {
    return <ChevronDoubleUpIcon size={20} icon="white" />;
  }
  return <PlusIcon size={20} icon="white" />;
};

export const TomorrowIcon: FC<IconProps> = (props) => {
  if (props.category === "TODAY") {
    return <ChevronDownIcon size={20} icon="white" />;
  }
  if (props.category === "TOMORROW") {
    return <RefreshIcon size={20} icon="white" />;
  }
  if (props.category === "SOMEDAY") {
    return <ChevronUpIcon size={20} icon="white" />;
  }
  return <PlusIcon size={20} icon="white" />;
};

export const SomedayIcon: FC<IconProps> = (props) => {
  if (props.category === "TODAY") {
    return <ChevronDoubleDownIcon size={20} icon="white" />;
  }
  if (props.category === "TOMORROW") {
    return <ChevronDownIcon size={20} icon="white" />;
  }
  if (props.category === "SOMEDAY") {
    return <RefreshIcon size={20} icon="white" />;
  }
  return <PlusIcon size={20} icon="white" />;
};

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
