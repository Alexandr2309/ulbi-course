import { classNames } from 'shared/lib/classNames/classNames';
import { useCallback } from 'react';
import CopyIcon from 'shared/assets/icons/copy-20-20.svg';
import cls from './Code.module.scss';
import { Button, ThemeButton } from '../Button/Button';

export interface CodeProps {
  className?: string;
  text: string;
}

export const Code = ({
  className,
  text,
}: CodeProps) => {
  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);
  return (
    <pre className={classNames(cls.Code, {}, [className])}>
      <Button
        theme={ThemeButton.CLEAR}
        className={cls.copyBtn}
        onClick={onCopy}
      >
        <CopyIcon className={cls.copyIcon} />
      </Button>
      <code>
        {text}
      </code>
    </pre>
  );
};
