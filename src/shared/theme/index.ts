'use client';

import { ThemeOptions } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import { colorPalette } from '../colorPalette';
import { typography } from '../typography';
import React from 'react';

export const themePalette = {
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
    ...themePalette,
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
    tlm?: React.CSSProperties;
    tmm?: React.CSSProperties;
    lmr?: React.CSSProperties;
    lmm?: React.CSSProperties;
    lsr?: React.CSSProperties;
    blr?: React.CSSProperties;
    bmr?: React.CSSProperties;
    bsm?: React.CSSProperties;
    bsr?: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    tlm?: React.CSSProperties;
    tmm?: React.CSSProperties;
    lmr?: React.CSSProperties;
    lmm?: React.CSSProperties;
    lsr?: React.CSSProperties;
    blr?: React.CSSProperties;
    bmr?: React.CSSProperties;
    bsm?: React.CSSProperties;
    bsr?: React.CSSProperties;
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
    tlm?: true;
    tmm?: true;
    lmr?: true;
    lmm?: true;
    lsr?: true;
    blr?: true;
    bmr?: true;
    bsm?: true;
    bsr?: true;
  }
}
