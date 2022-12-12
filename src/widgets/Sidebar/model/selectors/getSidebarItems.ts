import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { RoutePath } from 'shared/config/routerConfig/routeConfig';
import MainIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about-page.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import ArticlesIcon from 'shared/assets/icons/article-20-20.svg';
import { SidebarItemType } from '../types/item';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
  const sidebarItemsList: SidebarItemType[] = [
    {
      path: RoutePath.main,
      Icon: MainIcon,
      text: 'Главная страница',
    },
    {
      path: RoutePath.about,
      Icon: AboutIcon,
      text: 'О сайте',
    }];

  if (userData) {
    sidebarItemsList.push(
      {
        path: RoutePath.profile + userData.id,
        Icon: ProfileIcon,
        text: 'Профиль',
        authOnly: true,
      },
      {
        path: RoutePath.articles,
        Icon: ArticlesIcon,
        text: 'Статьи',
        authOnly: true,
      },
    );
  }
  return sidebarItemsList;
});
