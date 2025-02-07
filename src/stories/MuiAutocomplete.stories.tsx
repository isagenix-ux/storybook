import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';

interface Film {
  title: string;
  year: number;
}

const meta: Meta<typeof Autocomplete> = {
  title: 'Components/Autocomplete',
  component: Autocomplete,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Autocomplete>;

// Simulated async function
const sleep = (delay = 0) => new Promise((resolve) => setTimeout(resolve, delay));

export const AsyncAutocomplete: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState<Film[]>([]);
    const loading = open && options.length === 0;

    React.useEffect(() => {
      let active = true;

      if (!loading) {
        return undefined;
      }

      (async () => {
        await sleep(1000); // Simulate network request
        if (active) {
          setOptions([
            { title: 'The Shawshank Redemption', year: 1994 },
            { title: 'The Godfather', year: 1972 },
            { title: 'The Dark Knight', year: 2008 },
          ]);
        }
      })();

      return () => {
        active = false;
      };
    }, [loading]);

    return (
      <Autocomplete
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        options={options}
        loading={loading}
        getOptionLabel={(option) => option.title}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Async Autocomplete"
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {loading ? <CircularProgress color="inherit" size={20} /> : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            }}
          />
        )}
      />
    );
  },
}; 