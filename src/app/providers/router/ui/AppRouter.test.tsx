import { screen } from '@testing-library/react';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { AboutPage } from '@/pages/AboutPage';
import { getRouteAbout, getRouteAdmin, getRouteProfile } from '@/shared/const/route';
import { AppRouter } from './AppRouter';
import { UserRole } from '@/entities/User';

describe('app/providers/AppRouter', () => {
  test('Страница отображается', async () => {
    componentRender(<AboutPage />, {
      route: getRouteAbout(),
    });
    const page = await screen.findByTestId('AboutPage');
    expect(page).toBeInTheDocument();
  });

  test('Страница не найдена', async () => {
    componentRender(<AppRouter />, {
      route: '/fsdfeafsdf',
    });
    const page = await screen.findByTestId('NotFoundPage');
    expect(page).toBeInTheDocument();
  });

  test('Доступ к закрытой странице для неавторизованного пользователя', async () => {
    componentRender(<AppRouter />, {
      route: getRouteProfile('1'),
    });
    const page = await screen.findByTestId('MainPage');
    expect(page).toBeInTheDocument();
  });

  test('Доступ к закрытой странице для авторизованного пользователя', async () => {
    componentRender(<AppRouter />, {
      route: getRouteProfile('1'),
      initialState: {
        user: {
          _initialized: true,
          dataAuth: {
            id: '2',
            roles: [],
            avatar: '',
            username: 'admi',
          },
        },
      },
    });

    const page = await screen.findByTestId('ProfilePage');
    expect(page).toBeInTheDocument();
  });

  test('Доступ запрещён (роль отсутствует)', async () => {
    componentRender(<AppRouter />, {
      route: getRouteAdmin(),
      initialState: {
        user: {
          _initialized: true,
          dataAuth: {
            id: '2',
            roles: [],
            avatar: '',
            username: 'admi',
          },
        },
      },
    });

    const page = await screen.findByTestId('ForbiddenPage');
    expect(page).toBeInTheDocument();
  });

  test('Доступ разрешён (есть необходимая роль пользователя)', async () => {
    componentRender(<AppRouter />, {
      route: getRouteAdmin(),
      initialState: {
        user: {
          _initialized: true,
          dataAuth: {
            id: '2',
            roles: [UserRole.ADMIN],
            avatar: '',
            username: 'admi',
          },
        },
      },
    });

    const page = await screen.findByTestId('AdminPanelPage');
    expect(page).toBeInTheDocument();
  });
});
