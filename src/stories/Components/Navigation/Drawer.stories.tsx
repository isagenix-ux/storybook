import { useState } from 'react';
import {
  Drawer,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Divider,
  IconButton,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Inbox as InboxIcon,
  Mail as MailIcon,
  ChevronLeft as ChevronLeftIcon,
} from '@mui/icons-material';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Drawer> = {
  title: 'Components/Navigation/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Drawer>;

const DrawerWithState = ({ ...args }) => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const list = (
    <Box sx={{ width: 250 }} role="presentation">
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', p: 1 }}>
        <IconButton onClick={toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </Box>
      <Divider />
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button 
        onClick={toggleDrawer}
        variant="contained"
        startIcon={<MenuIcon />}
      >
        Open Drawer
      </Button>
      <Drawer
        {...args}
        open={open}
        onClose={toggleDrawer}
      >
        {list}
      </Drawer>
    </div>
  );
};

export const Basic: Story = {
  render: (args) => <DrawerWithState {...args} />,
  args: {
    anchor: 'left',
  },
};

export const RightAligned: Story = {
  render: (args) => <DrawerWithState {...args} />,
  args: {
    anchor: 'right',
  },
};

export const Temporary: Story = {
  render: (args) => <DrawerWithState {...args} />,
  args: {
    anchor: 'left',
    variant: 'temporary',
  },
};

export const Persistent: Story = {
  render: (args) => <DrawerWithState {...args} />,
  args: {
    anchor: 'left',
    variant: 'persistent',
  },
}; 