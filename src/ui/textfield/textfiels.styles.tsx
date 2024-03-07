import { colorPalette } from '../../shared/colorPalette';

export const textFieldStyles = {
  '&.withoutLabel': {
    '& .MuiInputBase-input': {
      paddingTop: '17px',
      paddingBottom: '16px'
    },

    '& .MuiInputAdornment-positionStart': {
      marginTop: '0 !important'
    }
  },

  '&.number_input': {
    '& .MuiInputBase-input': {
      textAlign: 'left'
    }
  },

  '&.right_align_input': {
    '& .MuiInputBase-input': {
      textAlign: 'left'
    }
  },

  '&.left_align_input': {
    '& .MuiInputBase-input': {
      textAlign: 'right'
    }
  },

  '&.center_align_input': {
    '& .MuiInputBase-input': {
      textAlign: 'center'
    }
  },

  '&.numeric_input': {
    '& .MuiInputBase-input': {
      textAlign: 'center !important',
      letterSpacing: '7px',
      paddingRight: '0 !important'
    },

    '& .MuiFilledInput-root': {
      paddingLeft: '0 !important'
    }
  },

  '&.ltr_input': {
    '& .MuiInputBase-input': {
      direction: 'rtl'
    }
  },

  '&.large_input': {
    '& .MuiFilledInput-root': {
      height: '48px'
    },

    '& .MuiFormLabel-root': {
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '21px',
      top: '-4px'
    },

    '& .MuiInputBase-input': {
      fontSize: '14px'
    },

    '&.withoutLabel': {
      '& .MuiInputBase-input': {
        paddingTop: '9.5px',
        paddingBottom: '9.5px'
      }
    }
  },

  '&.medium_input': {
    '& .MuiFilledInput-root': {
      height: '40px'
    },

    '& .MuiFormLabel-root': {
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '21px',
      top: '-7px'
    },

    '& .MuiInputBase-input': {
      fontSize: '14px',
      paddingTop: '18px',
      paddingBottom: '2px'
    },

    '&.withoutLabel': {
      '& .MuiInputBase-input': {
        paddingTop: '9px',
        paddingBottom: '9px'
      }
    }
  },

  '&.xlarge_input': {
    '& .MuiFilledInput-root': {
      height: '56px'
    }
  },

  '& .MuiInputBase-adornedStart': {
    '& .MuiInputBase-input': {
      paddingRight: '4px'
    }
  },

  '& .MuiFilledInput-root': {
    overflow: 'hidden',
    borderRadius: '8px',
    backgroundColor: colorPalette.surface_main,
    border: `1px solid ${colorPalette.border_main_primary}`,
    paddingLeft: '16px !important',
    height: '56px',

    '&:hover': {
      backgroundColor: 'transparent'
    },

    '&.Mui-focused': {
      backgroundColor: 'transparent',
      borderColor: colorPalette.border_main_brand
    },

    '&.Mui-error': {
      borderColor: colorPalette.border_conditional_negative
    },

    '&.Mui-disabled': {
      color: colorPalette.border_conditional_disable_light,
      borderColor: colorPalette.border_conditional_disable_light,

      backgroundColor: 'transparent',
      '&:hover': {
        backgroundColor: 'transparent'
      },

      '&.MuiInputLabel-root': {
        color: colorPalette.border_conditional_disable_light
      }
    },

    '& input[type=number]': {
      MozAppearance: 'textfield'
    },

    '& input[type=number]::-webkit-outer-spin-button': {
      WebkitAppearance: 'none',
      margin: 0
    },

    '& input[type=number]::-webkit-inner-spin-button': {
      WebkitAppearance: 'none',
      margin: 0
    }
  },

  '& .MuiInputLabel-root': {
    paddingLeft: '10px',
    color: colorPalette.content_main_secondary
  },

  '& .MuiInputBase-input': {
    paddingLeft: '0',
    color: colorPalette.content_main_primary
  },

  '.endAdornmentText': {
    '.MuiTypography-root': {
      borderLeft: '1px solid',
      borderColor: colorPalette.border_conditional_disable_light,
      paddingLeft: '8px',
      fontSize: '12px'
    }
  }
};
