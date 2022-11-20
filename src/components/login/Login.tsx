import Modal from 'components/ui/modal';
import { OverlayBody } from 'components/ui/Overlay/OverlayBody';
import { OverlayCard } from 'components/ui/Overlay/OverlayCard';
import { OverlayHeader } from 'components/ui/Overlay/OverlayHeader';
import './Login.css';

type LoginProps = {
  toggleModal: Function;
};

export const Login: React.FC<LoginProps> = (props: LoginProps) => {
  return (
    <Modal modalClickAction={props.toggleModal}>
      <OverlayCard>
        <>
          <OverlayHeader
            toggleModal={props.toggleModal}
            headerText="Login"
          ></OverlayHeader>
          <OverlayBody></OverlayBody>
        </>
      </OverlayCard>
    </Modal>
  );
};
