import { IApiError } from '../types/apiError';

export const formatApiError = (err: any): IApiError => {
    return {
        ...err?.response?.data,
        status: err?.response?.status,
        statusText: err?.response?.statusText,
    };
};
