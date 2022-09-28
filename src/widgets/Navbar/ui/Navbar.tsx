/**
 * Created by Саня on 26.09.2022
 */
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTheme } from 'app/providers/ThemeProvider';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

type INavbarProps = {
  className?: string;
};

export const Navbar = ({ className }: INavbarProps) => {
  const { toggleTheme } = useTheme();
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink to="/" className={cls.mainLink} theme={AppLinkTheme.PRIMARY}>{t('Главная страница')}</AppLink>
        <AppLink to="/about" theme={AppLinkTheme.SECONDARY}>{t('О нас')}</AppLink>
      </div>
    </div>
  );
};
