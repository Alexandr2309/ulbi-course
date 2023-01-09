import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from '@/app/providers/storeProvider';
import { loginReducer } from '@/features/AuthByUsername/testing';
import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from '@/entities/Article/testing';
import { profileReducer } from '@/features/EditableProfileCard/testing';
import { addCommentFormReducer } from '@/features/addCommentForm/testing';
import { articlesPageReducer } from '@/pages/ArticlesPage/testing';
import { articlesDetailsPageReducer } from '@/pages/AritcleDetailsPage/testing';

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addCommentForm: addCommentFormReducer,
  articlesPage: articlesPageReducer,
  articlesDetailsPage: articlesDetailsPageReducer,
};

export const StoreDecorator = (
  state: DeepPartial<StateSchema>,
  asyncReducers?: ReducersList,
) => (StoryComponent: Story) => (
  <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
    <StoryComponent />
  </StoreProvider>
);
