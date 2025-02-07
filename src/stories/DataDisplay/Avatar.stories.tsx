import { Avatar, AvatarGroup, Stack, styled, Badge } from '@mui/material';
import { deepOrange, deepPurple, green, pink } from '@mui/material/colors';
import FolderIcon from '@mui/icons-material/Folder';
import PageviewIcon from '@mui/icons-material/Pageview';
import AssignmentIcon from '@mui/icons-material/Assignment';
import type { Meta } from '@storybook/react';

const meta: Meta = {
  title: 'Data Display/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

// Styled components for badges
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}));

export const ImageAvatars = () => (
  <Stack direction="row" spacing={2}>
    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
  </Stack>
);

export const LetterAvatars = () => (
  <Stack direction="row" spacing={2}>
    <Avatar>H</Avatar>
    <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
    <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
  </Stack>
);

export const Sizes = () => (
  <Stack direction="row" spacing={2}>
    <Avatar
      alt="Remy Sharp"
      src="/static/images/avatar/1.jpg"
      sx={{ width: 24, height: 24 }}
    />
    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
    <Avatar
      alt="Remy Sharp"
      src="/static/images/avatar/1.jpg"
      sx={{ width: 56, height: 56 }}
    />
  </Stack>
);

export const IconAvatars = () => (
  <Stack direction="row" spacing={2}>
    <Avatar>
      <FolderIcon />
    </Avatar>
    <Avatar sx={{ bgcolor: pink[500] }}>
      <PageviewIcon />
    </Avatar>
    <Avatar sx={{ bgcolor: green[500] }}>
      <AssignmentIcon />
    </Avatar>
  </Stack>
);

export const Variants = () => (
  <Stack direction="row" spacing={2}>
    <Avatar sx={{ bgcolor: deepOrange[500] }} variant="square">
      N
    </Avatar>
    <Avatar sx={{ bgcolor: green[500] }} variant="rounded">
      <AssignmentIcon />
    </Avatar>
  </Stack>
);

export const Fallbacks = () => (
  <Stack direction="row" spacing={2}>
    <Avatar
      sx={{ bgcolor: deepOrange[500] }}
      alt="Remy Sharp"
      src="/broken-image.jpg"
    >
      B
    </Avatar>
    <Avatar
      sx={{ bgcolor: deepOrange[500] }}
      alt="Remy Sharp"
      src="/broken-image.jpg"
    />
    <Avatar src="/broken-image.jpg" />
  </Stack>
);

export const Grouped = () => (
  <Stack spacing={2}>
    <AvatarGroup max={4}>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
      <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
      <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
    </AvatarGroup>

    <AvatarGroup total={24}>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
      <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
      <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
    </AvatarGroup>
  </Stack>
);

export const WithBadge = () => (
  <Stack direction="row" spacing={2}>
    <StyledBadge
      overlap="circular"
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      variant="dot"
    >
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
    </StyledBadge>
    <Badge
      overlap="circular"
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      badgeContent={
        <SmallAvatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      }
    >
      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
    </Badge>
  </Stack>
); 