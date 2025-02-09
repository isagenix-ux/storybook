import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import FaceIcon from '@mui/icons-material/Face';
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';

const meta = {
  title: 'Components/Data Display/Chip',
  component: Chip,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof Chip>;

export const Basic: Story = {
  render: () => (
    <Stack direction="row" spacing={1}>
      <Chip label="Chip Filled" />
      <Chip label="Chip Outlined" variant="outlined" />
    </Stack>
  ),
};

export const Clickable: Story = {
  render: () => (
    <Stack direction="row" spacing={1}>
      <Chip label="Clickable" onClick={() => alert('Clicked')} />
      <Chip label="Clickable" variant="outlined" onClick={() => alert('Clicked')} />
    </Stack>
  ),
};

export const Deletable: Story = {
  render: () => (
    <Stack direction="row" spacing={1}>
      <Chip label="Deletable" onDelete={() => alert('Deleted')} />
      <Chip label="Deletable" variant="outlined" onDelete={() => alert('Deleted')} />
    </Stack>
  ),
};

export const ClickableAndDeletable: Story = {
  render: () => (
    <Stack direction="row" spacing={1}>
      <Chip
        label="Clickable Deletable"
        onClick={() => alert('Clicked')}
        onDelete={() => alert('Deleted')}
      />
      <Chip
        label="Clickable Deletable"
        variant="outlined"
        onClick={() => alert('Clicked')}
        onDelete={() => alert('Deleted')}
      />
    </Stack>
  ),
};

export const WithAvatar: Story = {
  render: () => (
    <Stack direction="row" spacing={1}>
      <Chip avatar={<Avatar>M</Avatar>} label="Avatar" />
      <Chip
        avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
        label="Avatar"
        variant="outlined"
      />
    </Stack>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <Stack direction="row" spacing={1}>
      <Chip icon={<FaceIcon />} label="With Icon" />
      <Chip icon={<FaceIcon />} label="With Icon" variant="outlined" />
    </Stack>
  ),
};

export const Colors: Story = {
  render: () => (
    <Stack spacing={1}>
      <Stack direction="row" spacing={1}>
        <Chip label="primary" color="primary" />
        <Chip label="success" color="success" />
        <Chip label="warning" color="warning" />
        <Chip label="error" color="error" />
        <Chip label="info" color="info" />
      </Stack>
      <Stack direction="row" spacing={1}>
        <Chip label="primary" color="primary" variant="outlined" />
        <Chip label="success" color="success" variant="outlined" />
        <Chip label="warning" color="warning" variant="outlined" />
        <Chip label="error" color="error" variant="outlined" />
        <Chip label="info" color="info" variant="outlined" />
      </Stack>
    </Stack>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Stack direction="row" spacing={1}>
      <Chip label="Small" size="small" />
      <Chip label="Small" size="small" variant="outlined" />
    </Stack>
  ),
};

export const CustomDelete: Story = {
  render: () => (
    <Stack direction="row" spacing={1}>
      <Chip
        label="Custom delete icon"
        onClick={() => alert('Clicked')}
        onDelete={() => alert('Deleted')}
        deleteIcon={<DoneIcon />}
      />
      <Chip
        label="Custom delete icon"
        onClick={() => alert('Clicked')}
        onDelete={() => alert('Deleted')}
        deleteIcon={<DeleteIcon />}
        variant="outlined"
      />
    </Stack>
  ),
};

export const Multiline: Story = {
  render: () => (
    <Chip
      sx={{
        height: 'auto',
        '& .MuiChip-label': {
          display: 'block',
          whiteSpace: 'normal',
        },
      }}
      label="This is a chip that has multiple lines because it has a lot of content."
    />
  ),
}; 