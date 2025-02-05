import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { foundation } from '../../.storybook/theme';
import Paper from '@mui/material/Paper';

const meta = {
  title: 'Foundation',
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

interface ColorBlockProps {
  color: string;
  name: string;
  value: string;
}

const ColorBlock = ({ color, name, value }: ColorBlockProps) => (
  <Paper 
    elevation={1} 
    sx={{ 
      p: 2, 
      mb: 1,
      display: 'flex',
      alignItems: 'center',
      gap: 2
    }}
  >
    <Box 
      sx={{ 
        width: 100, 
        height: 100, 
        backgroundColor: color,
        borderRadius: 1,
        border: '1px solid rgba(0,0,0,0.1)'
      }} 
    />
    <Box>
      <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
        {name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {value}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {color}
      </Typography>
    </Box>
  </Paper>
);

interface ColorSectionProps {
  title: string;
  colors: Record<string, string>;
}

const ColorSection = ({ title, colors }: ColorSectionProps) => (
  <Box sx={{ mb: 4 }}>
    <Typography variant="h5" sx={{ mb: 2 }}>
      {title}
    </Typography>
    {Object.entries(colors).map(([key, value]) => (
      <ColorBlock 
        key={key} 
        color={value} 
        name={`${title} ${key}`} 
        value={value}
      />
    ))}
  </Box>
);

export const Colors: Story = {
  render: () => (
    <Box sx={{ maxWidth: 800 }}>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Foundation Colors
      </Typography>
      
      <ColorSection 
        title="Turquoise" 
        colors={foundation.colors.turquoise} 
      />
      
      <ColorSection 
        title="Granite" 
        colors={foundation.colors.granite} 
      />
    </Box>
  ),
}; 