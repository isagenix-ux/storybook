import { Box, Typography, Stack } from '@mui/material';
import type { Meta } from '@storybook/react';

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

const colors = {
  granite: {
    100: '#F6F6F6',  // 246, 246, 246
    200: '#EDEEE',   // 237, 238, 238
    500: '#D4D5D5',  // 212, 213, 213
    700: '#727677',  // 114, 118, 119
    800: '#54585A',  // 84, 88, 90
    900: '#303030',  // 48, 48, 48
  },
  turquoise: {
    100: '#F2F8F9',  // 242, 248, 249
    150: '#E0EEF1',  // 224, 238, 241
    200: '#BFDDE2',  // 191, 221, 226
    300: '#4099A8',  // 64, 153, 168
    500: '#00778B',  // 0, 119, 139
    700: '#0C5F6F',  // 12, 95, 111
    800: '#0C5F6F',  // 12, 95, 111
    900: '#003038',  // 0, 48, 56
  },
  gladeGreen: {
    50: '#E6F3EC',   // 230, 243, 236
    100: '#BFDFCF',  // 191, 223, 207
    200: '#7FC09E',  // 127, 192, 158
    300: '#40A16F',  // 64, 161, 111
    500: '#00823F',  // 0, 130, 63
  },
  confetti: {
    50: '#FDFCEE',   // 253, 252, 238
    100: '#FAF7D2',  // 250, 247, 210
    200: '#F4EEA6',  // 244, 238, 166
    300: '#F0E77A',  // 240, 231, 122
    500: '#EBDF4E',  // 235, 223, 78
  },
  laRioja: {
    50: '#F8F9E8',   // 248, 249, 232
    100: '#EDEEC3',  // 237, 238, 195
    200: '#DBDE87',  // 219, 222, 135
    300: '#CBCE4C',  // 203, 206, 76
    500: '#B9BE10',  // 185, 190, 16
  },
  tropicalRainForest: {
    50: '#E6EFEC',   // 230, 239, 236
    100: '#BFD4CF',  // 191, 212, 207
    200: '#7FAA9E',  // 127, 170, 158
    300: '#40806F',  // 64, 128, 111
    500: '#00563F',  // 0, 86, 63
  },
  scampi: {
    50: '#F0EFF5',   // 240, 239, 245
    100: '#D8D6E6',  // 216, 214, 230
    200: '#B0ADCC',  // 176, 173, 204
    300: '#8A86B4',  // 138, 134, 180
    500: '#635D9B',  // 99, 93, 155
  },
  steelBlue: {
    50: '#F2F6FA',   // 242, 246, 250
    100: '#DDE7F0',  // 221, 231, 240
    200: '#BBCFE2',  // 187, 207, 226
    300: '#9AB8D4',  // 154, 184, 212
    500: '#73A0C6',  // 120, 160, 198
  },
  hawaiianTan: {
    50: '#F6EEE9',   // 246, 238, 233
    100: '#E8D4C5',  // 232, 212, 197
    200: '#D1A98C',  // 209, 169, 140
    300: '#BC7F53',  // 188, 127, 83
    500: '#A5541A',  // 165, 84, 26
  },
  vividTangerine: {
    50: '#FFF4F1',   // 255, 244, 241
    100: '#FFE1DC',  // 255, 225, 220
    200: '#FFC3B8',  // 255, 195, 184
    300: '#FFA696',  // 255, 166, 150
    500: '#FF8873',  // 255, 136, 115
  },
  seaBuckthorn: {
    50: '#FFF8EB',   // 255, 248, 235
    100: '#FCECCC',  // 252, 236, 204
    200: '#FAD898',  // 250, 216, 152
    300: '#F8C666',  // 248, 198, 102
    500: '#F6B333',  // 246, 179, 51
  },
};

export const Primary = () => (
  <Box sx={{ p: 3 }}>
    <Typography variant="h4" sx={{ mb: 4 }}>
      Color Palette
    </Typography>
    <Typography variant="h5" sx={{ mb: 3 }}>
      Primary
    </Typography>
    <ColorSection title="Granite" colors={colors.granite} />
    <ColorSection title="Turquoise" colors={colors.turquoise} />
    <Typography variant="h5" sx={{ mt: 4, mb: 3 }}>
      Badging
    </Typography>
    <ColorSection title="Glade Green" colors={colors.gladeGreen} />
    <ColorSection title="Confetti" colors={colors.confetti} />
    <ColorSection title="La Rioja" colors={colors.laRioja} />
    <ColorSection title="Tropical Rain Forest" colors={colors.tropicalRainForest} />
    <ColorSection title="Hawaiian Tan" colors={colors.hawaiianTan} />
    <ColorSection title="Vivid Tangerine" colors={colors.vividTangerine} />
    <ColorSection title="Sea Buckthorn" colors={colors.seaBuckthorn} />
    <ColorSection title="Scampi" colors={colors.scampi} />
    <ColorSection title="Steel Blue" colors={colors.steelBlue} />
  </Box>
); 