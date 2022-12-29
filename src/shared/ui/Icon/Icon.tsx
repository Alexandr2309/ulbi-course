import React from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

export interface IconProps {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
  inverted?: boolean
}

export const Icon = ({
  className,
  Svg,
  inverted = false,
}: IconProps) => (
  <Svg className={classNames(inverted ? cls.inverted : cls.Icon, {}, [className])} />
);
