import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const meta = {
  title: 'MUI/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    severity: {
      description: 'The severity of the alert',
      options: ['error', 'warning', 'info', 'success'],
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'success' },
      },
    },
    variant: {
      description: 'The variant to use',
      options: ['standard', 'filled', 'outlined'],
      control: { type: 'radio' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'standard' },
      },
    },
    color: {
      description: 'The color of the alert',
      options: ['success', 'info', 'warning', 'error'],
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
      },
    },
    icon: {
      description: 'Override the icon displayed before the children',
      control: 'boolean',
      table: {
        type: { summary: 'node' },
      },
    },
    action: {
      description: 'The action to display',
      control: 'boolean',
      table: {
        type: { summary: 'node' },
      },
    },
    onClose: {
      description: 'Callback fired when the component requests to be closed',
      action: 'closed',
      table: {
        type: { summary: 'function' },
      },
    },
    closeText: {
      description: 'Text for the close button',
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
    children: {
      description: 'The content of the component',
      control: 'text',
      table: {
        type: { summary: 'node' },
      },
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof Alert>;

export const Basic: Story = {
  args: {
    severity: 'success',
    children: 'This is a success alert — check it out!',
  },
};

export const WithTitle: Story = {
  render: () => (
    <Alert severity="warning">
      <AlertTitle>Warning</AlertTitle>
      This is a warning alert with a title — <strong>check it out!</strong>
    </Alert>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Alert variant="filled" severity="error">
        This is an error alert — check it out!
      </Alert>
      <Alert variant="outlined" severity="info">
        This is an info alert — check it out!
      </Alert>
    </div>
  ),
}; 