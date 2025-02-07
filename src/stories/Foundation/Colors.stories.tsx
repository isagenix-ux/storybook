import { Box, Typography, Stack } from '@mui/material';
import type { Meta } from '@storybook/react';
import { foundation } from '../../../.storybook/theme';

const meta: Meta = {
  title: 'Foundation/Colors',
  parameters: {
    layout: 'centered',
  },
};

export default meta;

const ColorBox = ({ color, name, value }: { color: string; name: string; value: string }) => (
  <Box sx={{ width: '200px', mb: 2 }}>
    <Box
      sx={{
        backgroundColor: color,
        width: '100%',
        height: '100px',
        borderRadius: 1,
        mb: 1,
      }}
    />
    <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
      {name}
    </Typography>
    <Typography variant="caption" display="block">
      {value}
    </Typography>
    <Typography variant="caption" display="block" sx={{ color: 'text.secondary' }}>
      {color}
    </Typography>
  </Box>
);

const ColorSection = ({ title, colors }: { title: string; colors: Record<string, string> }) => (
  <Box sx={{ mb: 4 }}>
    <Typography variant="h6" sx={{ mb: 2 }}>
      {title}
    </Typography>
    <Stack direction="row" spacing={2} flexWrap="wrap">
      {Object.entries(colors).map(([key, value]) => (
        <ColorBox
          key={key}
          color={value}
          name={`${title} ${key}`}
          value={value}
        />
      ))}
    </Stack>
  </Box>
);

export const Palette = () => (
  <Box sx={{ p: 3 }}>
    <Typography variant="h4" sx={{ mb: 4 }}>
      Color Palette
    </Typography>
    <ColorSection title="Granite" colors={foundation.colors.granite} />
    <ColorSection title="Turquoise" colors={foundation.colors.turquoise} />
  </Box>
); 