'use client';

import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { MenuItem } from '@mui/material';

import { FormTextInput } from '@components';
import { insuranceSelectForm } from '@constants';
import { InsuranceInquiryFormSchemaProps, MenuItemModel } from '@models';
import { Typography } from '@ui';
import { colorPalette } from '@shared';
import { CatchErrorToast } from '@helpers';
import { getThirdDiscountsService } from '@services';

import classes from './discount.module.scss';

export const Discount = () => {
  const { control } = useFormContext<InsuranceInquiryFormSchemaProps>();

  const [discountList, setDiscountList] = useState<MenuItemModel[]>([
    {
      id: 0,
      title: '',
    },
  ]);

  const handleGetVehicalList = async () => {
    try {
      const result = await getThirdDiscountsService();
      if (result && result?.length > 0) {
        setDiscountList(result);
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
        {insuranceSelectForm.title}
      </Typography>

      <div className={classes.form}>
        <FormTextInput
          name="discount.thirdParty"
          label={insuranceSelectForm.thirdParty}
          inputSize="medium"
          control={control}
          maxLength={20}
          select
        >
          {discountList?.map((item) => (
            <MenuItem key={item.id} value={item.title}>
              {item.title}
            </MenuItem>
          ))}
        </FormTextInput>

        <FormTextInput
          name="discount.driverAccident"
          label={insuranceSelectForm.driverAccident}
          inputSize="medium"
          control={control}
          maxLength={20}
          select
        >
          {discountList?.map((item) => (
            <MenuItem key={item.id} value={item.title}>
              {item.title}
            </MenuItem>
          ))}
        </FormTextInput>
      </div>
    </div>
  );
};
