import type { FC, ReactNode } from "react";
import React from "react";
import { StyleSheet } from "react-native";
import Modal from "react-native-modal";

import { View } from "~/components/ui/View";

type Props = {
  children: ReactNode;
  size?: 0.9 | 0.7 | 0.5 | 0.3;
  isVisible: boolean;
  onCloseModal: () => void;
};

export const HalfModal: FC<Props> = ({ children, size = 0.7, isVisible, onCloseModal }) => {
  return (
    <Modal
      isVisible={isVisible}
      coverScreen
      animationIn="slideInUp"
      swipeDirection={["down"]}
      propagateSwipe
      useNativeDriverForBackdrop
      onSwipeComplete={onCloseModal}
      onBackdropPress={onCloseModal}
      style={defaultStyle.modal}
    >
      <View style={[defaultStyle.content, { flex: size }]} bg="bg1">
        <View style={defaultStyle.handle_wrap}>
          <View style={defaultStyle.handle} bg="bg1" />
        </View>
        {children}
      </View>
    </Modal>
  );
};

const defaultStyle = StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: "flex-end",
  },
  content: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  handle_wrap: {
    alignItems: "center",
  },
  handle: {
    width: "25%",
    height: 8,
    borderRadius: 999,
    marginVertical: 10,
  },
});
