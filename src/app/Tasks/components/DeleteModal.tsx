import { useModal } from '@/shared/context/modal/ModalContext';

export interface DeleteModalProps {
  handleDelete: () => void;
}

export const DeleteModal: React.FC<DeleteModalProps> = ({ handleDelete }) => {
  const { closeModal } = useModal();

  return (
    <>
      <div className="window-body has-space !mb-0">
        <h2 className="instruction instruction-primary px-4 !mb-2 text-center">
          Are you sure you want to delete this task?
        </h2>
      </div>
      <footer className="flex justify-end gap-2">
        <button
          type="button"
          onClick={handleDelete}
        >
          Delete
        </button>
        <button
          type="button"
          onClick={closeModal}
        >
          Cancel
        </button>
      </footer>
    </>
  );
};
