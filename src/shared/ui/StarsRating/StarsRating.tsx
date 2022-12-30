import { memo, useState } from 'react';
import cls from './StarsRating.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Icon } from '@/shared/ui/Icon/Icon';
import StarIcon from '@/shared/assets/icons/star.svg';

export interface StarsRatingProps {
  className?: string;
  size?: number;
  onSelect?: (starNumber: number) => void;
  selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

export const StarsRating = memo((props: StarsRatingProps) => {
  const {
    className, size, selectedStars = 0, onSelect,
  } = props;
  const [currentStarsCount, setCurrentStarsCount] = useState(0);
  const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

  const onHover = (starNumber: number) => () => {
    if (!isSelected) {
      setCurrentStarsCount(starNumber);
    }
  };

  const onLeave = () => {
    if (!isSelected) {
      setCurrentStarsCount(0);
    }
  };

  const onClick = (starNumber: number) => () => {
    if (!isSelected) {
      onSelect?.(starNumber);
      setCurrentStarsCount(starNumber);
      setIsSelected(true);
    }
  };

  return (
    <div className={classNames(cls.StarsRating, {}, [className])}>
      {stars.map((starNumber) => (
        <Icon
          Svg={StarIcon}
          key={starNumber}
          width={size}
          height={size}
          className={classNames(
            cls.starIcon,
            {
              [cls.hovered]: currentStarsCount >= starNumber,
              [cls.selected]: isSelected,
            },
            [],
          )}
          onMouseLeave={onLeave}
          onMouseEnter={onHover(starNumber)}
          onClick={onClick(starNumber)}
        />
      ))}
    </div>
  );
});
