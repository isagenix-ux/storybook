import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'The variant to use',
      options: ['standard', 'scrollable', 'fullWidth'],
      control: { type: 'radio' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'standard' },
      },
    },
    orientation: {
      description: 'The orientation of the tabs',
      options: ['horizontal', 'vertical'],
      control: { type: 'radio' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'horizontal' },
      },
    },
    textColor: {
      description: 'Determines the color of the text',
      options: ['primary', 'secondary', 'inherit'],
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
    },
    indicatorColor: {
      description: 'Determines the color of the indicator',
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
    },
    centered: {
      description: 'If true, the tabs will be centered',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    scrollButtons: {
      description: 'Determines the behavior of scroll buttons',
      options: ['auto', 'true', 'false'],
      control: { type: 'radio' },
      table: {
        type: { summary: 'auto | true | false' },
        defaultValue: { summary: 'auto' },
      },
    },
    allowScrollButtonsMobile: {
      description: 'If true, scroll buttons will be displayed on mobile',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Basic: Story = {
  render: () => {
    const [value, setValue] = React.useState(0);
    return (
      <Box sx={{ width: '100%' }}>
        <Tabs value={value} onChange={(_, newValue) => setValue(newValue)}>
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
        <TabPanel value={value} index={0}>
          Item One Content
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two Content
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three Content
        </TabPanel>
      </Box>
    );
  },
};

export const WithIcons: Story = {
  render: () => {
    const [value, setValue] = React.useState(0);
    return (
      <Tabs value={value} onChange={(_, newValue) => setValue(newValue)}>
        <Tab icon={<PhoneIcon />} label="RECENTS" />
        <Tab icon={<FavoriteIcon />} label="FAVORITES" />
        <Tab icon={<PersonPinIcon />} label="NEARBY" />
      </Tabs>
    );
  },
};

export const Vertical: Story = {
  render: () => {
    const [value, setValue] = React.useState(0);
    return (
      <Box sx={{ display: 'flex' }}>
        <Tabs
          orientation="vertical"
          value={value}
          onChange={(_, newValue) => setValue(newValue)}
          sx={{ borderRight: 1, borderColor: 'divider' }}
        >
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
        <TabPanel value={value} index={0}>
          Item One Content
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two Content
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three Content
        </TabPanel>
      </Box>
    );
  },
};

export const Scrollable: Story = {
  render: () => {
    const [value, setValue] = React.useState(0);
    return (
      <Tabs
        value={value}
        onChange={(_, newValue) => setValue(newValue)}
        variant="scrollable"
        scrollButtons="auto"
      >
        {[...Array(10)].map((_, index) => (
          <Tab key={index} label={`Item ${index + 1}`} />
        ))}
      </Tabs>
    );
  },
};

export const FullWidth: Story = {
  render: () => {
    const [value, setValue] = React.useState(0);
    return (
      <Tabs
        value={value}
        onChange={(_, newValue) => setValue(newValue)}
        variant="fullWidth"
      >
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
    );
  },
}; 