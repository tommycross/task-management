import type { Meta, StoryObj } from '@storybook/react';
import TaskList from './TaskList';

import '../index.css';

const meta = {
  title: 'TaskManagement/TaskList',
  component: TaskList,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TaskList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};

