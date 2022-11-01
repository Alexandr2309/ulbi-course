/**
 * Created by Саня on 01.11.2022
 */
import { classNames } from 'shared/lib/classNames/classNames';
import { CSSProperties, useMemo } from 'react';
import cls from './Avatar.module.scss';

interface IAvatarProps {
  className?: string;
  src?: string;
  alt?: string;
  size?: number
}

export const Avatar = (props: IAvatarProps) => {
  const {
    alt, src, size, className,
  } = props;

  const styles = useMemo<CSSProperties>(() => ({
    width: size,
    height: size,
  }), [size]);

  return (
    <img
      alt={alt}
      src={src}
      className={classNames(cls.Avatar, {}, [className])}
      style={styles}
    />
  );
};
