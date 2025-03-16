import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import TaskItem  from './TaskItem';

import '../index.css';

const meta = {
  title: 'TaskManagement/TaskItem',
  component: TaskItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onToggle: fn() },
} satisfies Meta<typeof TaskItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "example item",
    completed: true
  },
};

