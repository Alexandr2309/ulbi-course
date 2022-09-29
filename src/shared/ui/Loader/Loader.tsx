import './Loader.scss';

export interface LoaderProps {
  className?: string;
}

export const Loader = () => (
  <div className="lds-ripple">
    <div />
    <div />
  </div>
);
