import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Grow from '@mui/material/Grow';

function GrowTransition(props) {
  return <Grow {...props} />;
}

const SnackbarStory = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <Box>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Open Snackbar
      </Button>
      <Snackbar
        open={open}
        onClose={() => setOpen(false)}
        TransitionComponent={GrowTransition}
        message="This is a success message"
        autoHideDuration={3000}
      />
    </Box>
  );
};

const meta = {
  title: 'Components/Feedback/Snackbar',
  component: Snackbar,
  tags: ['autodocs'],
} satisfies Meta<typeof Snackbar>;

export default meta;
type Story = StoryObj<typeof Snackbar>;

export const Basic: Story = {
  render: () => <SnackbarStory />
};

export const WithAction: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    
    return (
      <Box>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Open Snackbar
        </Button>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message="Note archived"
          TransitionComponent={GrowTransition}
          action={
            <Button color="secondary" size="small">
              UNDO
            </Button>
          }
        />
      </Box>
    );
  }
};

export const WithAlert: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    
    return (
      <Box>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Open Snackbar
        </Button>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          TransitionComponent={GrowTransition}
        >
          <Alert onClose={() => setOpen(false)} severity="success" variant="filled">
            This is a success message!
          </Alert>
        </Snackbar>
      </Box>
    );
  }
};

export const CustomPosition: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    
    return (
      <Box>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Open Snackbar
        </Button>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message="Top-right snackbar"
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          TransitionComponent={GrowTransition}
        />
      </Box>
    );
  }
};

export const WithLongDuration: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    
    return (
      <Box>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Open Snackbar
        </Button>
        <Snackbar
          open={open}
          autoHideDuration={10000}
          onClose={() => setOpen(false)}
          message="This snackbar stays visible for 10 seconds"
          TransitionComponent={GrowTransition}
        />
      </Box>
    );
  }
}; 