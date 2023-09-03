import './Modal.css';

function Modal({ children }) {
  return (
    <div className="ModalBackground">
      {children}
    </div>
  );
}

export { Modal };