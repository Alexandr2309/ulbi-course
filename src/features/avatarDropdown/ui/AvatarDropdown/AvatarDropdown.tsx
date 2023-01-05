import React, { memo, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Dropdown } from '@/shared/ui/Popups';
import { Avatar } from '@/shared/ui/Avatar';
import {
  getUserAuthData, isUserAdmin, isUserManager, userActions,
} from '@/entities/User';
import cls from './AvatarDropdown.module.scss';
import { RoutePath } from '@/shared/const/route';

export interface AvatarDropdownProps {
  className?: string
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const isAdminPanelAvailable = isAdmin || isManager;

  return (
    <Dropdown
      trigger={<Avatar size={30} src={authData?.avatar} />}
      direction="bottom left"
      className={classNames(cls.AvatarDropdown, {}, [className])}
      items={[
        ...(isAdminPanelAvailable ? [{
          content: t('Админка'),
          href: RoutePath.admin_panel,
        }] : []),
        {
          content: t('Профиль'),
          href: RoutePath.profile + authData!.id,
        },
        {
          content: t('Выйти'),
          onClick: onLogout,
        },
      ]}
    />
  );
});
