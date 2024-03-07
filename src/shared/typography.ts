import { createTheme } from '@mui/material';

const theme = createTheme();
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

  // tsm
  title_small_medium: {
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: '21px',
  },

  //llr
  label_large_regular: {
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '24px',
  },

  // llm
  label_large_medium: {
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

  // lsm
  label_small_medium: {
    fontSize: '12px',
    fontWeight: 500,
    lineHeight: '18px',
  },

  // lxsm
  label_x_small_regular: {
    fontSize: '10px',
    fontWeight: 400,
    lineHeight: '15px',
  },

  // blr
  body_large_regular: {
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '24px',
  },

  // blm
  body_large_medium: {
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '24px',
  },

  // blrl
  body_large_regular_long: {
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '30px',
  },

  // bmr
  body_medium_regular: {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '21px',
  },

  // bmm
  body_medium_medium: {
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: '21px',
  },

  // bmrp
  body_medium_regular_paragraph: {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '24px',
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

  // bsrp
  body_small_regular_paragraph: {
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: '20px',
  },

  // bxsm
  body_x_small_medium: {
    fontSize: '10px',
    fontWeight: 500,
    lineHeight: '15px',
  },

  // bxsr
  body_x_small_regular: {
    fontSize: '10px',
    fontWeight: 400,
    lineHeight: '15px',
  },

  //hlr

  headline_large_medium: {
    fontSize: '32px',
    fontWeight: 500,
  },

  //bsl

  body_small_strikethrought: {
    fontSize: '12px',
    fontWeight: '400',
    textDecoration: 'line-through !important',
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
