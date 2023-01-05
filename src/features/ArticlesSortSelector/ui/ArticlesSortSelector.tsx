import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Select, SelectOption } from '@/shared/ui/Select';
import { SortOrder } from '@/shared/types';
import { ArticlesSortField } from '@/entities/Article';
import cls from './ArticlesSortSelector.module.scss';

export interface ArticlesSortSelectorProps {
  className?: string;
  order: SortOrder;
  sort: ArticlesSortField;
  onChangeSort: (newSort: ArticlesSortField) => void;
  onChangeOrder: (newOrder: SortOrder) => void;
}

export const ArticlesSortSelector = memo((props: ArticlesSortSelectorProps) => {
  const {
    className, onChangeSort, sort, onChangeOrder, order,
  } = props;
  const { t } = useTranslation();

  const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
    {
      value: 'asc',
      content: t('возрастанию'),
    },
    {
      value: 'desc',
      content: t('убыванию'),
    },
  ], [t]);

  const sortFieldOptions = useMemo<SelectOption<ArticlesSortField>[]>(() => [
    {
      value: ArticlesSortField.TITLE,
      content: t('названию'),
    },
    {
      value: ArticlesSortField.VIEWS,
      content: t('просмотрам'),
    },
    {
      value: ArticlesSortField.CREATED,
      content: t('дате создания'),
    },
  ], [t]);

  return (
    <div className={classNames(cls.ArticlesSortSelector, {}, [className])}>
      <Select
        options={sortFieldOptions}
        label={t('Сортировать ПО')}
        value={sort}
        onChange={onChangeSort}
      />
      <Select
        options={orderOptions}
        label={t('по')}
        value={order}
        onChange={onChangeOrder}
      />
    </div>
  );
});
