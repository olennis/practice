import { useRef } from "react";


const Modal = ({ isOpen, onClose, onOk }) => {
    const backdropRef = useRef();
  
    const handleBackdropClick = (event) => {
      // 클릭한 요소가 backdropRef와 동일하면 onClose 실행
      if (event.target === backdropRef.current) {
        onClose();
      }
    };
  
    return isOpen && (
      <div data-testid="backdrop-testid" ref={backdropRef} onClick={handleBackdropClick} style={{width:'100vw', height:'100vh', backgroundColor:'yellow'}}>
        <div role='dialog'>
            <header>
                <h2>Modal</h2>
                <button onClick={onClose}>닫기</button>
            </header>
            <div>
                <p>Modal Content</p>
                <button onClick={onOk}>확인</button>
            </div>
        </div>
      </div>
    );
  };

  export default Modal;