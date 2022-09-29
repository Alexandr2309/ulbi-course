/**
 * Created by Саня on 29.09.2022
 */
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';

interface IPageErrorProps {
  className?: string;
}

export const PageError = ({ className }: IPageErrorProps) => {
  const { t } = useTranslation();

  const onReloadPage = () => window.location.reload();

  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <h1>{t('Произошла непредвиденная ошибка')}</h1>
      <Button onClick={onReloadPage}>
        {t('Перезагрузить страницу')}
      </Button>
    </div>
  );
};
