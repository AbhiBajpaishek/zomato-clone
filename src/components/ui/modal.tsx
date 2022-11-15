import { ReactElement } from 'react';
import ReactDOM from 'react-dom';
import './modal.css';

const Backdrop = (props: any) => {
  const onModalClick = () => {
    props.onClick(false);
  };
  return (
    <div className="backdrop" onClick={onModalClick}>
      {props.children}
    </div>
  );
};

type ModalProps = {
  modalClickAction?: Function;
  children: ReactElement;
};

const Modal = (props: ModalProps) => {
  const myModal = document.getElementById('myModal');
  return (
    <>
      {myModal &&
        ReactDOM.createPortal(
          <Backdrop onClick={props.modalClickAction}>
            {props.children}
          </Backdrop>,
          myModal
        )}
    </>
  );
};

export default Modal;
