import MuiTypography, { TypographyProps } from '@mui/material/Typography';

export type CustomTypographyVarients =
  | 'title_large_medium'
  | 'title_medium_medium'
  | 'label_medium_regular'
  | 'label_medium_medium'
  | 'label_small_regular'
  | 'body_large_regular'
  | 'body_medium_regular'
  | 'body_small_regular'
  | 'body_small_medium';

enum TypographyEnum {
  tlm = 'title_large_medium',
  tmm = 'title_medium_medium',
  lmr = 'label_medium_regular',
  lmm = 'label_medium_medium',
  lsr = 'label_small_regular',
  blr = 'body_large_regular',
  bmr = 'body_medium_regular',
  bsr = 'body_small_regular',
  bsm = 'body_small_medium',
}

export interface CustomTypographyProps
  extends Omit<TypographyProps, 'variant'> {
  variant?: CustomTypographyVarients;
}

export function Typography({
  variant = 'body_large_regular',
  ...rest
}: CustomTypographyProps) {
  return (
    <MuiTypography variant={variant as keyof typeof TypographyEnum} {...rest} />
  );
}

export default Typography;
