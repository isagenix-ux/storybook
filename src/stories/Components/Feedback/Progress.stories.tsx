import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

const meta = {
  title: 'Components/Feedback/Progress',
  component: CircularProgress,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CircularProgress>;

export default meta;
type Story = StoryObj<typeof CircularProgress>;

export const CircularIndeterminate: Story = {
  render: () => <CircularProgress />,
};

export const CircularColor: Story = {
  render: () => (
    <Stack spacing={2} direction="row">
      <CircularProgress color="secondary" />
      <CircularProgress color="success" />
      <CircularProgress color="inherit" />
    </Stack>
  ),
};

export const CircularSize: Story = {
  render: () => (
    <Stack spacing={2} direction="row">
      <CircularProgress size={24} />
      <CircularProgress size={40} />
      <CircularProgress size={56} />
    </Stack>
  ),
};

export const CircularDeterminate: Story = {
  render: () => (
    <Stack spacing={2} direction="row">
      <CircularProgress variant="determinate" value={25} />
      <CircularProgress variant="determinate" value={50} />
      <CircularProgress variant="determinate" value={75} />
      <CircularProgress variant="determinate" value={100} />
    </Stack>
  ),
};

function CircularProgressWithLabel(props: { value: number }) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

export const CircularWithLabel: Story = {
  render: () => <CircularProgressWithLabel value={75} />,
};

export const LinearIndeterminate: Story = {
  render: () => <LinearProgress />,
};

export const LinearColor: Story = {
  render: () => (
    <Stack spacing={2}>
      <LinearProgress color="secondary" />
      <LinearProgress color="success" />
      <LinearProgress color="inherit" />
    </Stack>
  ),
};

export const LinearDeterminate: Story = {
  render: () => <LinearProgress variant="determinate" value={60} />,
};

export const LinearBuffer: Story = {
  render: () => <LinearProgress variant="buffer" value={60} valueBuffer={80} />,
};

function LinearProgressWithLabel(props: { value: number }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

export const LinearWithLabel: Story = {
  render: () => <LinearProgressWithLabel value={80} />,
};

export const DelayedAppearance: Story = {
  render: () => {
    const [loading, setLoading] = React.useState(false);
    const [query, setQuery] = React.useState('idle');
    const timerRef = React.useRef<number>();

    React.useEffect(
      () => () => {
        clearTimeout(timerRef.current);
      },
      [],
    );

    const handleClickLoading = () => {
      setLoading((prevLoading) => !prevLoading);
      setQuery('idle');
      timerRef.current = window.setTimeout(() => {
        setQuery('progress');
      }, 1000);
    };

    return (
      <Box sx={{ width: '100%' }}>
        <Box sx={{ mb: 2 }}>
          <button onClick={handleClickLoading}>
            {loading ? 'Stop' : 'Simulate Load'}
          </button>
        </Box>
        <Box sx={{ width: '100%' }}>
          {query === 'progress' && <LinearProgress />}
        </Box>
      </Box>
    );
  },
}; 