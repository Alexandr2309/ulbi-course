import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { ArticleView } from '@/entities/Article';
import { initedArticlesPage } from './initedArticlesPage';
import { fetchArticlesPage } from '../fetchArticlesPage/fetchArticlesPage';

jest.mock('../fetchArticlesPage/fetchArticlesPage');

describe('initedArticlesPage.test', () => {
  test('success result', async () => {
    const thunk = new TestAsyncThunk(initedArticlesPage, {
      articlesPage: {
        isLoading: false,
        ids: [],
        entities: {},
        view: ArticleView.SMALL,
        page: 1,
        hasMore: true,
        limit: 4,
        _inited: false,
      },
    });

    await thunk.callThunk(new URLSearchParams());

    expect(thunk.dispatch).toBeCalledTimes(4);
    expect(fetchArticlesPage).toHaveBeenCalledWith({ page: 1 });
  });

  test('already inited', async () => {
    const thunk = new TestAsyncThunk(initedArticlesPage, {
      articlesPage: {
        isLoading: false,
        ids: [],
        entities: {},
        view: ArticleView.SMALL,
        page: 1,
        hasMore: true,
        limit: 4,
        _inited: true,
      },
    });

    await thunk.callThunk(new URLSearchParams());

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticlesPage).not.toHaveBeenCalledWith({ page: 1 });
  });
});
