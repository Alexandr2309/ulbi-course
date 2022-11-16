import { classNames } from 'shared/lib/classNames/classNames';
import { HTMLAttributes, ReactNode } from 'react';
import cls from './Card.module.scss';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}

export const Card = ({
  className,
  children,
  ...otherProps
}: CardProps) => (
  <article
    className={classNames(cls.Card, {}, [className])}
    {...otherProps}
  >
    {children}
  </article>
);
