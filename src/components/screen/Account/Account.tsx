import type { FC } from "react";
import React, { useCallback, useState } from "react";
import { StyleSheet } from "react-native";

import { ActionCheckModal } from "~/components/screen/Account/ActionCheckModal";
import { Button, IconButton } from "~/components/ui/Button";
import { Apple, Google } from "~/components/ui/Icon";
import type { SectionListDataType } from "~/components/ui/SectionList/SectionList";
import { SectionList } from "~/components/ui/SectionList/SectionList";
import { Text } from "~/components/ui/Text";
import { useAuth0 } from "~/hooks/useAuth0";

import type { AccountScreenProps } from ".";

export const Account: FC<AccountScreenProps> = () => {
  return <SectionList data={SECTION_LIST_DATA} />;
};

const style = StyleSheet.create({
  button_outline: {
    width: "50%",
  },
  button_bg: {
    paddingVertical: 10,
  },
  button_text: {
    fontSize: 14,
  },
});

const LogoutButton: FC = () => {
  const { onSignOut } = useAuth0();
  const [isVisible, setIsVisible] = useState(false);
  const onModalVisible = useCallback(() => setIsVisible((prev) => !prev), []);

  return (
    <>
      <IconButton onPress={onModalVisible}>
        <Text color="danger" style={{ fontWeight: "600", fontSize: 16 }}>
          ログアウト
        </Text>
      </IconButton>

      <ActionCheckModal isVisible={isVisible} onCloseModal={onModalVisible} onModalAction={onSignOut} />
    </>
  );
};

const DeleteAccountButton: FC = () => {
  const { onSignOut } = useAuth0();
  const [isVisible, setIsVisible] = useState(false);
  const onModalVisible = useCallback(() => setIsVisible((prev) => !prev), []);

  return (
    <>
      <IconButton onPress={onModalVisible}>
        <Text color="danger" style={{ fontWeight: "600", fontSize: 16 }}>
          アカウントの削除
        </Text>
      </IconButton>

      <ActionCheckModal isDelete isVisible={isVisible} onCloseModal={onModalVisible} onModalAction={onSignOut} />
    </>
  );
};

const SECTION_LIST_DATA: SectionListDataType = [
  {
    id: "setting",
    sectionLabel: "アカウントの連携",
    list: [
      {
        id: "profile",
        leftLabel: "Google",
        leftComponent: <Google size={28} />,
        rightComponent: (
          <Button
            label="解除する"
            bg="bg2"
            outlineStyle={style.button_outline}
            viewStyle={style.button_bg}
            textStyle={style.button_text}
          />
        ),
      },
      {
        id: "account",
        leftLabel: "Apple",
        leftComponent: <Apple size={28} />,
        rightComponent: (
          <Button
            label="連携する"
            bg="accent"
            color="white"
            outlineStyle={style.button_outline}
            viewStyle={style.button_bg}
            textStyle={style.button_text}
          />
        ),
      },
    ],
  },
  {
    id: "support",
    sectionLabel: "アカウントの操作",
    list: [
      {
        id: "privacy",
        leftComponent: <LogoutButton />,
      },
      {
        id: "terms",
        leftComponent: <DeleteAccountButton />,
      },
    ],
  },
];
