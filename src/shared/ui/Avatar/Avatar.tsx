/**
 * Created by Саня on 01.11.2022
 */
import { CSSProperties, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';

interface IAvatarProps {
  className?: string;
  src?: string;
  alt?: string;
  size?: number;
  border?: string | number;
}

export const Avatar = (props: IAvatarProps) => {
  const {
    alt, src, size, className, border,
  } = props;

  const styles = useMemo<CSSProperties>(() => ({
    width: size,
    height: size,
    border,
  }), [size, border]);

  return (
    <img
      alt={alt}
      src={src}
      className={classNames(cls.Avatar, {}, [className])}
      style={styles}
    />
  );
};
