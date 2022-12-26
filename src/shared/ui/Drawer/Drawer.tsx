import { classNames, Mods } from 'shared/lib/classNames/classNames';
import Portal from 'shared/ui/Portal/Portal';
import { Overlay } from 'shared/ui/Overlay/Overlay';
import React, { ReactNode } from 'react';
import cls from './Drawer.module.scss';

export interface DrawerProps {
  children: ReactNode;
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;

}

export const Drawer = (props: DrawerProps) => {
  const {
    className, children, isOpen, onClose,
  } = props;

  const mods: Mods = {
    [cls.opened]: isOpen,
  };
  
  return (
    <Portal>
      <div className={classNames(cls.Drawer, mods, [className])}>
        <Overlay onClose={onClose} />
        <div className={cls.content}>
          {children}
        </div>
      </div>
    </Portal>
  );
};
