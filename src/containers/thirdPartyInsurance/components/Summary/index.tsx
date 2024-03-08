'use client';

import {
  carForm,
  registerFormText,
  prevInsurForm,
  discuntForm,
  insuranceTypeSelect,
  insuranceSelectForm,
} from '@constants';

import { Divider, Row, Typography } from '@ui';
import { FinalInfoModel } from '@models';
import { colorPalette } from '@shared';

import classes from './summary.module.scss';

type SummaryProps = {
  data: FinalInfoModel;
};

const Summary = ({ data }: SummaryProps) => {
  return (
    <div className={classes.wrapper}>
      <Typography
        sx={{ alignSelf: 'center' }}
        variant="title_medium_medium"
        color={colorPalette.content_main_brand}
      >
        اطلاعات نهایی
      </Typography>

      <Row title={registerFormText.name} leftTitle={data.firstname} />

      <Divider type="thin" />
      <Row title={registerFormText.lastname} leftTitle={data.lastname} />
      <Divider type="thin" />
      <Row title={registerFormText.mobile} leftTitle={data.mobile} />
      <Divider type="thin" />
      <Row title={carForm.carType} leftTitle={data.carType} />
      <Divider type="thin" />
      <Row title={carForm.carModel} leftTitle={data.carModel} />
      <Divider type="thin" />
      <Row title={prevInsurForm.prevInsurance} leftTitle={data.prevProvider} />
      <Divider type="thin" />
      <Row
        title={insuranceSelectForm.thirdParty}
        leftTitle={data.thirdPartyDiscount}
      />
      <Divider type="thin" />
      <Row
        title={insuranceSelectForm.driverAccident}
        leftTitle={data.driverAccidentDiscount}
      />
    </div>
  );
};

export default Summary;
