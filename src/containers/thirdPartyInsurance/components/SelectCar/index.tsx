'use client';

import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { MenuItem, MenuList } from '@mui/material';

import { FormTextInput } from '@components';
import { carForm, initialVehicleList, initialMenuList } from '@constants';
import {
  InsuranceInquiryFormSchemaProps,
  MenuItemModel,
  GetVehicleTypesDataModel,
} from '@models';
import { getVehicleTypesService } from '@services';
import { CatchErrorToast } from '@helpers';
import { Typography } from '@ui';
import { colorPalette } from '@shared';

import classes from './select-car.module.scss';

export const SelectCar = () => {
  const { control, setValue, clearErrors, watch, getValues } =
    useFormContext<InsuranceInquiryFormSchemaProps>();

  const [vehicleList, setVehicleList] =
    useState<GetVehicleTypesDataModel[]>(initialVehicleList);
  const [vehicleModelList, setVehicleModelList] =
    useState<MenuItemModel[]>(initialMenuList);

  const handleGetVehicalList = async () => {
    try {
      const result = await getVehicleTypesService();

      if (result && result?.length > 0) {
        setVehicleList(result);
      }
    } catch (error) {
      CatchErrorToast(error);
    }
  };

  const handleVehicleTypeMenuItemClick = (
    event: React.MouseEvent<HTMLLIElement>,
  ) => {
    const vehicleTitle = event.currentTarget.textContent;
    if (vehicleTitle) {
      const findItem = vehicleList?.find((item) => item.title === vehicleTitle);

      if (findItem) {
        const vehicleModels = findItem.usages.map((item) => {
          return { id: item.id, title: item.title };
        });

        setVehicleModelList(vehicleModels);

        setValue('selectCar.carModel', vehicleModels[0].title);

        clearErrors('selectCar.carModel');
      }
    }
  };

  useEffect(() => {
    const vehicleType = getValues('selectCar.carType');

    if (vehicleType) {
      const findItem = vehicleList?.find((item) => item.title === vehicleType);

      if (findItem) {
        const vehicleModels = findItem.usages.map((item) => {
          return { id: item.id, title: item.title };
        });
        setVehicleModelList(vehicleModels);
      }
    }
  }, [vehicleList]);

  useEffect(() => {
    handleGetVehicalList();
  }, []);

  return (
    <div className={classes.wrapper}>
      <Typography
        variant="body_small_medium"
        color={colorPalette.content_main_secondary}
      >
        {carForm.title}
      </Typography>

      <div className={classes.form}>
        <FormTextInput
          name="selectCar.carType"
          label={carForm.carType}
          inputSize="medium"
          control={control}
          maxLength={40}
          select
        >
          {vehicleList?.map((item) => (
            <MenuItem
              key={item.id}
              value={item.title}
              onClick={handleVehicleTypeMenuItemClick}
            >
              {item.title}
            </MenuItem>
          ))}
        </FormTextInput>

        <FormTextInput
          name="selectCar.carModel"
          label={carForm.carModel}
          inputSize="medium"
          control={control}
          maxLength={40}
          select
        >
          {vehicleModelList.length > 0 &&
            vehicleModelList?.map((item) => (
              <MenuItem key={item.id} value={item.title}>
                {item.title}
              </MenuItem>
            ))}
        </FormTextInput>
      </div>
    </div>
  );
};
