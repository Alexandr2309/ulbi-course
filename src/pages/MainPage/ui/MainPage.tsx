/**
 * Created by Саня on 26.09.2022
 */
import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation();
  return (
    <div>
      {t('Главная страница')}
    </div>
  );
};

export default MainPage;
