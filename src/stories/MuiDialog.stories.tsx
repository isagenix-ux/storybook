import { useState } from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Dialog> = {
  title: 'MUI/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Dialog>;

const DialogWithState = ({ ...args }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="contained" onClick={handleClickOpen}>
        Open Dialog
      </Button>
      <Dialog
        {...args}
        open={open}
        onClose={handleClose}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <DialogTitle id="dialog-title">Dialog Title</DialogTitle>
        <DialogContent>
          <DialogContentText id="dialog-description">
            This is a sample dialog content. You can put any content here.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose} variant="contained" autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export const Basic: Story = {
  render: (args) => <DialogWithState {...args} />,
  args: {
    maxWidth: 'sm',
    fullWidth: true,
  },
};

export const WithLongContent: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Open Long Dialog
        </Button>
        <Dialog {...args} open={open} onClose={() => setOpen(false)}>
          <DialogTitle>Scrollable Dialog</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {Array(10).fill(
                'This is a long paragraph of text that will make the dialog scrollable. '
              )}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>Close</Button>
          </DialogActions>
        </Dialog>
      </>
    );
  },
  args: {
    scroll: 'paper',
    maxWidth: 'sm',
    fullWidth: true,
  },
};

export const FullScreen: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Open Full Screen
        </Button>
        <Dialog {...args} open={open} onClose={() => setOpen(false)}>
          <DialogTitle>Full Screen Dialog</DialogTitle>
          <DialogContent>
            <DialogContentText>
              This dialog uses the full screen width and height.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>Close</Button>
          </DialogActions>
        </Dialog>
      </>
    );
  },
  args: {
    fullScreen: true,
  },
}; 