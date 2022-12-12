import { classNames } from 'shared/lib/classNames/classNames';
import { memo, ReactNode, useCallback } from 'react';
import { Card, CardTheme } from '../Card/Card';
import cls from './Tabs.module.scss';

export interface TabItem {
  value:string;
  content: ReactNode;
}

export interface TabsProps {
  className?: string;
  value: string;
  tabs: TabItem[];
  onTabClick: (tab: TabItem) => void;
}

export const Tabs = memo((props: TabsProps) => {
  const {
    className, tabs, value, onTabClick,
  } = props;

  const onTabClickHandler = useCallback((tab: TabItem) => () => {
    onTabClick(tab);
  }, [onTabClick]);

  return (
    <div className={classNames(cls.Tabs, {}, [className])}>
      {tabs.map((tab) => (
        <Card
          className={cls.tab}
          onClick={onTabClickHandler(tab)}
          key={tab.value}
          theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  );
});
