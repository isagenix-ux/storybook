import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const meta = {
  title: 'Components/Grid',
  component: Grid,
  tags: ['autodocs'],
  argTypes: {
    spacing: {
      description: 'Defines the space between the type items',
      control: { type: 'number', min: 0, max: 10 },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 2 },
      },
    },
    direction: {
      description: 'Defines the flex-direction style property',
      options: ['row', 'row-reverse', 'column', 'column-reverse'],
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'row' },
      },
    },
    justifyContent: {
      description: 'Defines the justify-content style property',
      options: ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'],
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'flex-start' },
      },
    },
    alignItems: {
      description: 'Defines the align-items style property',
      options: ['flex-start', 'center', 'flex-end', 'stretch', 'baseline'],
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'stretch' },
      },
    },
    container: {
      description: 'If true, the component will have the flex container behavior',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    item: {
      description: 'If true, the component will have the flex item behavior',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
  },
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof Grid>;

export const Basic: Story = {
  render: () => (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
    </Box>
  ),
};

export const ResponsiveGrid: Story = {
  render: () => (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Item>xs=12 sm=6 md=4</Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Item>xs=12 sm=6 md=4</Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Item>xs=12 sm=6 md=4</Item>
        </Grid>
      </Grid>
    </Box>
  ),
};

export const AutoLayout: Story = {
  render: () => (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Item>xs</Item>
        </Grid>
        <Grid item xs>
          <Item>xs</Item>
        </Grid>
        <Grid item xs>
          <Item>xs</Item>
        </Grid>
      </Grid>
    </Box>
  ),
};

export const NestedGrid: Story = {
  render: () => (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid container item spacing={3}>
          <Grid item xs={4}>
            <Item>Nested 1</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>Nested 2</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>Nested 3</Item>
          </Grid>
        </Grid>
        <Grid container item spacing={3}>
          <Grid item xs={4}>
            <Item>Nested 4</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>Nested 5</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>Nested 6</Item>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  ),
};

export const Spacing: Story = {
  render: () => (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={4}>
        {[0, 1, 2, 3, 4, 5].map((value) => (
          <Grid key={value} item xs={2}>
            <Item>Spacing {value}</Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  ),
};

export const Direction: Story = {
  render: () => (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container direction="column" spacing={2}>
        <Grid item xs>
          <Item>Column 1</Item>
        </Grid>
        <Grid item xs>
          <Item>Column 2</Item>
        </Grid>
        <Grid item xs>
          <Item>Column 3</Item>
        </Grid>
      </Grid>
    </Box>
  ),
}; 