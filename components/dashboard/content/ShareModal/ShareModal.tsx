import { Modal, useMantineTheme } from "@mantine/core";
import PostShare from "../PostShare/PostShare";

interface ShareModalProps {
  modalOpened: boolean;
  setModalOpened: (opened: boolean) => void;
}

function ShareModal({ modalOpened, setModalOpened }: ShareModalProps) {
  const theme = useMantineTheme();

  return (
    <Modal
      color={
        theme.colorScheme === "dark" ? theme.colors.dark[9] : theme.colors.gray[2]
      }
      opacity={1}
      size="55%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <PostShare />
    </Modal>
  );
}

export default ShareModal;
