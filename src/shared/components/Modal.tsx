import { useModal } from '../context/modal/ModalContext';
import { Backdrop } from './Backdrop';
import { Container } from './Container';

export interface ModalProps {
  open?: boolean;
}

export const Modal: React.FC<ModalProps> = ({ open }) => {
  const { isOpen, component, closeModal } = useModal();

  if (!isOpen && !open) return null;

  return (
    <Backdrop>
      <Container
        showClose
        maximizeClassName="edit"
        onClose={closeModal}
        title="Task"
        width="min-w-44 max-w-[90%]"
        withoutFooter
      >
        {component}
      </Container>
    </Backdrop>
  );
};
