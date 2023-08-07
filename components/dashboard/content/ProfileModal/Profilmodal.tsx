import { Modal, useMantineTheme } from "@mantine/core"

interface ProfileModalProps {
  modalOpened: boolean
  setModalOpened: (opened: boolean) => void
}

const ProfileModal: React.FC<ProfileModalProps> = ({
  modalOpened,
  setModalOpened,
}) => {
  const theme = useMantineTheme()

  return (
    <Modal
      color={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      opacity={1}
      size="55%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <form className="dash_infoForm">
        <h3>Info</h3>

        <div>
          <input
            type="text"
            className="dash_infoInput"
            name="FirstName"
            placeholder="First Name"
          />

          <input
            type="text"
            className="dash_infoInput"
            name="LastName"
            placeholder="Last Name"
          />
        </div>

        <div>
          <input
            type="text"
            className="dash_infoInput"
            name="worksAT"
            placeholder="Works at"
          />
        </div>

        <div>
          <input
            type="text"
            className="dash_infoInput"
            name="livesIN"
            placeholder="LIves in"
          />

          <input
            type="text"
            className="dash_infoInput"
            name="Country"
            placeholder="Country"
          />
        </div>

        <div>
          <input
            type="text"
            className="dash_infoInput"
            placeholder="RelationShip Status"
          />
        </div>

        <div style={{ color: "gray" }}>
          Profile Image
          <input type="file" name="profileImg" />
          Cover Image
          <input type="file" name="coverImg" />
        </div>

        <button className="dash_button dash_infoButton">Update</button>
      </form>
    </Modal>
  )
}

export default ProfileModal
