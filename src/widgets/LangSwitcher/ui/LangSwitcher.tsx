import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

export interface LangSwitcherProps {
  className?: string;
  short: boolean
}

export const LangSwitcher = ({ className, short }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      onClick={toggleLang}
      theme={ThemeButton.CLEAR}
      className={classNames('', {}, [className])}
    >
      {short ? t('Язык') : t('Перевод')}
    </Button>
  );
};
