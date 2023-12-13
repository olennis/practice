import logo from './logo.svg';
import './App.css';
import Modal from './components/Modal';
import { useState } from 'react';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onOk = () => {
    console.log('ok')
    setIsModalOpen(false);
  }
  const onClose = () => {
    setIsModalOpen(false);
  }

  return (
    <div className="App">
      <Modal isOpen={isModalOpen} onOk={onOk} onClose={onClose} />
      <button onClick={() => setIsModalOpen(true)}>모달 열기</button>
    </div>
  );
}

export default App;
