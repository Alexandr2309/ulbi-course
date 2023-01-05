import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Code } from './Code';
import { Theme } from '@/shared/const/theme';

export default {
  title: 'shared/Code',
  component: Code,
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => (
  <Code {...args} />
);

export const Light = Template.bind({});
Light.args = {
  text: 'import React from \'react\';\n'
    + 'import { ComponentMeta, ComponentStory } from \'@storybook/react\';\n'
    + 'import { ThemeDecorator } from \'shared/config/storybook/ThemeDecorator\';\n'
    + 'import { Theme } from \'app/providers/themeProvider\';\n'
    + 'import { Code } from \'./Code\';\n'
    + '\n'
    + 'export default {\n'
    + '  title: \'shared/Code\',\n'
    + '  component: Code,\n'
    + '} as ComponentMeta<typeof Code>;\n'
    + '\n'
    + 'const Template: ComponentStory<typeof Code> = (args) => (\n'
    + '  <Code {...args} />\n'
    + ');\n'
    + '\n'
    + 'export const Light = Template.bind({});\n'
    + 'Light.args = {};\n'
    + '\n'
    + 'export const Dark = Template.bind({});\n'
    + 'Dark.decorators = [ThemeDecorator(Theme.DARK)];\n'
    + 'Dark.args = {};',
};

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
Dark.args = {
  text: 'import React from \'react\';\n'
    + 'import { ComponentMeta, ComponentStory } from \'@storybook/react\';\n'
    + 'import { ThemeDecorator } from \'shared/config/storybook/ThemeDecorator\';\n'
    + 'import { Theme } from \'app/providers/themeProvider\';\n'
    + 'import { Code } from \'./Code\';\n'
    + '\n'
    + 'export default {\n'
    + '  title: \'shared/Code\',\n'
    + '  component: Code,\n'
    + '} as ComponentMeta<typeof Code>;\n'
    + '\n'
    + 'const Template: ComponentStory<typeof Code> = (args) => (\n'
    + '  <Code {...args} />\n'
    + ');\n'
    + '\n'
    + 'export const Light = Template.bind({});\n'
    + 'Light.args = {};\n'
    + '\n'
    + 'export const Dark = Template.bind({});\n'
    + 'Dark.decorators = [ThemeDecorator(Theme.DARK)];\n'
    + 'Dark.args = {};',
};
