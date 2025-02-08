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

// Helper function to convert hex to rgb
const hexToRgb = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
};

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
    <Stack spacing={0.5}>
      <Typography variant="caption" display="block" sx={{ color: 'text.secondary' }}>
        {color}
      </Typography>
      <Typography variant="caption" display="block" sx={{ color: 'text.secondary' }}>
        {(() => {
          const rgb = hexToRgb(color);
          return rgb ? `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})` : '';
        })()}
      </Typography>
    </Stack>
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

export const Primary = () => (
  <Box sx={{ p: 3 }}>
    <Typography variant="h4" sx={{ mb: 4 }}>
      Color Palette
    </Typography>
    <ColorSection title="Granite" colors={foundation.colors.granite} />
    <ColorSection title="Turquoise" colors={foundation.colors.turquoise} />
  </Box>
); 