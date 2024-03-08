'use client';
import { createTheme } from '@mui/material';

export const theme = createTheme();
// typography titles are contractions from: Name + Size + Weight : lmr=label+large+regular
export const typography = {
  fontFamily: 'IRANSans',
  // tlm
  title_large_medium: {
    fontSize: '20px',
    fontWeight: 500,
    lineHeight: '31.3px',
  },

  // tmm
  title_medium_medium: {
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '24px',
  },

  // lmr
  label_medium_regular: {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '21px',
  },

  // lmm
  label_medium_medium: {
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: '21px',
  },

  // lsr
  label_small_regular: {
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: '18px',
  },

  // blr
  body_large_regular: {
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '24px',
  },

  // bmr
  body_medium_regular: {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '21px',
  },

  // bsr
  body_small_regular: {
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: '18px',
  },

  // bsm
  body_small_medium: {
    fontSize: '12px',
    fontWeight: 500,
    lineHeight: '18px',
  },

  h1: {
    fontSize: '48px',
    fontWeight: 500,
    lineHeight: '80px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '24px',
      lineHeight: '40px',
    },
  },
  h2: {
    fontSize: '44px',
    lineHeight: '72px',
    fontWeight: 500,
    [theme.breakpoints.down('sm')]: {
      fontSize: '22px',
      lineHeight: '40px',
    },
  },
  h3: {
    fontWeight: 400,
    fontSize: '40px',
    lineHeight: '64px',
    letterSpacing: '0%',
    [theme.breakpoints.down('sm')]: {
      fontSize: '20px',
      fontWeight: 500,
      lineHeight: '32px',
    },
  },
  h4: {
    fontWeight: 400,
    fontSize: '32px',
    lineHeight: '56px',
    letterSpacing: '0.1%',
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px',
      fontWeight: 700,
      lineHeight: '24px',
    },
  },
  h5: {
    fontWeight: 400,
    fontSize: '24px',
    lineHeight: '40px',
    letterSpacing: '0%',
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px',
      fontWeight: 700,
      lineHeight: '24px',
    },
  },
  h6: {
    fontWeight: 500,
    fontSize: '18px',
    lineHeight: '32px',
    letterSpacing: '0.15%',
    [theme.breakpoints.down('sm')]: {
      fontSize: '12px',
      fontWeight: 700,
      lineHeight: '24px',
    },
  },
  subtitle1: {
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0%',
    [theme.breakpoints.down('sm')]: {
      fontSize: '12px',
      lineHeight: '16px',
    },
  },
  subtitle2: {
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '24px',
    letterSpacing: '-0.5%',
    [theme.breakpoints.down('sm')]: {
      fontSize: '10px',
      lineHeight: '16px',
    },
  },
  body1: {
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0%',
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px',
      lineHeight: '24px',
    },
  },
  body2: {
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '24px',
    letterSpacing: '0%',
    [theme.breakpoints.down('sm')]: {
      fontSize: '12px',
      fontWeight: 500,
      lineHeight: '24px',
    },
  },
  button: {
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '24px',
    letterSpacing: '0%',
  },
  caption: {
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '16px',
    letterSpacing: '-0.5%',
  },
  overline: {
    fontWeight: 400,
    fontSize: '10px',
    lineHeight: '16px',
    letterSpacing: '-0.5%',
  },
};
