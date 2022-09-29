/**
 * Created by Саня on 29.09.2022
 */

import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';
import cls from './PageLoader.module.scss';

interface IPageLoaderProps {
  className?: string;
}

export const PageLoader = ({ className }: IPageLoaderProps) => (
  <div className={classNames(cls.PageLoader, {}, [className])}>
    <Loader />
  </div>
);
