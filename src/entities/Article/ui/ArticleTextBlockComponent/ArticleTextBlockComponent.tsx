import cls from './ArticleTextBlockComponent.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

export interface ArticleTextBlockComponentProps {
  className?: string
}

export const ArticleTextBlockComponent = ({ className }: ArticleTextBlockComponentProps) => {
  return (
    <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
    </div>
  )
}
