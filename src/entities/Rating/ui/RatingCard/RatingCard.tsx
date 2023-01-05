import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserView, MobileView } from 'react-device-detect';
import cls from './RatingCard.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { Card } from '@/shared/ui/Card';
import { StarsRating } from '@/shared/ui/StarsRating';
import { Input } from '@/shared/ui/Input';
import { Modal } from '@/shared/ui/Modal';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { Drawer } from '@/shared/ui/Drawer';

export interface RatingCardProps {
  className?: string;
  title: string;
  feedbackTitle?: string;
  hasFeedback?: boolean;
  onCancel?: (starNumber: number) => void;
  onAccept?: (starNumber: number, feedback?: string) => void;
  rate?: number;
}

export const RatingCard = memo((props: RatingCardProps) => {
  const {
    className, onAccept, onCancel, hasFeedback, feedbackTitle, title, rate = 0,
  } = props;
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [starsCount, setStarsCount] = useState(rate);
  const [feedback, setFeedback] = useState('');

  const onSelectStars = useCallback((starNumber: number) => {
    setStarsCount(starNumber);
    if (hasFeedback) {
      setIsModalOpen(true);
    } else {
      onAccept?.(starNumber);
    }
  }, [hasFeedback, onAccept]);

  const acceptHandler = useCallback(() => {
    setIsModalOpen(false);
    onAccept?.(starsCount, feedback);
  }, [feedback, onAccept, starsCount]);

  const cancelHandler = useCallback(() => {
    setIsModalOpen(false);
    onCancel?.(starsCount);
  }, [onCancel, starsCount]);

  const modalContent = (
    <>
      <Text title={feedbackTitle} />
      <Input placeholder={t('Ваш отзыв')} onChange={setFeedback} value={feedback} />
    </>
  );

  return (
    <Card max className={classNames(cls.RatingCard, {}, [className])}>
      <VStack align="center" gap="8" max>
        <Text title={starsCount ? t('Спасибо за оценку!') : title} />
        <StarsRating selectedStars={starsCount} size={40} onSelect={onSelectStars} />
      </VStack>
      <BrowserView>
        <Modal isOpen={isModalOpen}>
          <VStack gap="32" max>
            {modalContent}
            <HStack justify="end" gap="8">
              <Button theme={ThemeButton.OUTLINED_RED} onClick={cancelHandler}>
                {t('Закрыть')}
              </Button>
              <Button onClick={acceptHandler}>
                {t('Отправить')}
              </Button>
            </HStack>
          </VStack>
        </Modal>
      </BrowserView>
      <MobileView>
        <Drawer isOpen={isModalOpen} onClose={cancelHandler}>
          <VStack gap="16" align="start">
            {modalContent}
            <Button fullWidth onClick={acceptHandler}>{t('Отправить')}</Button>
          </VStack>
        </Drawer>
      </MobileView>
    </Card>
  );
});
