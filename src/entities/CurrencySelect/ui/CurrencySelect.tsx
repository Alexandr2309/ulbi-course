/**
 * Created by Саня on 01.11.2022
 */
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ListBox } from 'shared/ui/Popups';
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
    <ListBox
      className={classNames('', {}, [className])}
      items={options}
      value={value}
      defaultValue={t('Укажите валюту')}
      label={t('Укажите валюту')}
      onChange={onChangeHandler}
      readonly={readonly}
      direction="top right"
    />
  );
};
