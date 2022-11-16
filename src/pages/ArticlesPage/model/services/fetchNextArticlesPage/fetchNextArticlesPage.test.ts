import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { ArticleView } from 'entities/Article';
import { fetchNextArticlesPage } from './fetchNextArticlesPage';
import { fetchArticlesPage } from '../fetchArticlesPage/fetchArticlesPage';

jest.mock('../fetchArticlesPage/fetchArticlesPage');

describe('fetchNextArticlesPage.test', () => {
  test('success result', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        isLoading: false,
        ids: [],
        entities: {},
        view: ArticleView.SMALL,
        page: 1,
        hasMore: true,
        limit: 4,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(4);
    expect(fetchArticlesPage).toHaveBeenCalledWith({ page: 2 });
  });

  test('has more false', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        isLoading: false,
        ids: [],
        entities: {},
        view: ArticleView.SMALL,
        page: 1,
        hasMore: false,
        limit: 4,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticlesPage).not.toHaveBeenCalled();
  });

  test('isLoading true', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        isLoading: true,
        ids: [],
        entities: {},
        view: ArticleView.SMALL,
        page: 1,
        hasMore: true,
        limit: 4,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticlesPage).not.toHaveBeenCalled();
  });
});
