/**
 * Created by Саня on 01.11.2022
 */
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { Currency } from '../model/types/currency';

interface ICurrencySelectProps {
  className?: string;
  value?: string;
  onChange?: (value: Currency) => void;
  readonly?: boolean
}

const options = [
  { value: Currency.RUB, content: 'RUB' },
  { value: Currency.USD, content: 'USD' },
  { value: Currency.EUR, content: 'EUR' },
];

export const CurrencySelect = ({
  className, value, onChange, readonly,
}: ICurrencySelectProps) => {
  const { t } = useTranslation();

  const onChangeHandler = (value: string) => {
    onChange?.(value as Currency);
  };

  return (
    <Select
      className={classNames('', {}, [className])}
      options={options}
      value={value}
      label={t('Укажите валюту')}
      onChange={onChangeHandler}
      readonly={readonly}
    />
  );
};
