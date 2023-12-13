import { fireEvent, render, screen } from '@testing-library/react';
import Modal from './Modal';

test('딤 처리된 요소가 있어야 한다.', () => {
    render(<Modal isOpen={true}/>);
    const DimmedElement = screen.getByTestId('backdrop-testid');
    expect(DimmedElement).toBeInTheDocument();
  });

  test('isOpen이 true 일 경우에만 노출된다.', () => {
    render(<Modal isOpen={true}/>);
    const DimmedElement = screen.getByTestId('backdrop-testid');
    expect(DimmedElement).toBeInTheDocument();
  });

  test('딤 처리된 요소를 클릭하면 onClose 함수가 실행된다.', () => {
      const onClose = jest.fn(); // Mock 함수를 사용하여 onClose 함수를 감시합니다.
      render(<Modal isOpen={true} onClose={onClose} />);
      
      const DimmedElement = screen.getByTestId('backdrop-testid');
    fireEvent.click(DimmedElement);
    
    expect(onClose).toHaveBeenCalled(); // onClose 함수가 호출되었는지 확인합니다.
});

  test('모달 요소를 클릭하면 onClose 함수가 실행 되지 않는다.', () => {
    const onClose = jest.fn();
    render(<Modal isOpen={true} onClose={onClose} />);

    const ModalWrapperElement = screen.getByRole('dialog');
    fireEvent.click(ModalWrapperElement);

    expect(onClose).not.toHaveBeenCalled();
  });

  test('닫기 아이콘 버튼을 클릭하면 onClose 함수가 실행된다.', () => {
    const onClose = jest.fn(); // Mock 함수를 사용하여 onClose 함수를 감시합니다.
    render(<Modal isOpen={true} onClose={onClose} />);
    
    const closeBtnElement = screen.getByRole('button', { name: '닫기' });
  fireEvent.click(closeBtnElement);
  
  expect(onClose).toHaveBeenCalled();
  });

  test('확인 버튼을 클릭하면 onOk 함수가 실행된다.', () => {
    const onOk = jest.fn(); // Mock 함수를 사용하여 onClose 함수를 감시합니다.
    const onClose = jest.fn();
    render(<Modal isOpen={true} onClose={onClose} onOk={onOk} />);
    
    const okBtnElement = screen.getByRole('button', { name: '확인' });
  fireEvent.click(okBtnElement);
  
  expect(onOk).toHaveBeenCalled();
  });

