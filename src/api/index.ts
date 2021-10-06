import { ApiGetResponse } from '../types/apiGetResponce';
import { AxiosPromise } from 'axios';
import { api } from '../core';
import { IAllCurrencyOptions, IConversion, IConversionProps, ICurrentCurrency } from '../types/currency';
import { config } from '../config';

export const getSelectCurrency = (
    currentCurrency: ICurrentCurrency,
): AxiosPromise<ApiGetResponse<IAllCurrencyOptions>> =>
    api.get(`/v6/${config.apiKey}/latest/${currentCurrency.base_code}`);

export const getConversionResult = (conversion: IConversionProps): AxiosPromise<ApiGetResponse<IConversion>> =>
    api.get(`/v6/${config.apiKey}/pair/${conversion.base_code}/${conversion.target_code}`);
