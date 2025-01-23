import { createTheme } from '@mui/material/styles';
import { COLORS } from '../consts';

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          lineHeight: 1.5,
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderColor: COLORS[1],
          backgroundColor: COLORS[1],
          textTransform: 'none',
          color: 'white',
          borderRadius: '2.0625rem',
          fontSize: '.875rem',
          padding: '.625rem 1rem',
        },
      },
      variants: [
        {
          props: { variant: 'outlined' },
          style: {
            backgroundColor: '#FFF',
            color: '#562C2C',
            border: '1px solid #ccc',
            borderRadius: '2.0625rem',
            '&:hover': {
              backgroundColor: '#e0e0e0',
              borderColor: '#bbb',
            },
          },
        },
        {
          props: { variant: 'text' },
          style: {
            backgroundColor: 'transparent',
            color: '#562C2C',
            border: 'none',
            '&:hover': {
              backgroundColor: 'transparent',
              borderColor: 'none',
            },
          },
        },
      ],
    },
  },
  palette: {
    primary: {
      main: COLORS[1],
    },
    secondary: {
      main: COLORS[2],
    }
  },
  typography: {
    fontFamily: ['Poppins', 'Inter'].join(','),
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    allVariants: {
      color: COLORS[3],
    },
    h1: {
      fontSize: '3.25rem',
      fontWeight: 600,
      lineHeight: '3.75rem',
    },
    h2: {
        fontSize: '3.25rem',
        fontWeight: 600,
        lineHeight: '3.75rem',
    },
    h3: {
        fontSize: '1.5rem',
        fontWeight: 400,
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 500
    },
    body2: {
      fontSize: '12px',
      fontWeight: 600,
    },
  },
});

export default theme;
