import { classNames } from 'shared/lib/classNames/classNames';
import type { LinkProps } from 'react-router-dom';
import { Link } from 'react-router-dom';
import type { FC } from 'react';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

export type AppLinkProps = {
  className?: string;
  theme: AppLinkTheme;
} & LinkProps;

export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    className, theme, to, children, ...otherProps
  } = props;

  return (
    <Link
      to={to}
      {...otherProps}
      className={classNames(cls.AppLink, {}, [className, cls[theme]])}
    >
      {children}
    </Link>
  );
};
