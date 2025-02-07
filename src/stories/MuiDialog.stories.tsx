import { useState } from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Stack,
} from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Dialog> = {
  title: 'MUI/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    maxWidth: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
      description: 'Determine the max-width of the dialog. The dialog width grows with the size of the screen.',
      defaultValue: 'sm',
      table: {
        type: { summary: 'sm | md | lg' },
        defaultValue: { summary: 'sm' },
      },
    },
    fullWidth: {
      control: 'boolean',
      description: 'If true, the dialog stretches to maxWidth.',
      defaultValue: true,
      table: {
        defaultValue: { summary: true },
      },
    },
    fullScreen: {
      control: 'boolean',
      description: 'If true, the dialog will be full-screen',
      defaultValue: false,
      table: {
        defaultValue: { summary: false },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Dialog>;

const DialogWithState = ({ ...args }) => {
  const [openSmall, setOpenSmall] = useState(false);
  const [openMedium, setOpenMedium] = useState(false);
  const [openLarge, setOpenLarge] = useState(false);

  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" onClick={() => setOpenSmall(true)}>
        Small Dialog
      </Button>
      <Button variant="contained" onClick={() => setOpenMedium(true)}>
        Medium Dialog
      </Button>
      <Button variant="contained" onClick={() => setOpenLarge(true)}>
        Large Dialog
      </Button>

      {/* Small Dialog */}
      <Dialog
        {...args}
        maxWidth="sm"
        open={openSmall}
        onClose={() => setOpenSmall(false)}
        aria-labelledby="small-dialog-title"
        aria-describedby="small-dialog-description"
      >
        <DialogTitle id="small-dialog-title">Small Dialog</DialogTitle>
        <DialogContent>
          <DialogContentText id="small-dialog-description">
            This is a small dialog with maxWidth="sm".
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenSmall(false)}>Cancel</Button>
          <Button onClick={() => setOpenSmall(false)} variant="contained" autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>

      {/* Medium Dialog */}
      <Dialog
        {...args}
        maxWidth="md"
        open={openMedium}
        onClose={() => setOpenMedium(false)}
        aria-labelledby="medium-dialog-title"
        aria-describedby="medium-dialog-description"
      >
        <DialogTitle id="medium-dialog-title">Medium Dialog</DialogTitle>
        <DialogContent>
          <DialogContentText id="medium-dialog-description">
            This is a medium dialog with maxWidth="md". It provides more space for content.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenMedium(false)}>Cancel</Button>
          <Button onClick={() => setOpenMedium(false)} variant="contained" autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>

      {/* Large Dialog */}
      <Dialog
        {...args}
        maxWidth="lg"
        open={openLarge}
        onClose={() => setOpenLarge(false)}
        aria-labelledby="large-dialog-title"
        aria-describedby="large-dialog-description"
      >
        <DialogTitle id="large-dialog-title">Large Dialog</DialogTitle>
        <DialogContent>
          <DialogContentText id="large-dialog-description">
            This is a large dialog with maxWidth="lg". It's suitable for displaying more complex content or data.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenLarge(false)}>Cancel</Button>
          <Button onClick={() => setOpenLarge(false)} variant="contained" autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
};

export const Basic: Story = {
  render: (args) => <DialogWithState {...args} />,
  args: {
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