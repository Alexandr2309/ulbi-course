/**
 * Created by Саня on 01.11.2022
 */
import { CSSProperties, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { AppImage } from '../AppImage';
import UserIcon from '../../assets/icons/avatar.svg';
import { Skeleton } from '../Skeleton';
import { Icon } from '../Icon';

interface IAvatarProps {
  className?: string;
  src?: string;
  alt?: string;
  size?: number;
  fallbackInverted?: boolean;
}

export const Avatar = (props: IAvatarProps) => {
  const {
    alt, src, size = 100, className, fallbackInverted,
  } = props;

  const fallback = <Skeleton width={size} height={size} border="50%" />;
  const errorFallback = <Icon Svg={UserIcon} inverted={fallbackInverted} width={size} height={size} />;

  const styles = useMemo<CSSProperties>(() => ({
    width: size,
    height: size,
  }), [size]);

  return (
    <AppImage
      fallback={fallback}
      errorFallback={errorFallback}
      alt={alt}
      src={src}
      className={classNames(cls.Avatar, {}, [className])}
      style={styles}
    />
  );
};
