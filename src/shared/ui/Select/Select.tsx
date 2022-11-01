import { classNames } from 'shared/lib/classNames/classNames';
import { ChangeEvent, useMemo } from 'react';
import cls from './Select.module.scss';

export interface SelectOption {
  value?: string;
  content?: string
}

export interface SelectProps {
  className?: string;
  label?: string;
  options?: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  readonly?: boolean
}

export const Select = (props: SelectProps) => {
  const {
    className, options, label, onChange, value, readonly,
  } = props;

  const selectOptions = useMemo(() => options?.map((opt) => (
    <option
      key={opt.value}
      value={opt.value}
      className={cls.option}
    >
      {opt.content}
    </option>
  )), [options]);

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className={classNames(cls.selectWrapper, {}, [className])}>
      {label && (
        <span className={cls.label}>
          {`${label}>`}
        </span>
      )}
      <select
        disabled={readonly}
        value={value}
        className={cls.select}
        onChange={onChangeHandler}
      >
        {selectOptions}
      </select>
    </div>
  );
};
