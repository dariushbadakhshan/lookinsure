import { z } from 'zod';

import { PrevInsureFormErrorText } from '@constants';

export const PrevInsuranceFormSchema = z.object({
  provider: z.string().min(1, PrevInsureFormErrorText.prevInsurance),
});

export type PrevInsuranceFormSchemaProps = z.infer<
  typeof PrevInsuranceFormSchema
>;
