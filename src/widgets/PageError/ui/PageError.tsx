/**
 * Created by Саня on 26.09.2022
 */
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';

interface IPageErrorProps {
  className?: string;
}

export const PageError = ({ className }: IPageErrorProps) => {
  const { t } = useTranslation();

  const onReload = () => {
    window.location.reload();
  };

  return (
    <div className={cls.PageError}>
      <h1>{t('Произошла непредвиденная ошибка')}</h1>
      <Button onClick={onReload}>
        {t('Перезагрузить страницу')}
      </Button>
    </div>
  );
};
