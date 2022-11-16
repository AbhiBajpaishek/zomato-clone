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

const Overlay: React.FC<any> = ({ children }: any) => {
  return <div className="overlay">{children}</div>;
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
          <Backdrop onClick={props.modalClickAction}></Backdrop>,
          myModal
        )}
      {myModal &&
        ReactDOM.createPortal(<Overlay>{props.children}</Overlay>, myModal)}
    </>
  );
};

export default Modal;
