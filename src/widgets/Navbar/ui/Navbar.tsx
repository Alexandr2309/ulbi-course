import React, { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { Text, TextTheme } from '@/shared/ui/Text';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import { LoginModal } from '@/features/AuthByUsername';
import { getUserAuthData } from '@/entities/User';
import { HStack } from '@/shared/ui/Stack';
import { NotificationButton } from '@/features/notificationButton';
import { AvatarDropdown } from '@/features/avatarDropdown';
import cls from './Navbar.module.scss';
import { getRouteArticleCreate } from '@/shared/const/route';

export interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);

  const onCloseModal = () => {
    setIsAuthModal(false);
  };

  const onShowModal = () => {
    setIsAuthModal(true);
  };

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
          to={getRouteArticleCreate()}
          className={cls.createLink}
        >
          {t('Создать статью')}
        </AppLink>
        <HStack gap="16" className={cls.actions}>
          <NotificationButton />
          <AvatarDropdown />
        </HStack>
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
