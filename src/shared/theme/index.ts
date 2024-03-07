'use client';

import { ThemeOptions } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import { colorPalette } from '../colorPalette';
import { typography } from '../typography';
import React from 'react';

export const lightThemePalette = {
  primary: {
    main: colorPalette.surface_main_brand,
    contrastText: colorPalette.surface_main,
  },
  secondary: {
    main: colorPalette.surface_main_secondary,
  },
  error: {
    main: colorPalette.surface_conditional_negative,
  },
  text: {
    // primary: colorPalette.textPrimary,
    // secondary: colorPalette.lightLeaf,
  },
  // leaf: {
  //   main: colorPalette.leaf,
  //   contrastText: colorPalette.white,
  // },
  // zarin: {
  //   main: colorPalette.zarin,
  //   contrastText: "#fff",
  // },
  sunset: {
    main: colorPalette.surface_main_brand,
    contrastText: '#fff',
  },
  ...colorPalette,
};

export const lightTheme: ThemeOptions = createTheme({
  direction: 'rtl',
  palette: {
    mode: 'light',
    ...lightThemePalette,
  },
  typography,
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'ghost' },
          style: {
            backgroundColor: colorPalette.surface_main_secondary,
          },
        },
      ],
    },
  },
});

declare module '@mui/material/styles' {
  interface Palette {
    sunset: Palette['primary'];
    leaf: Palette['primary'];
    zarin: Palette['primary'];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    sunset?: PaletteOptions['primary'];
    leaf?: PaletteOptions['primary'];
    zarin?: PaletteOptions['primary'];
  }

  interface TypographyVariants {
    tlm: React.CSSProperties;
    tmm: React.CSSProperties;
    tsm: React.CSSProperties;
    llr: React.CSSProperties;
    llm: React.CSSProperties;
    lmr: React.CSSProperties;
    lmm: React.CSSProperties;
    lsb: React.CSSProperties;
    lsm: React.CSSProperties;
    lsr: React.CSSProperties;
    blb: React.CSSProperties;
    blm: React.CSSProperties;
    blr: React.CSSProperties;
    blrr: React.CSSProperties;
    bmb: React.CSSProperties;
    bmm: React.CSSProperties;
    bmr: React.CSSProperties;
    bmrr: React.CSSProperties;
    bsb: React.CSSProperties;
    bsm: React.CSSProperties;
    bsr: React.CSSProperties;
    bxsb: React.CSSProperties;
    bxsm: React.CSSProperties;
    bxsr: React.CSSProperties;
    hlr: React.CSSProperties;
    bsl: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    tlm?: React.CSSProperties;
    tmm?: React.CSSProperties;
    tsm?: React.CSSProperties;
    llr?: React.CSSProperties;
    llm?: React.CSSProperties;
    lmr?: React.CSSProperties;
    lmm?: React.CSSProperties;
    lsb?: React.CSSProperties;
    lsm?: React.CSSProperties;
    lsr?: React.CSSProperties;
    blb?: React.CSSProperties;
    blm?: React.CSSProperties;
    blr?: React.CSSProperties;
    blrr?: React.CSSProperties;
    bmb?: React.CSSProperties;
    bmm?: React.CSSProperties;
    bmr?: React.CSSProperties;
    bmrr?: React.CSSProperties;
    bsb?: React.CSSProperties;
    bsm?: React.CSSProperties;
    bsr?: React.CSSProperties;
    bxsb?: React.CSSProperties;
    bxsm?: React.CSSProperties;
    bxsr?: React.CSSProperties;
    hlr?: React.CSSProperties;
    bsl?: React.CSSProperties;
  }
}

// Update the Button's color prop options
declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    ghost: true;
  }

  interface ButtonPropsSizeOverrides {
    xlarge: true;
  }
  interface ButtonPropsColorOverrides {
    sunset: true;
    leaf: true;
    zarin: true;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    tlm: true;
    tmm: true;
    tsm: true;
    llr: true;
    llm: true;
    lmr: true;
    lmm: true;
    lsb: true;
    lsm: true;
    lsr: true;
    blb: true;
    blm: true;
    blr: true;
    blrr: true;
    bmb: true;
    bmm: true;
    bmr: true;
    bmrr: true;
    bsb: true;
    bsm: true;
    bsr: true;
    bxsb: true;
    bxsm: true;
    bxsr: true;
    hlr: true;
    bsl: true;
  }
}
