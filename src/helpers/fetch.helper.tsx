/* eslint-disable @typescript-eslint/no-explicit-any */

import { RequestOptionsModel } from '@models';

const API_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const createRequestUrl = (url: string): string => {
  return `${API_BASE_URL}/${url}`;
};

const fetchHelper = async (
  url: string,
  options: RequestOptionsModel,
  body?: BodyInit | null | undefined | any,
) => {
  const requestUrl = createRequestUrl(url);

  const requestOptions = {
    method: options?.method ?? 'GET',
    body: JSON.stringify(body),
    next: { revalidate: 0 },
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  };

  const response = await fetch(requestUrl, {
    ...requestOptions,
  });

  if (!response.ok) {
    const errorResponse = await response.json();
    const customError = new Error(`${errorResponse.message}`);
    (customError as any).response = response; // Attaching the response to the error object for access in the app component
    throw customError; // Throw the custom error object
  }

  const contentType = response.headers.get('content-type') || '';
  if (contentType.includes('application/json')) {
    return response.json();
  } else {
    return; // No need to parse response if not JSON
  }
};

export default fetchHelper;
