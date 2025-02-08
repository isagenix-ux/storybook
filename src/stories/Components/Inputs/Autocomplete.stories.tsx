import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const meta: Meta<typeof Autocomplete> = {
  title: 'Components/Inputs/Autocomplete',
  component: Autocomplete,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Autocomplete>;

const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  // Add more options as needed
];

export const Basic: Story = {
  render: () => (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />
  ),
};

export const Multiple: Story = {
  render: () => (
    <Autocomplete
      multiple
      id="tags-standard"
      options={top100Films}
      getOptionLabel={(option) => option.label}
      sx={{ width: 300 }}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="standard"
          label="Multiple values"
          placeholder="Favorites"
        />
      )}
    />
  ),
}; 