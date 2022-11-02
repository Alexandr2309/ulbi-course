/**
 * Created by Саня on 01.11.2022
 */
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { Country } from '../model/types/country';

interface ICurrencySelectProps {
  className?: string;
  value?: string;
  onChange?: (value: Country) => void;
  readonly?: boolean;
}

const options = [
  { value: Country.Armenia, content: 'Armenia' },
  { value: Country.Belarus, content: 'Belarus' },
  { value: Country.Kazahstan, content: 'Kazahstan' },
  { value: Country.Russia, content: 'Russia' },
  { value: Country.Ukraine, content: 'Ukraine' },
];

export const CountrySelect = ({
  className, value, onChange, readonly,
}: ICurrencySelectProps) => {
  const { t } = useTranslation();

  const onChangeHandler = (value: string) => {
    onChange?.(value as Country);
  };

  return (
    <Select
      className={classNames('', {}, [className])}
      options={options}
      value={value}
      label={t('Укажите страну')}
      onChange={onChangeHandler}
      readonly={readonly}
    />
  );
};
