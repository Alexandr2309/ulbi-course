/**
 * Created by Саня on 27.09.2022
 */
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { useState } from 'react';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import { useTranslation } from 'react-i18next';
import cls from './Sidebar.module.scss';

type ISidebarProps = {
  className?: string;
};

export const Sidebar = ({ className }: ISidebarProps) => {
  const [collapse, setCollapse] = useState(false);
  const { t } = useTranslation();

  const toggleCollapse = () => {
    setCollapse((prev) => !prev);
  };

  return (
    <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapse }, [className])}>
      <Button onClick={toggleCollapse}>{t('Расскрыть')}</Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  );
};
