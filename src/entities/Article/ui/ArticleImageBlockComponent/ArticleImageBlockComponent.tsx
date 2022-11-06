import cls from './ArticleImageBlockComponent.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

export interface ArticleImageBlockComponentProps {
  className?: string
}

export const ArticleImageBlockComponent = ({ className }: ArticleImageBlockComponentProps) => {
  return (
    <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
    </div>
  )
}
