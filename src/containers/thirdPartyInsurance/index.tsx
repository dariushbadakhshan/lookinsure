'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Modal } from '@mui/material';
import { ArrowLeft2, ArrowRight2 } from 'iconsax-react';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import Cookies from 'js-cookie';

import {
  DiscountFormSchema,
  FinalInfoModel,
  InsuranceInquiry,
  PrevInsuranceFormSchema,
  SelectCarFormSchema,
} from '@models';
import { Button, Typography } from '@ui';
import { initialInsuranceForm, routes, shared } from '@constants';
import { InsuranceInquiryFormSchemaProps } from '@models';

import { SelectCar, PrevInsurance, Discount, Summary } from './components';

import classes from './third-party-insurance.module.scss';

export const registrationFormSchema = z.discriminatedUnion('formStep', [
  z.object({
    formStep: z.literal(InsuranceInquiry.SelectCar),
    selectCar: SelectCarFormSchema,
  }),
  z.object({
    formStep: z.literal(InsuranceInquiry.PrevInsurance),
    prevInsurance: PrevInsuranceFormSchema,
  }),
  z.object({
    formStep: z.literal(InsuranceInquiry.Discount),
    discount: DiscountFormSchema,
  }),
]);

const ThirdPartyInsurePage = () => {
  const router = useRouter();

  const [finalModalIsOpen, setFinalModalIsOpen] = useState(false);
  const [finalInfo, setFinalInfo] = useState<FinalInfoModel | null>(null);

  const formMethods = useForm<InsuranceInquiryFormSchemaProps>({
    resolver: zodResolver(registrationFormSchema),
    defaultValues: initialInsuranceForm,
  });

  const { watch, getValues, handleSubmit } = formMethods;

  const formStep = watch('formStep');

  function setformStep(formStep: InsuranceInquiry) {
    formMethods.setValue('formStep', formStep);
  }

  function handleNextformStep() {
    switch (formStep) {
      case 'selectCar':
        setformStep(InsuranceInquiry.PrevInsurance);
        break;
      case 'prevInsurance':
        setformStep(InsuranceInquiry.Discount);
        break;
      case 'discount':
        const formValues = getValues();
        setFinalInfo({
          firstname: Cookies.get('firstname') as string,
          lastname: Cookies.get('lastname') as string,
          mobile: Cookies.get('mobile') as string,
          carType: formValues.selectCar.carType,
          carModel: formValues.selectCar.carModel,
          prevProvider: formValues.prevInsurance.provider,
          thirdPartyDiscount: formValues.discount.thirdParty,
          driverAccidentDiscount: formValues.discount.driverAccident,
        });
        setFinalModalIsOpen(true);
        break;
    }
  }

  function handlePrevformStep() {
    switch (formStep) {
      case 'selectCar':
        router.push(routes.insurance);
        break;
      case 'prevInsurance':
        setformStep(InsuranceInquiry.SelectCar);
        break;
      case 'discount':
        return;
    }
  }

  return (
    <>
      <FormProvider {...formMethods}>
        <form
          className={classes.wrapper}
          onSubmit={handleSubmit(handleNextformStep)}
        >
          <Typography variant="title_large_medium">
            {shared.formTitle}
          </Typography>

          {formStep === InsuranceInquiry.SelectCar && <SelectCar />}
          {formStep === InsuranceInquiry.PrevInsurance && <PrevInsurance />}
          {formStep === InsuranceInquiry.Discount && <Discount />}

          <div
            className={`${classes.actions} ${formStep === InsuranceInquiry.Discount ? classes.lastStep : ''}`}
          >
            {formStep !== InsuranceInquiry.Discount && (
              <Button
                size="medium"
                fullWidth
                variant="outlined"
                startIcon={<ArrowRight2 size="20" />}
                onClick={handlePrevformStep}
              >
                {formStep === InsuranceInquiry.SelectCar
                  ? shared.firstBackButton
                  : shared.backButton}
              </Button>
            )}

            <Button
              type="submit"
              size="medium"
              fullWidth
              variant={
                formStep === InsuranceInquiry.Discount
                  ? 'contained'
                  : 'outlined'
              }
              endIcon={<ArrowLeft2 size="20" />}
            >
              {formStep === InsuranceInquiry.Discount
                ? shared.submit
                : shared.nextButton}
            </Button>
          </div>
        </form>
      </FormProvider>

      <Modal
        sx={{ display: 'grid', placeItems: 'center' }}
        open={finalModalIsOpen}
        onClose={() => setFinalModalIsOpen(false)}
      >
        <>
          <Summary data={finalInfo as FinalInfoModel} />
        </>
      </Modal>
    </>
  );
};

export default ThirdPartyInsurePage;
