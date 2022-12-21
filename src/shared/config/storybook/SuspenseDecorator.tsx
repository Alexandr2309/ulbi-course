import React, { Suspense } from 'react';
import { Story } from '@storybook/react';

const SuspenseDecorator = (StoryComponent: Story) => (
  <Suspense>
    <StoryComponent />
  </Suspense>
);

export default SuspenseDecorator;
