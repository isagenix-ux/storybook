import { Typography, Stack } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';
import '@fontsource/nunito-sans/300.css';
import '@fontsource/nunito-sans/400.css';
import '@fontsource/nunito-sans/500.css';
import '@fontsource/nunito-sans/700.css';

const meta: Meta<typeof Typography> = {
  title: 'Foundation/Typography',
  component: Typography,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const AllVariants: Story = {
  render: () => (
    <Stack spacing={3}>
      <Typography variant="h1">
        h1. Heading - Nunito Sans Light
      </Typography>
      <Typography variant="h2">
        h2. Heading - Nunito Sans Light
      </Typography>
      <Typography variant="h3">
        h3. Heading - Nunito Sans Regular
      </Typography>
      <Typography variant="h4">
        h4. Heading - Nunito Sans Regular
      </Typography>
      <Typography variant="h5">
        h5. Heading - Nunito Sans Medium
      </Typography>
      <Typography variant="h6">
        h6. Heading - Nunito Sans Medium
      </Typography>
      <Typography variant="subtitle1">
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
      </Typography>
      <Typography variant="subtitle2">
        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
      </Typography>
      <Typography variant="body1">
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography variant="body2">
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography variant="button" display="block">
        button text
      </Typography>
      <Typography variant="caption" display="block">
        caption text
      </Typography>
      <Typography variant="overline" display="block">
        overline text
      </Typography>
    </Stack>
  ),
}; 