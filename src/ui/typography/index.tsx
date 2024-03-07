import MuiTypography, { TypographyProps } from '@mui/material/Typography';

export type CustomTypographyVarients =
  | 'title_large_medium'
  | 'title_medium_medium'
  | 'title_small_medium'
  | 'label_large_regular'
  | 'label_large_medium'
  | 'label_medium_regular'
  | 'label_medium_medium'
  | 'label_small_regular'
  | 'label_small_medium'
  | 'label_x_small_regular'
  | 'body_large_regular'
  | 'body_large_medium'
  | 'body_large_regular_long'
  | 'body_medium_regular'
  | 'body_medium_medium'
  | 'body_medium_regular_paragraph'
  | 'body_small_regular'
  | 'body_small_medium'
  | 'body_small_regular_paragraph'
  | 'body_x_small_medium'
  | 'body_x_small_regular'
  | 'headline_large_medium'
  | 'body_small_strikethrought';

enum TypographyEnum {
  tlm = 'title_large_medium',
  tmm = 'title_medium_medium',
  tsm = 'title_small_medium',
  llr = 'label_large_regular',
  llm = 'label_large_medium',
  lmr = 'label_medium_regular',
  lmm = 'label_medium_medium',
  lsr = 'label_small_regular',
  lsm = 'label_small_medium',
  // lxsm = 'label_x_small_regular',
  blr = 'body_large_regular',
  blm = 'body_large_medium',
  // blrl = 'body_large_regular_long',
  bmr = 'body_medium_regular',
  bmm = 'body_medium_medium',
  // bmrp = 'body_medium_regular_paragraph',
  bsr = 'body_small_regular',
  bsm = 'body_small_medium',
  // bsrp = 'body_small_regular_paragraph',
  bxsm = 'body_x_small_medium',
  bxsr = 'body_x_small_regular',
  hlr = 'headline_large_medium',
  bsl = 'body_small_strikethrought',
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
