import type { FC } from "react";
import React, { useState } from "react";
import { StyleSheet } from "react-native";

import { Button, GoBackButton, PrevButton } from "~/components/ui/Button";
import { Radio } from "~/components/ui/Radio";
import { Text } from "~/components/ui/Text";
import { TextInput } from "~/components/ui/TextInput";
import { View } from "~/components/ui/View";

import type { TodoScreenProps } from "./ScreenProps";

export const Todo: FC<TodoScreenProps> = (props) => {
  const [radio, onChangeValue] = useState("1");

  return (
    <View style={style.container}>
      <Text style={style.message}>サンプルコード</Text>
      <Text style={style.hint}>⌘ + Shift + Aでテーマ切り替え</Text>

      <Text>default default default</Text>
      <Text color="color0">color0 color0 color0</Text>
      <Text color="color1">color1 color1 color1</Text>
      <Text color="color2">color2 color2 color2</Text>

      <TextInput />

      <GoBackButton />
      <PrevButton {...props} screen="TodoScreen" />

      {/* ここはRadioGroup的なProviderで囲って内部でactiveValueを統一させたい */}
      <Radio activeValue={radio} value="1" onChangeValue={onChangeValue} />
      <Radio activeValue={radio} value="2" onChangeValue={onChangeValue} bg="secondary" />
      <Radio activeValue={radio} value="3" onChangeValue={onChangeValue} bg="tertiary" />

      <Button label="default" />
      <Button label="bg0" bg="bg0" isBorder />
      <Button label="bg1" bg="bg1" isBorder />
      <Button label="primary" bg="primary" color="white" />
      <Button label="secondary" bg="secondary" color="white" />
      <Button label="tertiary" bg="tertiary" color="white" />
      <Button label="accent" bg="accent" color="white" />
      <Button label="danger" bg="danger" color="white" />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    padding: "6%",
  },
  message: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "600",
    marginBottom: "3%",
  },
  hint: {
    textAlign: "center",
    marginBottom: "5%",
  },
});
