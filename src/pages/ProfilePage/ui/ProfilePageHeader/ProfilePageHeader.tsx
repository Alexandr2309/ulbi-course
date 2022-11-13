import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
  getProfileData, getProfileReadonly, profileActions, updateProfileData,
} from 'entities/Profile';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from 'entities/User';
import cls from './ProfilePageHeader.module.scss';

export interface ProfilePageHeaderProps {
  className?: string
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
  const { t } = useTranslation('profile');
  const readonly = useSelector(getProfileReadonly);
  const user = useSelector(getUserAuthData);
  const profile = useSelector(getProfileData);
  const canEdit = user?.id === profile?.id;

  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(true));
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
      <Text title={t('Профиль')} />
      {canEdit
        && (
          <div className={cls.btnWrapper}>
            {readonly ? (
              <Button
                theme={ThemeButton.OUTLINED}
                className={cls.editBtn}
                onClick={onEdit}
              >
                {t('Редактировать')}
              </Button>
            )
              : (
                <>
                  <Button
                    theme={ThemeButton.OUTLINED_RED}
                    className={cls.editBtn}
                    onClick={onCancelEdit}
                  >
                    {t('Отменить')}
                  </Button>
                  <Button
                    theme={ThemeButton.OUTLINED}
                    className={cls.saveBtn}
                    onClick={onSave}
                  >
                    {t('Сохранить')}
                  </Button>
                </>
              )}
          </div>
        )}
    </div>
  );
};
