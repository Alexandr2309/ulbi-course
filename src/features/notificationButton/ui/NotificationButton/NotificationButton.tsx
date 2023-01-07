import { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Popover } from '@/shared/ui/Popups';
import { Button, ThemeButton } from '@/shared/ui/Button';
import NotificationIcon from '@/shared/assets/icons/notifications.svg';
import { Icon } from '@/shared/ui/Icon';
import { NotificationList } from '@/entities/Notification';
import { Drawer } from '@/shared/ui/Drawer';
import cls from './NotificationButton.module.scss';

export interface NotificationButtonProps {
  className?: string
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
  const { className } = props;
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  const onOpenDrawer = useCallback(() => {
    setIsOpenDrawer(true);
  }, []);

  const onCloseDrawer = useCallback(() => {
    setIsOpenDrawer(false);
  }, []);

  const trigger = (
    <Button
      theme={ThemeButton.CLEAR}
      onClick={onOpenDrawer}
    >
      <Icon Svg={NotificationIcon} inverted />
    </Button>
  );

  return (
    <div>
      <BrowserView>
        <Popover
          className={classNames(cls.NotificationButton, {}, [className])}
          trigger={trigger}
        >
          <NotificationList className={cls.notifications} />
        </Popover>
      </BrowserView>
      <MobileView>
        {trigger}
        <Drawer onClose={onCloseDrawer} isOpen={isOpenDrawer}>
          <NotificationList />
        </Drawer>
      </MobileView>
    </div>
  );
});
