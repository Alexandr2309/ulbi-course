import { classNames } from 'shared/lib/classNames/classNames';
import { ReactNode } from 'react';
import cls from './Card.module.scss';

export interface CardProps {
  className?: string;
  children: ReactNode;
}

export const Card = ({ className, children }: CardProps) => (
  <div className={classNames(cls.Card, {}, [className])}>
    {children}
  </div>
);
