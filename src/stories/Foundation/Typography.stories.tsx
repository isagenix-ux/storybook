import React from 'react';
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

export const Headings: Story = {
  render: () => (
    <Stack spacing={3}>
      {/* H1 Variants */}
      <Stack spacing={1}>
        <Typography variant="h1" sx={{ fontWeight: 400 }}>
          H1 Sans 400 - Isagenix International LLC
        </Typography>
        <Typography color="text.secondary" variant="caption">
          64/72
        </Typography>
      </Stack>

      <Stack spacing={1}>
        <Typography variant="h1" sx={{ fontWeight: 600 }}>
          H1 Sans 600 - Isagenix International LLC
        </Typography>
        <Typography color="text.secondary" variant="caption">
          64/72
        </Typography>
      </Stack>

      <Stack spacing={1}>
        <Typography variant="h1" sx={{ fontWeight: 700 }}>
          H1 Sans 700 - Isagenix International LLC
        </Typography>
        <Typography color="text.secondary" variant="caption">
          64/72
        </Typography>
      </Stack>

      <Stack spacing={1}>
        <Typography variant="h1" sx={{ fontWeight: 800 }}>
          H1 Sans 800 - Isagenix International LLC
        </Typography>
        <Typography color="text.secondary" variant="caption">
          64/72
        </Typography>
      </Stack>

      {/* H2 Variants */}
      <Stack spacing={1}>
        <Typography variant="h2" sx={{ fontWeight: 400 }}>
          H2 Sans 400 - Isagenix International LLC
        </Typography>
        <Typography color="text.secondary" variant="caption">
          48/56
        </Typography>
      </Stack>

      <Stack spacing={1}>
        <Typography variant="h2" sx={{ fontWeight: 600 }}>
          H2 Sans 600 - Isagenix International LLC
        </Typography>
        <Typography color="text.secondary" variant="caption">
          48/56
        </Typography>
      </Stack>

      <Stack spacing={1}>
        <Typography variant="h2" sx={{ fontWeight: 700 }}>
          H2 Sans 700 - Isagenix International LLC
        </Typography>
        <Typography color="text.secondary" variant="caption">
          48/56
        </Typography>
      </Stack>

      <Stack spacing={1}>
        <Typography variant="h2" sx={{ fontWeight: 800 }}>
          H2 Sans 800 - Isagenix International LLC
        </Typography>
        <Typography color="text.secondary" variant="caption">
          48/56
        </Typography>
      </Stack>

      {/* H3 Variants */}
      <Stack spacing={1}>
        <Typography variant="h3" sx={{ fontWeight: 400 }}>
          H3 Sans 400 - Isagenix International LLC
        </Typography>
        <Typography color="text.secondary" variant="caption">
          32/44
        </Typography>
      </Stack>

      <Stack spacing={1}>
        <Typography variant="h3" sx={{ fontWeight: 600 }}>
          H3 Sans 600 - Isagenix International LLC
        </Typography>
        <Typography color="text.secondary" variant="caption">
          32/44
        </Typography>
      </Stack>

      <Stack spacing={1}>
        <Typography variant="h3" sx={{ fontWeight: 700 }}>
          H3 Sans 700 - Isagenix International LLC
        </Typography>
        <Typography color="text.secondary" variant="caption">
          32/44
        </Typography>
      </Stack>

      <Stack spacing={1}>
        <Typography variant="h3" sx={{ fontWeight: 800 }}>
          H3 Sans 800 - Isagenix International LLC
        </Typography>
        <Typography color="text.secondary" variant="caption">
          32/44
        </Typography>
      </Stack>

      {/* H4 Variants */}
      <Stack spacing={1}>
        <Typography variant="h4" sx={{ fontWeight: 400 }}>
          H4 Sans 400 - Isagenix International LLC
        </Typography>
        <Typography color="text.secondary" variant="caption">
          24/36
        </Typography>
      </Stack>

      <Stack spacing={1}>
        <Typography variant="h4" sx={{ fontWeight: 600 }}>
          H4 Sans 600 - Isagenix International LLC
        </Typography>
        <Typography color="text.secondary" variant="caption">
          24/36
        </Typography>
      </Stack>

      <Stack spacing={1}>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          H4 Sans 700 - Isagenix International LLC
        </Typography>
        <Typography color="text.secondary" variant="caption">
          24/36
        </Typography>
      </Stack>

      <Stack spacing={1}>
        <Typography variant="h4" sx={{ fontWeight: 800 }}>
          H4 Sans 800 - Isagenix International LLC
        </Typography>
        <Typography color="text.secondary" variant="caption">
          24/36
        </Typography>
      </Stack>

      {/* H5 Variants */}
      <Stack spacing={1}>
        <Typography variant="h5" sx={{ fontWeight: 400 }}>
          H5 Sans 400 - Isagenix International LLC
        </Typography>
        <Typography color="text.secondary" variant="caption">
          21/28
        </Typography>
      </Stack>

      <Stack spacing={1}>
        <Typography variant="h5" sx={{ fontWeight: 600 }}>
          H5 Sans 600 - Isagenix International LLC
        </Typography>
        <Typography color="text.secondary" variant="caption">
          21/28
        </Typography>
      </Stack>

      <Stack spacing={1}>
        <Typography variant="h5" sx={{ fontWeight: 700 }}>
          H5 Sans 700 - Isagenix International LLC
        </Typography>
        <Typography color="text.secondary" variant="caption">
          21/28
        </Typography>
      </Stack>

      <Stack spacing={1}>
        <Typography variant="h5" sx={{ fontWeight: 800 }}>
          H5 Sans 800 - Isagenix International LLC
        </Typography>
        <Typography color="text.secondary" variant="caption">
          21/28
        </Typography>
      </Stack>

      {/* Paragraph 1 Variants */}
      <Stack spacing={1}>
        <Typography variant="body1" sx={{ fontWeight: 400 }}>
          Paragraph 1 Sans 400 - Isagenix International LLC
        </Typography>
        <Typography color="text.secondary" variant="caption">
          16/24
        </Typography>
      </Stack>

      <Stack spacing={1}>
        <Typography variant="body1" sx={{ fontWeight: 600 }}>
          Paragraph 1 Sans 600 - Isagenix International LLC
        </Typography>
        <Typography color="text.secondary" variant="caption">
          16/24
        </Typography>
      </Stack>

      <Stack spacing={1}>
        <Typography variant="body1" sx={{ fontWeight: 700 }}>
          Paragraph 1 Sans 700 - Isagenix International LLC
        </Typography>
        <Typography color="text.secondary" variant="caption">
          16/24
        </Typography>
      </Stack>

      <Stack spacing={1}>
        <Typography variant="body1" sx={{ fontWeight: 800 }}>
          Paragraph 1 Sans 800 - Isagenix International LLC
        </Typography>
        <Typography color="text.secondary" variant="caption">
          16/24
        </Typography>
      </Stack>

      {/* Paragraph 2 Variants */}
      <Stack spacing={1}>
        <Typography variant="body2" sx={{ fontWeight: 400 }}>
          Paragraph 2 Sans 400 - Isagenix International LLC
        </Typography>
        <Typography color="text.secondary" variant="caption">
          14/20
        </Typography>
      </Stack>

      <Stack spacing={1}>
        <Typography variant="body2" sx={{ fontWeight: 600 }}>
          Paragraph 2 Sans 600 - Isagenix International LLC
        </Typography>
        <Typography color="text.secondary" variant="caption">
          14/20
        </Typography>
      </Stack>

      <Stack spacing={1}>
        <Typography variant="body2" sx={{ fontWeight: 700 }}>
          Paragraph 2 Sans 700 - Isagenix International LLC
        </Typography>
        <Typography color="text.secondary" variant="caption">
          14/20
        </Typography>
      </Stack>

      <Stack spacing={1}>
        <Typography variant="body2" sx={{ fontWeight: 800 }}>
          Paragraph 2 Sans 800 - Isagenix International LLC
        </Typography>
        <Typography color="text.secondary" variant="caption">
          14/20
        </Typography>
      </Stack>

      {/* Paragraph 3 Variants */}
      <Stack spacing={1}>
        <Typography sx={{ fontSize: '12px', lineHeight: '16px', fontWeight: 400 }}>
          Paragraph 3 Sans 400 - Isagenix International LLC
        </Typography>
        <Typography color="text.secondary" variant="caption">
          12/16
        </Typography>
      </Stack>

      <Stack spacing={1}>
        <Typography sx={{ fontSize: '12px', lineHeight: '16px', fontWeight: 600 }}>
          Paragraph 3 Sans 600 - Isagenix International LLC
        </Typography>
        <Typography color="text.secondary" variant="caption">
          12/16
        </Typography>
      </Stack>

      <Stack spacing={1}>
        <Typography sx={{ fontSize: '12px', lineHeight: '16px', fontWeight: 700 }}>
          Paragraph 3 Sans 700 - Isagenix International LLC
        </Typography>
        <Typography color="text.secondary" variant="caption">
          12/16
        </Typography>
      </Stack>

      <Stack spacing={1}>
        <Typography sx={{ fontSize: '12px', lineHeight: '16px', fontWeight: 800 }}>
          Paragraph 3 Sans 800 - Isagenix International LLC
        </Typography>
        <Typography color="text.secondary" variant="caption">
          12/16
        </Typography>
      </Stack>
    </Stack>
  ),
};

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