import React from 'react';
import { StoryFn, Meta } from '@storybook/react/types-6-0';
import JsonRenderer from './JsonRenderer';

export default {
  title: 'Components/JsonRenderer',
  component: JsonRenderer,
} as Meta;

const Template: StoryFn = (args) => <JsonRenderer {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
