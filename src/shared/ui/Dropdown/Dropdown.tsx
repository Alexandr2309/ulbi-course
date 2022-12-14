import { Menu } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Fragment, ReactNode } from 'react';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { DropdownDirection } from 'shared/types/ui';
import cls from './Dropdown.module.scss';

interface DropdownItem {
  content: string;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
}

interface DropdownProps {
  className?: string;
  trigger: ReactNode;
  items: DropdownItem[];
  direction?: DropdownDirection;
}

const mapDirectionClass: Record<DropdownDirection, string> = {
  'bottom left': cls.menuBottomLeft,
  'bottom right': cls.menuBottomRight,
  'top right': cls.menuTopLeft,
  'top left': cls.menuTopRight,
};

export function Dropdown(props: DropdownProps) {
  const {
    className, trigger, items, direction = 'bottom left',
  } = props;

  const menuClasses = [mapDirectionClass[direction]];

  return (
    <Menu as="div" className={classNames(cls.Dropdown, {}, [className])}>
      <Menu.Button className={cls.btn}>{trigger}</Menu.Button>
      <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
        {items.map((item) => {
          const content = (
            ({ active }: {active: boolean}) => (
              <button
                type="button"
                className={classNames(cls.item, { [cls.active]: active })}
                onClick={item.onClick}
                disabled={item.disabled}
              >
                {item.content}
              </button>
            )
          );

          if (item.href) {
            return (
              <Menu.Item key={item.content} as={AppLink} to={item.href} disabled={item.disabled}>
                {content}
              </Menu.Item>
            );
          }

          return (
            <Menu.Item key={item.content} as={Fragment} disabled={item.disabled}>
              {content}
            </Menu.Item>
          );
        })}

      </Menu.Items>
    </Menu>
  );
}
