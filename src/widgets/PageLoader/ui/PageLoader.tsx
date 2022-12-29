/**
 * Created by Саня on 29.09.2022
 */
import { Loader } from '@/shared/ui/Loader/Loader';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './PageLoader.module.scss';

interface IPageLoaderProps {
  className?: string;
}

export const PageLoader = ({ className }: IPageLoaderProps) => (
  <div className={classNames(cls.PageLoader, {}, [className])}>
    <Loader />
  </div>
);
