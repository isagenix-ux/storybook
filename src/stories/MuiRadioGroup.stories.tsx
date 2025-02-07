import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormHelperText from '@mui/material/FormHelperText';

const meta = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  argTypes: {
    defaultValue: {
      control: 'text',
      description: 'The default value of the radio group',
    },
    name: {
      control: 'text',
      description: 'The name used to reference the value of the control',
    },
    row: {
      control: 'boolean',
      description: 'Display group of elements in a compact row',
      defaultValue: false,
    },
    disabled: {
      control: 'boolean',
      description: 'If true, all radio buttons will be disabled',
      defaultValue: false,
    },
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Basic: Story = {
  render: () => (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
  ),
};

export const Row: Story = {
  render: () => (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
  ),
};

export const WithError: Story = {
  render: () => (
    <FormControl error>
      <FormLabel id="demo-error-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-error-radio-buttons-group-label"
        name="error-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
      <FormHelperText>Please select an option</FormHelperText>
    </FormControl>
  ),
};

export const Disabled: Story = {
  render: () => (
    <FormControl>
      <FormLabel id="demo-disabled-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-disabled-radio-buttons-group-label"
        defaultValue="female"
        name="disabled-radio-buttons-group"
        disabled
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = React.useState('female');
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue((event.target as HTMLInputElement).value);
    };

    return (
      <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group-label"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>
    );
  },
}; 