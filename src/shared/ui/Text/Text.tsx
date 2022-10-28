import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error'
}

export interface TextProps {
  className?: string
  theme?: TextTheme;
  title?:string;
  text?: string;
}

export const Text = memo((props: TextProps) => {
  const {
    className, theme = TextTheme.PRIMARY, text, title,
  } = props;

  return (
    <div
      className={classNames(cls.Text, {}, [className, cls[theme]])}
    >
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
});
