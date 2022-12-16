import React, { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { RoutePath } from 'shared/config/routerConfig/routeConfig';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import cls from './Navbar.module.scss';

export interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const onCloseModal = () => {
    setIsAuthModal(false);
  };
  const onShowModal = () => {
    setIsAuthModal(true);
  };

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
      <nav className={classNames(cls.Navbar, {}, [className])}>
        <Text
          title={t('Logo App')}
          theme={TextTheme.INVERTED}
          className={cls.appLogo}
        />
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={RoutePath.article_new}
          className={cls.createLink}
        >
          {t('Создать статью')}
        </AppLink>
        <Dropdown
          trigger={<Avatar size={30} src={authData.avatar} />}
          direction="bottom left"
          items={[
            {
              content: t('Профиль'),
              href: RoutePath.profile + authData.id,
            },
            {
              content: t('Выйти'),
              onClick: onLogout,
            },
          ]}
          className={cls.dropdown}
        />
      </nav>
    );
  }

  return (
    <header className={classNames(cls.Navbar, {}, [className])}>
      <Text
        title={t('Logo App')}
        theme={TextTheme.INVERTED}
        className={cls.appLogo}
      />
      <Button
        theme={ThemeButton.CLEAR_INVERTED}
        className={cls.links}
        onClick={onShowModal}
      >
        {t('Войти')}
      </Button>
      {isAuthModal
        && (
          <LoginModal
            onClose={onCloseModal}
            isOpen={isAuthModal}
          />
        )}
    </header>
  );
});
