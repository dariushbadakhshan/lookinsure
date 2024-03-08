import { z } from 'zod';
import { insuranceSelectFormErrorText } from '@constants';

export const DiscountFormSchema = z.object({
  thirdParty: z.string().min(1, insuranceSelectFormErrorText.thirdParty),
  driverAccident: z
    .string()
    .min(1, insuranceSelectFormErrorText.driverAccident),
});

export type DiscountFormSchemaProps = z.infer<typeof DiscountFormSchema>;
