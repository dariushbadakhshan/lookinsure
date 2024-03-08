import { ServicesCatchError, fetchHelper } from '@helpers';
import { GetVehicleTypesDataModel } from '../models/vehicle-service.model';

const baseUrl = 'api/product';

export const getVehicleTypesService = async () => {
  try {
    const result: GetVehicleTypesDataModel[] = await fetchHelper(
      `${baseUrl}/vehicle/types`,
      {
        method: 'GET',
      },
    );
    return result;
  } catch (error) {
    ServicesCatchError(error);
  }
};
