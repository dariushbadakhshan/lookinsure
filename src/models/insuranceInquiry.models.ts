import { InsuranceInquiry } from './insurance.models';
import { SelectCarFormSchemaProps } from './selectCar.models';
import { PrevInsuranceFormSchemaProps } from './prevInsurance.models';
import { DiscountFormSchemaProps } from './discount.models';

export type InsuranceInquiryFormSchemaProps = {
  formStep: InsuranceInquiry;
  selectCar: SelectCarFormSchemaProps;
  prevInsurance: PrevInsuranceFormSchemaProps;
  discount: DiscountFormSchemaProps;
};
