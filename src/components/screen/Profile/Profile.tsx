import type { FC } from "react";
import React, { useCallback, useState } from "react";
// import { toast } from 'react-hot-toast/src/core/toast';
import { StyleSheet } from "react-native";

import { Button } from "~/components/ui/Button";
import { View } from "~/components/ui/View";
import { toastKit } from "~/utils/toastKit";

import { ProfileEditModal } from "./modal";
import type { ProfileScreenProps } from "./ScreenProps";

export const Profile: FC<ProfileScreenProps> = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const onCloseModal = useCallback(() => {
    setModalVisible(false);
  }, []);

  const onOpenModal = useCallback(() => {
    setModalVisible(true);
  }, []);

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
    <>
      <ProfileEditModal isVisible={isModalVisible} onCloseModal={onCloseModal} />

      <View style={style.container} bg="bg1">
        <Button
          label="サインアウト"
          outlineStyle={style.buttonOutline}
          viewStyle={style.buttonBg}
          textStyle={style.buttonText}
          isBorder
          onPress={onPress}
        />
        <Button
          label="モーダルOPEN"
          outlineStyle={style.buttonOutline}
          viewStyle={style.buttonBg}
          textStyle={style.buttonText}
          isBorder
          onPress={onOpenModal}
        />
      </View>
    </>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonOutline: {
    flex: 1,
    alignItems: "flex-end",
  },
  buttonBg: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  buttonText: {
    fontSize: 12,
  },
});
