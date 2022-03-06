import type { FC } from "react";
import React from "react";

import { Modal } from "~/components/ui/Modal";

import { ActionCheck } from "./ActionCheck";
import type { ModalProps } from "./ModalProps";

export const ActionCheckModal: FC<ModalProps> = (props) => {
  return (
    <Modal {...props}>
      <ActionCheck {...props} />
    </Modal>
  );
};
