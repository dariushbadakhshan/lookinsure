import { InsuranceInquiry } from '@models';

export const initialVehicleList = [
  {
    id: 0,
    title: '',
    usages: [
      {
        id: 0,
        title: '',
      },
    ],
  },
];

export const initialMenuList = [{ id: 0, title: '' }];

export const initialInsuranceForm = {
  formStep: InsuranceInquiry.SelectCar,
  selectCar: { carType: '', carModel: '' },
  prevInsurance: { provider: '' },
  discount: { thirdParty: '', driverAccident: '' },
};
