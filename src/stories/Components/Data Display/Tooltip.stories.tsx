import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Zoom from '@mui/material/Zoom';

const meta = {
  title: 'Components/Data Display/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Basic: Story = {
  render: () => (
    <Tooltip title="Delete">
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  ),
};

export const Positioned: Story = {
  render: () => (
    <Box sx={{ width: 500 }}>
      <Grid container justifyContent="center">
        <Grid item>
          <Tooltip title="Add" placement="top-start">
            <Button>top-start</Button>
          </Tooltip>
          <Tooltip title="Add" placement="top">
            <Button>top</Button>
          </Tooltip>
          <Tooltip title="Add" placement="top-end">
            <Button>top-end</Button>
          </Tooltip>
        </Grid>
      </Grid>
      <Grid container justifyContent="center">
        <Grid item xs={6}>
          <Tooltip title="Add" placement="left-start">
            <Button>left-start</Button>
          </Tooltip>
          <br />
          <Tooltip title="Add" placement="left">
            <Button>left</Button>
          </Tooltip>
          <br />
          <Tooltip title="Add" placement="left-end">
            <Button>left-end</Button>
          </Tooltip>
        </Grid>
        <Grid item container xs={6} alignItems="flex-end" direction="column">
          <Tooltip title="Add" placement="right-start">
            <Button>right-start</Button>
          </Tooltip>
          <br />
          <Tooltip title="Add" placement="right">
            <Button>right</Button>
          </Tooltip>
          <br />
          <Tooltip title="Add" placement="right-end">
            <Button>right-end</Button>
          </Tooltip>
        </Grid>
      </Grid>
      <Grid container justifyContent="center">
        <Grid item>
          <Tooltip title="Add" placement="bottom-start">
            <Button>bottom-start</Button>
          </Tooltip>
          <Tooltip title="Add" placement="bottom">
            <Button>bottom</Button>
          </Tooltip>
          <Tooltip title="Add" placement="bottom-end">
            <Button>bottom-end</Button>
          </Tooltip>
        </Grid>
      </Grid>
    </Box>
  ),
};

export const WithArrow: Story = {
  render: () => (
    <Tooltip title="Add" arrow>
      <Button>With Arrow</Button>
    </Tooltip>
  ),
};

export const Transitions: Story = {
  render: () => (
    <Box>
      <Tooltip title="Add">
        <Button sx={{ m: 1 }}>Grow</Button>
      </Tooltip>
      <Tooltip TransitionComponent={Fade} TransitionProps={{ timeout: 600 }} title="Add">
        <Button sx={{ m: 1 }}>Fade</Button>
      </Tooltip>
      <Tooltip TransitionComponent={Zoom} title="Add">
        <Button sx={{ m: 1 }}>Zoom</Button>
      </Tooltip>
    </Box>
  ),
};

export const Interactive: Story = {
  render: () => (
    <Tooltip title="Add" disableInteractive>
      <Button>Not Interactive</Button>
    </Tooltip>
  ),
};

export const DisabledButton: Story = {
  render: () => (
    <Tooltip title="You don't have permission to do this">
      <span>
        <Button disabled>A Disabled Button</Button>
      </span>
    </Tooltip>
  ),
};

export const WithDelay: Story = {
  render: () => (
    <Tooltip title="Add" enterDelay={500} leaveDelay={200}>
      <Button>[500ms, 200ms] delay</Button>
    </Tooltip>
  ),
}; 