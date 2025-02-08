import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

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

const Item = ({ children }: { children: React.ReactNode }) => (
  <Paper
    sx={{
      p: 2,
      textAlign: 'center',
      color: 'text.secondary',
      bgcolor: 'background.default',
    }}
  >
    {children}
  </Paper>
);

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

export const Responsive: Story = {
  render: () => (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }}>
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
      <Grid container spacing={2}>
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
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item>
            <Grid container spacing={1}>
              <Grid item xs={4}>
                <Item>Nested xs=4</Item>
              </Grid>
              <Grid item xs={8}>
                <Item>Nested xs=8</Item>
              </Grid>
            </Grid>
          </Item>
        </Grid>
      </Grid>
    </Box>
  ),
}; 