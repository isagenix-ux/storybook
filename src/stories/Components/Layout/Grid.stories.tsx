import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';

const meta = {
  title: 'Components/Layout/Grid',
  component: Grid,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof Grid>;

// Styled Item component for demos
const Item = ({ children }: { children: React.ReactNode }) => (
  <Paper
    sx={{
      p: 2,
      textAlign: 'center',
      color: 'text.secondary',
      height: '100%',
    }}
  >
    {children}
  </Paper>
);

export const BasicGrid: Story = {
  render: () => (
    <Grid container spacing={2}>
      <Grid xs={8}>
        <Item>xs=8</Item>
      </Grid>
      <Grid xs={4}>
        <Item>xs=4</Item>
      </Grid>
      <Grid xs={4}>
        <Item>xs=4</Item>
      </Grid>
      <Grid xs={8}>
        <Item>xs=8</Item>
      </Grid>
    </Grid>
  ),
};

export const MultipleBreakpoints: Story = {
  render: () => (
    <Grid container spacing={2}>
      <Grid xs={6} md={8}>
        <Item>xs=6 md=8</Item>
      </Grid>
      <Grid xs={6} md={4}>
        <Item>xs=6 md=4</Item>
      </Grid>
      <Grid xs={6} md={4}>
        <Item>xs=6 md=4</Item>
      </Grid>
      <Grid xs={6} md={8}>
        <Item>xs=6 md=8</Item>
      </Grid>
    </Grid>
  ),
};

export const RowAndColumnSpacing: Story = {
  render: () => (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid xs={6}>
        <Item>1</Item>
      </Grid>
      <Grid xs={6}>
        <Item>2</Item>
      </Grid>
      <Grid xs={6}>
        <Item>3</Item>
      </Grid>
      <Grid xs={6}>
        <Item>4</Item>
      </Grid>
    </Grid>
  ),
};

export const ResponsiveGrid: Story = {
  render: () => (
    <Grid 
      container 
      spacing={{ xs: 2, md: 3 }} 
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {Array.from(Array(6)).map((_, index) => (
        <Grid xs={2} sm={4} md={4} key={index}>
          <Item>{index + 1}</Item>
        </Grid>
      ))}
    </Grid>
  ),
};

export const AutoLayout: Story = {
  render: () => (
    <Grid container spacing={3}>
      <Grid xs="auto">
        <Item>Variable width content</Item>
      </Grid>
      <Grid xs={6}>
        <Item>xs=6</Item>
      </Grid>
      <Grid xs>
        <Item>xs</Item>
      </Grid>
    </Grid>
  ),
};

export const NestedGrid: Story = {
  render: () => (
    <Grid container spacing={2}>
      <Grid container xs={12} spacing={1}>
        <Grid xs={6}>
          <Item>Nested xs=6</Item>
        </Grid>
        <Grid xs={6}>
          <Item>Nested xs=6</Item>
        </Grid>
      </Grid>
      <Grid container xs={12} spacing={1}>
        <Grid xs={6}>
          <Item>Nested xs=6</Item>
        </Grid>
        <Grid xs={6}>
          <Item>Nested xs=6</Item>
        </Grid>
      </Grid>
    </Grid>
  ),
};

export const CustomColumns: Story = {
  render: () => (
    <Grid container spacing={2} columns={16}>
      <Grid xs={8}>
        <Item>xs=8</Item>
      </Grid>
      <Grid xs={8}>
        <Item>xs=8</Item>
      </Grid>
    </Grid>
  ),
};

export const OffsetGrid: Story = {
  render: () => (
    <Grid container spacing={3} sx={{ flexGrow: 1 }}>
      <Grid xs={6} md={2} xsOffset={3} mdOffset={0}>
        <Item>1</Item>
      </Grid>
      <Grid xs={4} md={2} mdOffset="auto">
        <Item>2</Item>
      </Grid>
      <Grid xs={4} md={2} xsOffset={4} mdOffset={0}>
        <Item>3</Item>
      </Grid>
      <Grid xs md={6} mdOffset={2}>
        <Item>4</Item>
      </Grid>
    </Grid>
  ),
};

export const CenteredElements: Story = {
  render: () => (
    <Grid container spacing={2} minHeight={160}>
      <Grid xs display="flex" justifyContent="center" alignItems="center">
        <Avatar src="/static/images/avatar/1.jpg" />
      </Grid>
      <Grid display="flex" justifyContent="center" alignItems="center">
        <Avatar src="/static/images/avatar/2.jpg" />
      </Grid>
      <Grid xs display="flex" justifyContent="center" alignItems="center">
        <Avatar src="/static/images/avatar/3.jpg" />
      </Grid>
    </Grid>
  ),
}; 