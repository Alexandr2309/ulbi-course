import React, { InputHTMLAttributes, memo } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Input.module.scss';

export type InputHTMLProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readOnly'
  >

export interface InputProps extends InputHTMLProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  readonly?: boolean
}

export const Input = memo((props: InputProps) => {
  const {
    value,
    onChange,
    className,
    placeholder,
    type,
    readonly = false,
    ...otherProps
  } = props;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const mods: Mods = {
    [cls.readonly]: readonly,
  };

  return (
    <div className={classNames(cls.InputWrapper, mods, [className])}>
      {placeholder && (
        <div className={cls.placeholder}>
          {`${placeholder}>`}
        </div>
      )}
      <div className="">
        <input
          className={cls.input}
          type={type}
          onChange={onChangeHandler}
          value={value}
          readOnly={readonly}
          {...otherProps}
        />
      </div>
    </div>
  );
});
