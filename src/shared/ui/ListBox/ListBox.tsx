import { classNames } from 'shared/lib/classNames/classNames';
import { Fragment, ReactNode } from 'react';
import { Listbox as HListbox } from '@headlessui/react';
import { DropdownDirection } from 'shared/types/ui';
import { Button } from '../Button/Button';
import { HStack } from '../Stack';
import cls from './ListBox.module.scss';

export type ListBoxItem = {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

const mapDirectionClass: Record<DropdownDirection, string> = {
  'bottom left': cls.optionsBottomLeft,
  'bottom right': cls.optionsBottomRight,
  'top right': cls.optionsTopLeft,
  'top left': cls.optionsTopRight,
};

interface ListBoxProps {
  className?: string;
  items?: ListBoxItem[];
  value?: string;
  defaultValue?: string;
  readonly?: boolean
  label?: string;
  direction?: DropdownDirection;
  onChange: (value: string) => void;
}

export function ListBox(props: ListBoxProps) {
  const {
    onChange, value, defaultValue, items, className, readonly, label, direction = 'bottom left',
  } = props;

  const optionsClasses = [mapDirectionClass[direction]];

  return (
    <HStack gap="4">
      {label && <span>{`${label}>`}</span>}
      <HListbox
        as="div"
        className={classNames(cls.ListBox, {}, [className])}
        value={value}
        onChange={onChange}
        disabled={readonly}
      >
        <HListbox.Button className={cls.trigger} disabled={readonly}>
          <Button disabled={readonly}>
            {value ?? defaultValue}
          </Button>
        </HListbox.Button>
        <HListbox.Options className={classNames(cls.options, {}, optionsClasses)}>
          {items?.map((item) => (
            <HListbox.Option
              as={Fragment}
              key={item.value}
              value={item.value}
              disabled={item.disabled}
            >
              {({ active, selected }) => (
                <li className={classNames(cls.item, {
                  [cls.active]: active,
                  [cls.disabled]: item.disabled,
                })}
                >
                  {selected && '-> '}
                  {item.content}
                </li>
              )}
            </HListbox.Option>
          ))}
        </HListbox.Options>
      </HListbox>
    </HStack>
  );
}
