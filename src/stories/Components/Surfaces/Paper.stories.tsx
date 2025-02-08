import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const meta = {
  title: 'Components/Surfaces/Paper',
  component: Paper,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Paper>;

export default meta;
type Story = StoryObj<typeof Paper>;

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  width: 128,
  height: 128,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const Elevation: Story = {
  render: () => (
    <Stack spacing={2}>
      <Stack direction="row" spacing={2}>
        <Item elevation={0}>elevation=0</Item>
        <Item elevation={1}>elevation=1</Item>
        <Item elevation={2}>elevation=2</Item>
        <Item elevation={3}>elevation=3</Item>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Item elevation={4}>elevation=4</Item>
        <Item elevation={6}>elevation=6</Item>
        <Item elevation={8}>elevation=8</Item>
        <Item elevation={12}>elevation=12</Item>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Item elevation={16}>elevation=16</Item>
        <Item elevation={24}>elevation=24</Item>
      </Stack>
    </Stack>
  ),
};

export const Variants: Story = {
  render: () => (
    <Box
      sx={{
        display: 'flex',
        '& > :not(style)': {
          m: 1,
          width: 128,
          height: 128,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
      }}
    >
      <Paper variant="elevation">default variant</Paper>
      <Paper variant="outlined">outlined variant</Paper>
    </Box>
  ),
};

export const Corners: Story = {
  render: () => (
    <Box
      sx={{
        display: 'flex',
        '& > :not(style)': {
          m: 1,
          width: 128,
          height: 128,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
      }}
    >
      <Paper square={false}>rounded corners</Paper>
      <Paper square>square corners</Paper>
    </Box>
  ),
};

export const Basic: Story = {
  render: () => (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 128,
          height: 128,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
      }}
    >
      <Paper elevation={0}>elevation=0</Paper>
      <Paper>default</Paper>
      <Paper elevation={3}>elevation=3</Paper>
    </Box>
  ),
}; 