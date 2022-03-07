import type { FC } from "react";
import React, { useCallback, useState } from "react";
import { StyleSheet } from "react-native";

import { Button } from "~/components/ui/Button";
import { Text } from "~/components/ui/Text";
import { View } from "~/components/ui/View";

import { HalfModal } from "../Setting/modal";
import type { SettingScreenProps } from "./ScreenProps";

export const Setting: FC<SettingScreenProps> = ({ navigation }) => {
  const [isHalfModalVisible, setHalfModalVisible] = useState(false);

  const onCloseHalfModal = useCallback(() => {
    setHalfModalVisible(false);
  }, []);
  const onOpenHalfModal = useCallback(() => {
    setHalfModalVisible(true);
  }, []);

  const onCloseModal = () => {
    navigation.navigate("TodoScreen");
  };

  const onPushAccountScreen = () => {
    navigation.navigate("AccountScreen");
  };

  const onPushProfileScreen = () => {
    navigation.navigate("ProfileScreen");
  };

  const onPushThemeScreen = () => {
    navigation.navigate("ThemeScreen");
  };

  return (
    <>
      <View style={style.container}>
        <Text style={style.title}>アカウント</Text>
        <Button label="profile screen navigate" bg="accent" color="white" onPress={onPushProfileScreen} />
        <Button label="account screen navigate" bg="accent" color="white" onPress={onPushAccountScreen} />
        <Button label="theme screen navigate" bg="accent" color="white" onPress={onPushThemeScreen} />
        <Button label="half modal open" bg="danger" color="white" onPress={onOpenHalfModal} />
        <Button label="modal close" isBorder onPress={onCloseModal} />
      </View>

      <HalfModal isVisible={isHalfModalVisible} onCloseModal={onCloseHalfModal} />
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
