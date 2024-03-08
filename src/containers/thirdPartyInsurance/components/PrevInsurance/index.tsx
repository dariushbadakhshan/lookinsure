'use client';

import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { MenuItem } from '@mui/material';

import { FormTextInput } from '@components';
import { prevInsurForm } from '@constants';
import { Typography } from '@ui';
import { MenuItemModel, InsuranceInquiryFormSchemaProps } from '@models';
import { CatchErrorToast } from '@helpers';
import { getInsureCompaniesService } from '@services';
import { colorPalette } from '@shared';

import classes from './prev-insurance.module.scss';

export const PrevInsurance = () => {
  const { control } = useFormContext<InsuranceInquiryFormSchemaProps>();

  const [insuranceList, setInsuranceList] = useState<MenuItemModel[]>([
    {
      id: 0,
      title: '',
    },
  ]);

  const handleGetVehicalList = async () => {
    try {
      const result = await getInsureCompaniesService();
      if (result && result?.length > 0) {
        setInsuranceList(result);
      }
    } catch (error) {
      CatchErrorToast(error);
    }
  };

  useEffect(() => {
    handleGetVehicalList();
  }, []);

  return (
    <div className={classes.wrapper}>
      <Typography
        variant="body_small_medium"
        color={colorPalette.content_main_secondary}
      >
        {prevInsurForm.title}
      </Typography>

      <FormTextInput
        name="prevInsurance.provider"
        label={prevInsurForm.prevInsurance}
        inputSize="medium"
        control={control}
        maxLength={40}
        select
      >
        {insuranceList?.map((item) => (
          <MenuItem key={item.id} value={item.title}>
            {item.title}
          </MenuItem>
        ))}
      </FormTextInput>
    </div>
  );
};
