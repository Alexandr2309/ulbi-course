import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { ArticleView } from 'entities/Article';
import TiledIcon from 'shared/assets/icons/tiled-24-24.svg';
import ListIcon from 'shared/assets/icons/list-24-24.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { ThemeButton, Button } from 'shared/ui/Button/Button';
import cls from './ArticleViewSelector.module.scss';

export interface ArticleViewSelectorProps {
  className?: string;
  onChangeView: (view: ArticleView) => void;
  view: ArticleView
}

const ViewTypes = [
  {
    Icon: TiledIcon,
    view: ArticleView.SMALL,
  },
  {
    Icon: ListIcon,
    view: ArticleView.BIG,
  },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
  const {
    className,
    onChangeView,
    view,
  } = props;

  const onClick = (view: ArticleView) => () => {
    onChangeView?.(view);
  };

  return (
    <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
      {ViewTypes.map((viewType) => (
        <Button
          key={viewType.view}
          theme={ThemeButton.CLEAR}
          onClick={onClick(viewType.view)}
        >
          <Icon
            Svg={viewType.Icon}
            className={classNames('', { [cls.notSelected]: viewType.view === view })}
          />
        </Button>
      ))}
    </div>
  );
});
