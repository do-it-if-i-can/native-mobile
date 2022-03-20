import type { FC } from "react";
import React from "react";
// import { toast } from 'react-hot-toast/src/core/toast';
import { StyleSheet } from "react-native";

import { Button } from "~/components/ui/Button";
import { Text } from "~/components/ui/Text";
import { View } from "~/components/ui/View";
import { toastKit } from "~/utils/toastKit";

import type { ThemeScreenProps } from ".";

export const Theme: FC<ThemeScreenProps> = (props) => {
  const onNavigateSetting = () => {
    props.navigation.goBack();
  };

  const onPress = async () => {
    const { errorToast, successToast } = toastKit();
    // delay 1s
    await new Promise((resolve) => setTimeout(resolve, 2000));
    errorToast();

    await new Promise((resolve) => setTimeout(resolve, 2000));
    successToast("成功しました");
  };

  // const onPressPromise = async () => {
  //   const myPromise = new Promise((resolve) => setTimeout(resolve, 2000));
  //   toast.promise(
  //     myPromise,
  //     {
  //       loading: 'Loading',
  //       error: 'Error when fetching',
  //       success: 'Got the data',
  //     },
  //     {
  //       style: {
  //         minWidth: '250px',
  //       },
  //       loading: {
  //         duration: 3000,
  //         icon: '🔥',
  //       },
  //       error: {
  //         duration: 3000,
  //         icon: '🔥',
  //       },
  //       success: {
  //         duration: 3000,
  //         icon: '🔥',
  //       },
  //     },
  //   );
  // };

  return (
    <View style={style.container}>
      <Text style={style.title}>テーマ</Text>
      <Button label="react-hot-toast" bg="danger" color="white" onPress={onPress} />
      <Button label="go back" isBorder onPress={onNavigateSetting} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: "3%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "5%",
  },
});
