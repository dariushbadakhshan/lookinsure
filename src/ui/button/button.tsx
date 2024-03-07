'use client';

import MuiButton, { ButtonProps } from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

import { buttonStyles } from './button.styles';

interface CustomButtonProps extends Omit<ButtonProps, 'variant' | 'size'> {
  isLoading?: boolean;
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  variant?: 'contained' | 'text' | 'outlined' | 'ghost';
}

export const Button = ({
  children,
  isLoading = false,
  disabled,
  color = 'primary',
  variant = 'contained',
  size = 'xlarge',
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
      disabled={isLoading || disabled}
      // onClick={action('button clicked')}
      size={size}
      {...rest}
    >
      {isLoading ? <CircularProgress color="inherit" /> : children}
    </MuiButton>
  );
};
