import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Button from '@mui/material/Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'The variant to use',
      options: ['text', 'outlined', 'contained'],
      control: { type: 'radio' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'text' },
      },
    },
    size: {
      description: 'The size of the button',
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
    },
    color: {
      description: 'The color of the button',
      options: ['inherit', 'primary', 'secondary', 'success', 'error', 'info', 'warning'],
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
    },
    disabled: {
      description: 'If true, the button will be disabled',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    fullWidth: {
      description: 'If true, the button will take up the full width of its container',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'contained',
    children: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'outlined',
    children: 'Button',
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
    children: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    children: 'Small',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    children: 'Medium',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    children: 'Large',
  },
}; 