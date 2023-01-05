import { useTranslation } from 'react-i18next';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { Text, TextAlign, TextTheme } from '@/shared/ui/Text';
import { Input } from '@/shared/ui/Input';
import { Loader } from '@/shared/ui/Loader';
import { Avatar } from '@/shared/ui/Avatar';
import { Currency, CurrencySelect } from '@/entities/CurrencySelect';
import { Country, CountrySelect } from '@/entities/CountrySelect';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';

export interface ProfileCardProps {
  className?: string;
  data?: Profile;
  error?: string;
  isLoading?: boolean;
  readonly?: boolean;
  onChangeFirstname?: (value: string) => void;
  onChangeLastname?: (value: string) => void;
  onChangeCity?: (value: string) => void;
  onChangeAge?: (value: string) => void;
  onChangeUsername?: (value: string) => void;
  onChangeAvatar?: (value: string) => void;
  onChangeCurrency: (value: Currency) => void;
  onChangeCountry: (value: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const { t } = useTranslation('profile');

  const {
    className,
    data,
    isLoading,
    error,
    readonly = true,
    onChangeLastname,
    onChangeFirstname,
    onChangeCity,
    onChangeAge,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
  } = props;

  if (isLoading) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
        <Text
          theme={TextTheme.ERROR}
          title={t('Произошла ошибка при загрузке профиля')}
          text={t('Попробуйте перезагрзуить страницу')}
          align={TextAlign.CENTER}
        />
      </div>
    );
  }

  const mods: Mods = {
    [cls.editing]: !readonly,
  };

  return (
    <VStack gap="8" align="start" max className={classNames(cls.ProfileCard, mods, [className])}>
      {data?.avatar && (
        <HStack justify="center" className={cls.avatarWrapper}>
          <Avatar
            src={data.avatar}
          />
        </HStack>
      )}
      <Input
        data-testid="ProfileCard.firstname"
        className={cls.input}
        value={data?.first}
        placeholder={t('Ваше имя')}
        onChange={onChangeFirstname}
        readonly={readonly}
      />
      <Input
        data-testid="ProfileCard.lastname"
        className={cls.input}
        value={data?.lastname}
        placeholder={t('Ваша фамилия')}
        onChange={onChangeLastname}
        readonly={readonly}
      />
      <Input
        className={cls.input}
        value={data?.city}
        placeholder={t('Ваш город')}
        onChange={onChangeCity}
        readonly={readonly}
      />
      <Input
        className={cls.input}
        value={data?.age}
        placeholder={t('Возраст')}
        onChange={onChangeAge}
        readonly={readonly}
      />
      <Input
        className={cls.input}
        value={data?.username}
        placeholder={t('Имя пользователя')}
        onChange={onChangeUsername}
        readonly={readonly}
      />
      <Input
        className={cls.input}
        value={data?.avatar}
        placeholder={t('Аватар')}
        onChange={onChangeAvatar}
        readonly={readonly}
      />
      <CurrencySelect
        className={cls.input}
        onChange={onChangeCurrency}
        value={data?.currency}
        readonly={readonly}
      />
      <CountrySelect
        className={cls.input}
        onChange={onChangeCountry}
        value={data?.country}
        readonly={readonly}
      />
    </VStack>
  );
};
