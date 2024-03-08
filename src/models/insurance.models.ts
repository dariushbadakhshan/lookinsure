import { string } from 'zod';

export enum InsuranceInquiry {
  SelectCar = 'selectCar',
  PrevInsurance = 'prevInsurance',
  Discount = 'discount',
}

export type FinalInfoModel = {
  firstname: string;
  lastname: string;
  mobile: string;
  carType: string;
  carModel: string;
  prevProvider: string;
  thirdPartyDiscount: string;
  driverAccidentDiscount: string;
};

export type GetCompanyDataModel = {
  id: number;
  title: string;
  satisfaction: number;
  wealthLevel: number;
  complaintResponseTime: number;
  branchNumber: number;
  enable: boolean;
  marketerEnable: boolean;
  available: boolean;
  maxBranchDiscount: number;
  branchDiscountPercent: number;
  maxCompanyDiscount: number;
  companyDiscountPercent: number;
  maxBimitoDiscount: number;
  bimitoDiscountPercent: number;
  maxMarketerDiscount: number;
  marketerDiscountPercent: number;
  bimitoDiscountTitle: string;
  azkiDiscountTitle: string;
  hideDiscount: boolean;
  description: string;
  productDescription: string;
  giftTitle: string;
  hasGift: boolean;
  onlineDamage: boolean;
  features: {
    icon: string;
    title: string;
    newRelease: boolean;
    description: string;
  }[];
  installments: {
    enable: boolean;
    enableForSellers: boolean;
    underInstallmentLimitPrice: boolean;
    installments: [{ percent: number; month: number }];
    title: string;
    label: string;
    description: string;
    credit: boolean;
    type: 1;
    default: boolean;
  }[];
  icon: string;
  helpIcons: {
    title: string;
    url: string;
  }[];
  oldVehicleAge: number;
  oldVehiclePercent: number;
  oldVehiclePenaltyPercent: number;
  extraPercent: number;
  extraPenaltyPercent: number;
  damagedShortTermEnable: boolean;
  maxDayOfPenalty: number;
  forgivenessDescription: string;
  enableExpireDatePayment: boolean;
  shortPenaltyForgiveness: boolean;
  longPenaltyForgiveness: boolean;
  cashPayment: boolean;
  azkiPenaltyDiscountEnable: boolean;
  maxAzkiPenaltyDiscount: number;
};

export type GetInsuranceDiscountDataModel = { id: number; title: string };
