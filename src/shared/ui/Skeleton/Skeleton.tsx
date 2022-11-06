import { classNames } from 'shared/lib/classNames/classNames';
import { CSSProperties } from 'react';
import cls from './Skeleton.module.scss';

export interface SkeletonProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  border?: string;
}

export const Skeleton = ({
  className, width, border, height,
}: SkeletonProps) => {
  const styles: CSSProperties = {
    width,
    height,
    border,
  };

  return (
    <div
      style={styles}
      className={classNames(cls.Skeleton, {}, [className])}
    />
  );
};
