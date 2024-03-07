import { colorPalette } from '@shared';

export const buttonStyles = {
  borderRadius: '8px',
  gap: '8px',

  '&.MuiButtonBase-root': {
    // Outline Buttons
    '&.MuiButton-outlined': {
      borderColor: colorPalette.border_main_brand,

      '&:hover': {
        backgroundColor: colorPalette.content_main_brand_light,
      },

      '&.Mui-disabled': {
        borderColor: colorPalette.border_conditional_disable_light,
        color: colorPalette.content_conditional_on_disable_light,
      },
    },

    // Containet Buttons
    '&.MuiButton-contained': {
      backgroundColor: colorPalette.surface_main_brand,

      '&.Mui-disabled': {
        backgroundColor: colorPalette.surface_conditional_disable_light,
        color: colorPalette.content_conditional_on_disable_light,
      },
    },

    // Ghost Buttons
    '&.MuiButton-ghost': {
      backgroundColor: colorPalette.surface_main_secondary,

      '&.Mui-disabled': {
        backgroundColor: colorPalette.surface_conditional_disable_light,
        color: colorPalette.content_conditional_on_disable_light,
      },

      // '&:hover': {
      //   backgroundColor: colorPalette.sushiNeutral003
      // }
    },

    // Text Buttons
    '&.MuiButton-text': {
      color: colorPalette.content_main_brand,
      '&.MuiButton-colorInherit': {
        color: colorPalette.content_main_primary,
      },
      '&.Mui-disabled': {
        color: colorPalette.content_conditional_disable,
      },
      '&.MuiButton-sizeLarge': {
        fontSize: '14px',
      },
    },

    // Button Colors
    '&.MuiButton-outlinedError': {
      color: colorPalette.content_conditional_negative,
      borderColor: colorPalette.border_conditional_negative,

      '&:hover': {
        backgroundColor: colorPalette.content_conditional_negative_light,
      },
    },

    // Button Sizes
    '&.MuiButton-sizeXlarge': {
      height: '56px',
      fontSize: '16px',
      gap: '8px',
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
    '&.MuiButton-sizeSmall': {
      height: '32px',
      fontSize: '12px',
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
