import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { TabItem, Tabs } from '@/shared/ui/Tabs/Tabs';
import { ArticleType } from '@/entities/Article';
import cls from './ArticleTypeTabs.module.scss';

export interface ArticleTypeTabsProps {
  className?: string;
  value: ArticleType;
  changeType: (type: ArticleType) => void
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
  const { className, changeType, value } = props;
  const { t } = useTranslation();

  const onChangeType = useCallback((tab: TabItem) => {
    changeType(tab.value as ArticleType);
  }, [changeType]);

  const typeTabs = useMemo<TabItem[]>(() => [
    {
      value: ArticleType.ALL,
      content: t('Все'),
    },
    {
      value: ArticleType.IT,
      content: t('Айти'),
    },
    {
      value: ArticleType.ECONOMICS,
      content: t('Экономика'),
    },
    {
      value: ArticleType.SCIENCE,
      content: t('Наука'),
    },
  ], [t]);

  return (
    <Tabs
      tabs={typeTabs}
      value={value}
      onTabClick={onChangeType}
      className={classNames(cls.ArticleTypeTabs, {}, [className])}
    />
  );
});
