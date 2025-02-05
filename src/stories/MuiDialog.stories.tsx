import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const meta = {
  title: 'MUI/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  argTypes: {
    open: {
      description: 'If true, the dialog is open',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    fullWidth: {
      description: 'If true, the dialog stretches to maxWidth',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    maxWidth: {
      description: 'Determine the max-width of the dialog',
      options: ['xs', 'sm', 'md', 'lg', 'xl', false],
      control: { type: 'select' },
      table: {
        type: { summary: 'string | false' },
        defaultValue: { summary: 'sm' },
      },
    },
    scroll: {
      description: 'Determine the container for scrolling the dialog',
      options: ['body', 'paper'],
      control: { type: 'radio' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'paper' },
      },
    },
    fullScreen: {
      description: 'If true, the dialog will be full-screen',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    disableEscapeKeyDown: {
      description: 'If true, hitting escape will not fire the onClose callback',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    disableBackdropClick: {
      description: 'If true, clicking the backdrop will not fire the onClose callback',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    keepMounted: {
      description: 'Always keep the children in the DOM',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    transitionDuration: {
      description: 'The duration for the transition, in milliseconds',
      control: 'number',
      table: {
        type: { summary: 'number | { enter?: number, exit?: number }' },
      },
    },
    onClose: {
      description: 'Callback fired when the dialog requests to be closed',
      action: 'closed',
      table: {
        type: { summary: 'function' },
      },
    },
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Basic: Story = {
  args: {
    open: true,
    children: (
      <>
        <DialogTitle>Dialog Title</DialogTitle>
        <DialogContent>
          <DialogContentText>
            This is a basic dialog example. You can customize it using the controls below.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button>Cancel</Button>
          <Button>OK</Button>
        </DialogActions>
      </>
    ),
  },
};

export const FullWidth: Story = {
  args: {
    ...Basic.args,
    fullWidth: true,
    maxWidth: 'sm',
  },
};

export const Scrollable: Story = {
  args: {
    ...Basic.args,
    scroll: 'paper',
    children: (
      <>
        <DialogTitle>Scrollable Dialog</DialogTitle>
        <DialogContent dividers>
          <DialogContentText>
            {Array(50).fill('This is repeated content to demonstrate scrolling. ').join('')}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button>Cancel</Button>
          <Button>OK</Button>
        </DialogActions>
      </>
    ),
  },
};

export const WithForm: Story = {
  render: () => (
    <Dialog open={true}>
      <DialogTitle>Subscribe</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To subscribe to this website, please enter your email address here.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button>Cancel</Button>
        <Button variant="contained">Subscribe</Button>
      </DialogActions>
    </Dialog>
  ),
}; 