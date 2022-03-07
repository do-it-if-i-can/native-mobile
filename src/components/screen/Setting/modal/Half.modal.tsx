import type { FC } from "react";
import React from "react";

import { HalfModal as Modal } from "~/components/ui/Modal";

import { Half } from "./Half";

type Props = {
  isVisible: boolean;
  onCloseModal: () => void;
};

export const HalfModal: FC<Props> = (props) => {
  return (
    <Modal {...props} size={0.5}>
      <Half />
    </Modal>
  );
};
