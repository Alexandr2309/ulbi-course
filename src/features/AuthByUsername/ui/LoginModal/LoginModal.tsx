import { classNames } from 'shared/lib/classNames/classNames';
import { LoginForm } from 'features/AuthByUsername/ui/LoginForm/LoginForm';
import { Modal } from 'shared/ui/Modal/Modal';

export interface LoginModalProps {
  className?: string;
  onClose: () => void;
  isOpen: boolean;
}

export const LoginModal = ({
  className,
  isOpen,
  onClose,
}: LoginModalProps) => (
  <Modal
    onClose={onClose}
    isOpen={isOpen}
    className={classNames('', {}, [className])}
    lazy
  >
    <LoginForm />
  </Modal>
);
