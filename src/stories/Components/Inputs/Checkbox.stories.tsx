import { Checkbox, FormControlLabel } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Inputs/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'info', 'success', 'warning', 'default'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

const CheckboxWithState = (args: any) => {
  const [checked, setChecked] = useState(false);
  return (
    <Checkbox
      {...args}
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
    />
  );
};

const CheckboxWithLabelAndState = (args: any) => {
  const [checked, setChecked] = useState(false);
  return (
    <FormControlLabel
      control={
        <Checkbox
          {...args}
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
      }
      label="Checkbox with label"
    />
  );
};

export const Basic: Story = {
  render: (args) => <CheckboxWithState {...args} />,
  args: {
    disabled: false,
    color: 'primary',
  },
};

export const WithLabel: Story = {
  render: (args) => <CheckboxWithLabelAndState {...args} />,
  args: {
    disabled: false,
    color: 'primary',
  },
};

export const Disabled: Story = {
  args: {
    checked: true,
    disabled: true,
    color: 'primary',
  },
}; 