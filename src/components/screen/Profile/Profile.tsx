import { launchImageLibraryAsync, MediaTypeOptions, requestMediaLibraryPermissionsAsync } from "expo-image-picker";
import type { FC } from "react";
import React, { useCallback, useState } from "react";
import { Alert, Platform, StyleSheet } from "react-native";

import { Button } from "~/components/ui/Button";
import { Image } from "~/components/ui/Image";
import { Text } from "~/components/ui/Text";
import { TextInput } from "~/components/ui/TextInput";
import { View } from "~/components/ui/View";
import type { SettingScreenProps as Props } from "~/types";

export type ProfileScreenProps = Props<"ProfileScreen">;

export const Profile: FC<ProfileScreenProps> = () => {
  const [image, setImage] = useState<string | null>(null);

  const onPickImage = useCallback(async () => {
    if (Platform.OS !== "web") {
      const { status } = await requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("写真へのアクセスを許可してください");
        return;
      }
    }

    const result = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  }, []);

  return (
    <View style={style.container}>
      <Text style={style.label} color="color2">
        アイコン
      </Text>
      <View style={style.align_horizontal}>
        <View bg="bg2" style={style.user_icon_box}>
          <Image
            source={image ? { uri: image } : require("assets/images/ultimate_gorilla.png")}
            style={style.user_icon}
          />
        </View>

        <Button
          label="変更する"
          outlineStyle={style.change_button_outline}
          viewStyle={style.change_button_bg}
          textStyle={style.change_button_text}
          bg="bg2"
          onPress={onPickImage}
        />
      </View>

      <Text style={style.label} color="color2">
        名前
      </Text>
      <TextInput />

      <Button label="保存する" bg="accent" color="white" outlineStyle={style.button_outline} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    padding: "6%",
  },
  align_horizontal: {
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    marginTop: 10,
    fontWeight: "600",
    lineHeight: 32,
  },
  user_icon_box: {
    width: "auto",
    padding: 10,
  },
  user_icon: {
    width: 100,
    height: 100,
    borderRadius: 999,
  },
  change_button_outline: {
    width: "30%",
    marginTop: "5%",
    marginLeft: "10%",
  },
  change_button_bg: {
    paddingVertical: 12,
  },
  change_button_text: {
    fontSize: 15,
  },
  button_outline: {
    marginTop: "10%",
  },
});
