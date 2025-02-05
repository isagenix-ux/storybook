import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import TextField from '@mui/material/TextField';

const meta = {
  title: 'MUI/TextField',
  component: TextField,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'The variant to use',
      options: ['outlined', 'filled', 'standard'],
      control: { type: 'radio' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'outlined' },
      },
    },
    size: {
      description: 'The size of the text field',
      options: ['small', 'medium'],
      control: { type: 'radio' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
    },
    color: {
      description: 'The color of the text field',
      options: ['primary', 'secondary', 'error', 'info', 'success', 'warning'],
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
    },
    disabled: {
      description: 'If true, the text field will be disabled',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    error: {
      description: 'If true, the text field will indicate an error state',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    fullWidth: {
      description: 'If true, the text field will take up the full width of its container',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    label: {
      description: 'The label content',
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
    helperText: {
      description: 'The helper text content',
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
    required: {
      description: 'If true, the label will indicate that the input is required',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof TextField>;

export const Basic: Story = {
  args: {
    label: 'Basic',
    variant: 'outlined',
  },
};

export const Required: Story = {
  args: {
    required: true,
    label: 'Required',
    variant: 'outlined',
  },
};

export const Error: Story = {
  args: {
    error: true,
    label: 'Error',
    helperText: 'Incorrect entry',
    variant: 'outlined',
  },
}; 