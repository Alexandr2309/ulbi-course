/**
 * Created by Саня on 01.11.2022
 */
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ListBox } from 'shared/ui/Popups';
import { useCallback } from 'react';
import { Country } from '../model/types/country';

interface ICountrySelectProps {
  className?: string;
  value?: Country;
  onChange: (value: Country) => void;
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
}: ICountrySelectProps) => {
  const { t } = useTranslation();

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Country);
  }, [onChange]);

  return (
    <ListBox
      className={classNames('', {}, [className])}
      items={options}
      value={value}
      defaultValue={t('Укажите страну')}
      label={t('Укажите страну')}
      onChange={onChangeHandler}
      readonly={readonly}
      direction="top right"
    />
  );
};
