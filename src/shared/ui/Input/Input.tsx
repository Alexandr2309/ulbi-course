import { classNames } from 'shared/lib/classNames/classNames';
import React, { InputHTMLAttributes, memo } from 'react';
import cls from './Input.module.scss';

export type InputHTMLProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

export interface InputProps extends InputHTMLProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export const Input = memo((props: InputProps) => {
  const {
    value,
    onChange,
    className,
    placeholder,
    type,
    ...otherProps
  } = props;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className={classNames(cls.InputWrapper, {}, [className])}>
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
          {...otherProps}
        />
      </div>
    </div>
  );
});
