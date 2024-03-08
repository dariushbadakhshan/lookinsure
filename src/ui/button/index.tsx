'use client';

import MuiButton, { ButtonProps } from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

import { buttonStyles } from './button.styles';

interface CustomButtonProps extends Omit<ButtonProps, 'variant' | 'size'> {
  size?: 'medium' | 'large';
  variant?: 'contained' | 'outlined';
}

export const Button = ({
  children,
  disabled,
  color = 'primary',
  variant = 'contained',
  size = 'medium',
  sx,
  ...rest
}: CustomButtonProps) => {
  return (
    <MuiButton
      sx={{
        ...buttonStyles,
        ...sx,
      }}
      variant={variant}
      color={color}
      size={size}
      {...rest}
    >
      {children}
    </MuiButton>
  );
};
