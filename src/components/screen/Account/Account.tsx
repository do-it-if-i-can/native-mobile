import type { FC } from "react";
import React, { useCallback, useState } from "react";
import { StyleSheet } from "react-native";

import { ActionCheckModal } from "~/components/screen/Account/modal";
import { Button } from "~/components/ui/Button";
import { Text } from "~/components/ui/Text";
import { View } from "~/components/ui/View";

import type { AccountScreenProps } from ".";

export const Account: FC<AccountScreenProps> = (props) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const onCloseModal = useCallback(() => {
    setModalVisible(false);
  }, []);

  const onPushSetting = () => {
    props.navigation.goBack();
  };

  const onOpenModal = useCallback(() => {
    setModalVisible(true);
  }, []);

  return (
    <>
      <ActionCheckModal isVisible={isModalVisible} onCloseModal={onCloseModal} />
      <View style={style.container}>
        <Text style={style.title}>アカウント設定</Text>
        <Button label="modal dialog open" bg="danger" color="white" onPress={onOpenModal} />
        <Button label="go back" isBorder onPress={onPushSetting} />
      </View>
    </>
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
