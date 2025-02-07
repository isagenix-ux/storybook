import { createTheme } from '@mui/material/styles';

export const foundation = {
  colors: {
    granite: {
      100: '#F6F6F6',  // rgb(246, 246, 246)
      200: '#EDEEE',   // rgb(237, 238, 238)
      500: '#D4D5D5',  // rgb(212, 213, 213)
      700: '#727677',  // rgb(114, 118, 119)
      800: '#54585A',  // rgb(84, 88, 90)
      900: '#303030',  // rgb(48, 48, 48)
    },
    turquoise: {
      100: '#F2F8F9',  // rgb(242, 248, 249)
      150: '#E0EEF1',  // rgb(224, 238, 241)
      200: '#BFDDE2',  // rgb(191, 221, 226)
      300: '#4099A8',  // rgb(64, 153, 168)
      500: '#00778B',  // rgb(0, 119, 139)
      700: '#0C5F6F',  // rgb(12, 95, 111)
      800: '#0C5F6F',  // rgb(12, 95, 111)
      900: '#003038',  // rgb(0, 48, 56)
    },
  },
};

export const theme = createTheme({
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
}); 