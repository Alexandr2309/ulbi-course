import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
  ERROR = 'error'
}

export enum TextAlign {
  LEFT = 'left',
  RIGHT = 'right',
  CENTER = 'center'
}

export enum TextSize {
  S = 'size_s',
  M = 'size_m',
  L = 'size_l',
}

export interface TextProps {
  className?: string
  theme?: TextTheme;
  title?:string;
  text?: string;
  align?: TextAlign;
  size?: TextSize;
  'data-testid'?: string
}

type HeaderTagType = 'h1' | 'h2' | 'h3';

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  [TextSize.S]: 'h3',
  [TextSize.M]: 'h2',
  [TextSize.L]: 'h1',
};

export const Text = memo((props: TextProps) => {
  const {
    className,
    theme = TextTheme.PRIMARY,
    text,
    title,
    align = TextAlign.LEFT,
    size = TextSize.M,
    'data-testid': dataTestId = 'Text',
  } = props;

  const addClasses = [className, cls[theme], cls[align], cls[size]];

  const HeaderTag = mapSizeToHeaderTag[size];

  return (
    <div
      className={classNames(cls.Text, {}, addClasses)}
    >
      {title && (
        <HeaderTag
          className={cls.title}
          data-testid={dataTestId}
        >
          {title}
        </HeaderTag>
      )}
      {text && (
        <p
          className={cls.text}
          data-testid={dataTestId}
        >
          {text}
        </p>
      )}
    </div>
  );
});
