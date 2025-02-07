import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

const meta = {
  title: 'Components/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Story />
      </LocalizationProvider>
    ),
  ],
  argTypes: {
    label: {
      description: 'The label of the date picker',
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
    disabled: {
      description: 'If true, the date picker will be disabled',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    readOnly: {
      description: 'If true, the date picker will be read-only',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    disableFuture: {
      description: 'If true, disables future dates',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    disablePast: {
      description: 'If true, disables past dates',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    views: {
      description: 'Available views',
      control: 'multi-select',
      options: ['year', 'month', 'day'],
      table: {
        type: { summary: 'array' },
        defaultValue: { summary: '["year", "month", "day"]' },
      },
    },
    openTo: {
      description: 'The default view to open to',
      control: 'select',
      options: ['year', 'month', 'day'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'day' },
      },
    },
  },
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Basic: Story = {
  args: {
    label: 'Basic date picker',
  },
};

export const WithDefaultValue: Story = {
  args: {
    label: 'Date picker with default value',
    defaultValue: dayjs('2024-01-01'),
  },
};

export const DisabledFuture: Story = {
  args: {
    label: 'Date picker (no future dates)',
    disableFuture: true,
  },
};

export const DisabledPast: Story = {
  args: {
    label: 'Date picker (no past dates)',
    disablePast: true,
  },
};

export const YearAndMonth: Story = {
  args: {
    label: 'Year and month selection',
    views: ['year', 'month'],
    openTo: 'year',
  },
};

export const ReadOnly: Story = {
  args: {
    label: 'Read-only date picker',
    defaultValue: dayjs(),
    readOnly: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled date picker',
    disabled: true,
  },
}; 