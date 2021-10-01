import { ApiGetResponse } from '../types/apiGetResponce';
import axios, { AxiosPromise, AxiosRequestConfig } from 'axios';
import { api } from '../core';
import { IAllCurrencyOptions, ICurrentCurrency } from '../types/currency';
import { config } from '../config';

export const getAllCurrency = (config: AxiosRequestConfig): AxiosPromise<ApiGetResponse<IAllCurrencyOptions>> =>
    api.get(`/latest/`, config);

export const getSelectCurrency = (
    currentCurrency: ICurrentCurrency,
): AxiosPromise<ApiGetResponse<IAllCurrencyOptions>> => {
    return axios({
        method: 'GET',
        url: `${config.apiUrl}v6/${config.apiKey}/latest/${currentCurrency.currency}`,
    });
};
// api.get(`/v6/${config.apiKey}/latest/${currentCurrency.currency}`);
