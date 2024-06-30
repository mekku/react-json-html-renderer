import type { Meta, StoryObj } from '@storybook/react';
import JsonRenderer from './JsonRenderer';

const meta = {
  title: 'Components/JsonRenderer',
  component: JsonRenderer,
  args: {
    data: {
      hello: 'world',
      str: 'string',
      number: 1,
      "null": null,
      table: [{
        "undefined": undefined,
        "boolean": true,
        object: {
          foo: "foo1",
          bar: {
            hello: 'world',
            str: 'string',
          }
        },
        listMixed: [
          "str",
          {
            foo: "foo1",
            bar: [{
              hello: 'world',
              str: 'string',
            }]
          },
          "str",
        ],
        list: [
          {
            foo: "foo1",
            bar: [{
              hello: 'world',
              str: 'string',
            }]
          },
          {
            foo: "foo2",
            bar: "bar2",
          },
          {
            foo: "foo3",
            bar: "bar3",
          },
          {
            foo: "foo4",
            bar: "bar4",
          }
        ]
      }]
    },
  }
} satisfies Meta<typeof JsonRenderer>;

export default meta;

type Story = StoryObj<typeof meta>;

const Template: Story = (args: any) => <JsonRenderer {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
