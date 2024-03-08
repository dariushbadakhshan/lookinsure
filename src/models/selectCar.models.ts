import { z } from 'zod';

import { carFormErrorText } from '@constants';

export const SelectCarFormSchema = z.object({
  carType: z.string().min(1, carFormErrorText.carType),
  carModel: z.string().min(1, carFormErrorText.carModel),
});

export type SelectCarFormSchemaProps = z.infer<typeof SelectCarFormSchema>;
