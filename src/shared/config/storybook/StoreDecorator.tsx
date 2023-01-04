import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from '@/app/providers/storeProvider';
import { loginReducer } from '@/features/AuthByUsername';
import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from '@/entities/Article';
import { profileReducer } from '@/features/EditableProfileCard';

const defaultAsyncReducers = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
};

export const StoreDecorator = (
  state: DeepPartial<StateSchema>,
  asyncReducers?: ReducersList,
) => (StoryComponent: Story) => (
  <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
    <StoryComponent />
  </StoreProvider>
);
