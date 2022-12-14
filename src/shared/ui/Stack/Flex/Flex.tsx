import { classNames } from 'shared/lib/classNames/classNames';
import {
  DetailedHTMLProps, HTMLAttributes, memo, ReactNode,
} from 'react';
import cls from './Flex.module.scss';

type FlexAlign = 'start' | 'end' | 'center';
type FlexJustify = 'start' | 'end' | 'center' | 'between';
type FlexDirection = 'row' | 'column';
type FlexGap = '4' | '8' | '16' | '32';

type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export interface FlexProps extends DivProps {
  className?: string;
  children?: ReactNode;
  align?: FlexAlign;
  justify?: FlexJustify;
  direction: FlexDirection;
  gap?: FlexGap;
  max?: boolean;

}

const alignClasses: Record<FlexAlign, string> = {
  end: cls.alignEnd,
  center: cls.alignCenter,
  start: cls.alignStart,
};

const justifyClasses: Record<FlexJustify, string> = {
  end: cls.justifyEnd,
  center: cls.justifyCenter,
  start: cls.justifyStart,
  between: cls.justifyBetween,
};

const directionClasses: Record<FlexDirection, string> = {
  row: cls.directionRow,
  column: cls.directionColumn,
};

const gapClasses: Record<FlexGap, string> = {
  4: cls.gap4,
  8: cls.gap8,
  16: cls.gap16,
  32: cls.gap32,
};

export const Flex = (props: FlexProps) => {
  const {
    className,
    max,
    gap,
    children,
    justify = 'start',
    direction,
    align = 'center',
  } = props;

  const classes = [
    className,
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[direction],
    gap && gapClasses[gap],
  ];

  return (
    <div className={classNames(cls.Flex, { [cls.max]: max }, classes)}>
      {children}
    </div>
  );
};
