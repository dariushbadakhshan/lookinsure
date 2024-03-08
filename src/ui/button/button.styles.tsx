import { colorPalette } from '@shared';

export const buttonStyles = {
  borderRadius: '24px',
  gap: '8px',
  width: '140px',

  '&.MuiButtonBase-root': {
    // Outline Buttons
    '&.MuiButton-outlined': {
      borderColor: colorPalette.border_main_brand,
    },

    // Containet Buttons
    '&.MuiButton-contained': {
      backgroundColor: colorPalette.surface_main_brand,
    },

    // Button Colors
    '&.MuiButton-outlinedError': {
      color: colorPalette.content_conditional_negative,
      borderColor: colorPalette.border_conditional_negative,
    },

    '&.MuiButton-sizeLarge': {
      height: '48px',
      fontSize: '16px',
      gap: '8px',
    },
    '&.MuiButton-sizeMedium': {
      height: '40px',
      fontSize: '14px',
      gap: '4px',
    },

    '& .MuiButton-startIcon': {
      marginRight: '0',
    },

    '& .MuiButton-endIcon': {
      marginLeft: '0',
    },
  },
};
