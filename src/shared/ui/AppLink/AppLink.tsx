import cls from './AppLink.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {Link, LinkProps} from "react-router-dom";
import {FC} from "react";

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

export interface AppLinkProps extends LinkProps {
  className?: string
  theme?: string
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const {className, children, to, theme = AppLinkTheme.PRIMARY, ...otherProps} = props;

  return (
    <Link
      className={classNames(cls.AppLink, {}, [className, cls[theme]])}
      {...otherProps}
      to={to}>
      {children}
    </Link>
  );
};