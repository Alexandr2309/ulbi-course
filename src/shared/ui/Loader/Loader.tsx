import { classNames } from 'shared/lib/classNames/classNames';
import './Loader.scss';

export interface LoaderProps {
  className?: string
}

export const Loader = ({ className }: LoaderProps) => (
  <div className={classNames('lds-ripple', {}, [className])}>
    <div />
    <div />
  </div>
);
