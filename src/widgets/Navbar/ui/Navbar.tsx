import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

export interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
  <div className={classNames(cls.Navbar, {}, [className])}>
    <div className={cls.links}>
      <AppLink to="/" className={cls.mainLink} theme={AppLinkTheme.PRIMARY}>
        MainPage
      </AppLink>
      <AppLink to="/about" theme={AppLinkTheme.SECONDARY}>
        AboutPage
      </AppLink>
    </div>
  </div>
);
