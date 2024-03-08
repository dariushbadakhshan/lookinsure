import { ServicesCatchError, fetchHelper } from '@helpers';
import {
  GetCompanyDataModel,
  GetInsuranceDiscountDataModel,
  MenuItemModel,
} from '@models';

const baseUrl = 'api/product';

export const getInsureCompaniesService = async () => {
  try {
    const result: GetCompanyDataModel[] = await fetchHelper(
      `${baseUrl}/third/companies`,
      {
        method: 'GET',
      },
    );
    const companies: MenuItemModel[] = result.map((item) => {
      return { id: item.id, title: item.title };
    });
    return companies;
  } catch (error) {
    ServicesCatchError(error);
  }
};

export const getThirdDiscountsService = async () => {
  try {
    const result: GetInsuranceDiscountDataModel[] = await fetchHelper(
      `${baseUrl}/third/third-discounts`,
      {
        method: 'GET',
      },
    );
    return result;
  } catch (error) {
    ServicesCatchError(error);
  }
};
