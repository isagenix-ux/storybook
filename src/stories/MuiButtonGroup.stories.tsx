import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import SaveIcon from '@mui/icons-material/Save';

const meta = {
  title: 'MUI/ButtonGroup',
  component: ButtonGroup,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'The variant to use',
      options: ['text', 'outlined', 'contained'],
      control: { type: 'radio' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'outlined' },
      },
    },
    size: {
      description: 'The size of the button group',
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
    },
    color: {
      description: 'The color of the button group',
      options: ['inherit', 'primary', 'secondary', 'error', 'info', 'success', 'warning'],
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
    },
    disabled: {
      description: 'If true, the button group will be disabled',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    fullWidth: {
      description: 'If true, the button group will take up the full width of its container',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    orientation: {
      description: 'The component orientation',
      options: ['horizontal', 'vertical'],
      control: { type: 'radio' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'horizontal' },
      },
    },
    disableElevation: {
      description: 'If true, no elevation is used',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    disableRipple: {
      description: 'If true, the ripple effect is disabled',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
  },
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

export const Basic: Story = {
  args: {
    variant: 'contained',
    children: (
      <>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </>
    ),
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: (
      <>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </>
    ),
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
    children: (
      <>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </>
    ),
  },
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
    variant: 'contained',
    children: (
      <>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </>
    ),
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <ButtonGroup size="small" variant="contained">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup size="medium" variant="contained">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup size="large" variant="contained">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Box sx={{ '& > *': { m: 1 } }}>
      <ButtonGroup variant="contained" orientation="vertical">
        <Button startIcon={<SaveIcon />}>Save</Button>
        <Button startIcon={<SendIcon />}>Send</Button>
        <Button startIcon={<DeleteIcon />}>Delete</Button>
      </ButtonGroup>
    </Box>
  ),
};

export const Variants: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <ButtonGroup variant="contained">
        <Button>Contained</Button>
        <Button>Group</Button>
      </ButtonGroup>
      <ButtonGroup variant="outlined">
        <Button>Outlined</Button>
        <Button>Group</Button>
      </ButtonGroup>
      <ButtonGroup variant="text">
        <Button>Text</Button>
        <Button>Group</Button>
      </ButtonGroup>
    </Box>
  ),
}; 