export type ModalProps = {
  isVisible: boolean;
  onCloseModal: () => void;
  onModalAction: () => void;
  isDelete?: true;
};
