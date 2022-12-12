import { Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { Loader } from 'shared/ui/Loader/Loader';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

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
    <Suspense fallback={<Loader />}>
      <LoginFormAsync onSuccess={onClose} />
    </Suspense>
  </Modal>
);
