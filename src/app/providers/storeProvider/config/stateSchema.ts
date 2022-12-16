import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import {
  AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { To } from 'history';
import { NavigateOptions } from 'react-router';
import { AxiosInstance } from 'axios';
import { ArticleDetailsSchema } from 'entities/Article';
import { ArticleDetailsCommentsSchema } from 'pages/AritcleDetailsPage';
import { AddCommentFormSchema } from 'features/addCommentForm';
import { ArticlesPageSchema } from 'pages/ArticlesPage';
import { scrollSaveSchema } from 'features/ScrollSave';
import { ArticlesDetailsPageSchema } from 'pages/AritcleDetailsPage/model/types';
import { rtkApi } from 'shared/api/rtkApi';
import { ProfileSchema } from 'features/EditableProfileCard';

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  scrollSave: scrollSaveSchema;
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>

  // async reducers
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
  articleDetails?: ArticleDetailsSchema
  addCommentForm?: AddCommentFormSchema;
  articlesPage?: ArticlesPageSchema;
  articlesDetailsPage?: ArticlesDetailsPageSchema
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager
}

export interface ThunkExtraArgs {
  api: AxiosInstance;
  navigate?: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkApiConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArgs;
  state: StateSchema
}
