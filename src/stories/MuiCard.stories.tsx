import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const meta = {
  title: 'MUI/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    raised: {
      description: 'If true, the card will use raised styling',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    elevation: {
      description: 'Shadow depth, corresponds to dp in the spec',
      control: { type: 'number', min: 0, max: 24, step: 1 },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 1 },
      },
    },
    variant: {
      description: 'The variant to use',
      options: ['elevation', 'outlined'],
      control: { type: 'radio' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'elevation' },
      },
    },
    sx: {
      description: 'The system prop that allows defining system overrides as well as additional CSS styles',
      table: {
        type: { summary: 'object' },
      },
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof Card>;

export const Basic: Story = {
  args: {
    sx: { maxWidth: 345 },
    children: (
      <>
        <CardContent>
          <Typography variant="h5" component="div">
            Card Title
          </Typography>
          <Typography variant="body2">
            This is a basic card with some content.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </>
    ),
  },
};

export const WithMedia: Story = {
  args: {
    sx: { maxWidth: 345 },
    children: (
      <>
        <CardMedia
          component="img"
          height="140"
          image="https://source.unsplash.com/random/345x140/?nature"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Card with Media
          </Typography>
          <Typography variant="body2" color="text.secondary">
            This card includes an image above the content. Images can help provide visual context and improve engagement.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </>
    ),
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    sx: { maxWidth: 345 },
    children: (
      <CardContent>
        <Typography variant="h5" component="div">
          Outlined Card
        </Typography>
        <Typography variant="body2">
          This card uses the outlined variant instead of elevation.
        </Typography>
      </CardContent>
    ),
  },
};

export const Elevated: Story = {
  args: {
    elevation: 12,
    sx: { maxWidth: 345 },
    children: (
      <CardContent>
        <Typography variant="h5" component="div">
          Elevated Card
        </Typography>
        <Typography variant="body2">
          This card has a higher elevation value (12) for more pronounced shadow.
        </Typography>
      </CardContent>
    ),
  },
}; 