import { createTheme } from '@mui/material/styles';

export const foundation = {
  colors: {
    granite: {
      50: '#F5F5F5',
      100: '#E9E9E9',
      200: '#D9D9D9',
      300: '#C4C4C4',
      400: '#9D9D9D',
      500: '#7B7B7B',
      600: '#555555',
      700: '#434343',
      800: '#262626',
      900: '#000000',
    },
    turquoise: {
      50: '#E6FFFA',
      100: '#B2F5EA',
      200: '#81E6D9',
      300: '#4FD1C5',
      400: '#38B2AC',
      500: '#319795',
      600: '#2C7A7B',
      700: '#285E61',
      800: '#234E52',
      900: '#1D4044',
    },
  },
};

export const theme = createTheme({
  palette: {
    primary: {
      main: foundation.colors.turquoise[500],
    },
    secondary: {
      main: foundation.colors.granite[500],
    },
  },
  typography: {
    fontFamily: '"Nunito Sans", sans-serif',
    h1: {
      fontWeight: 300,
    },
    h2: {
      fontWeight: 300,
    },
    h3: {
      fontWeight: 400,
    },
    h4: {
      fontWeight: 400,
    },
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 500,
    },
    subtitle1: {
      fontWeight: 400,
    },
    subtitle2: {
      fontWeight: 500,
    },
    body1: {
      fontWeight: 400,
    },
    body2: {
      fontWeight: 400,
    },
    button: {
      fontWeight: 700,
      textTransform: 'none',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'uppercase',
        },
      },
    },
  },
});

export default theme; 