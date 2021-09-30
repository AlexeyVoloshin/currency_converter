import { ADD_CURRENCY, IShowCurrency } from '../types';

export const addCurrency = (ShowCurrency: IShowCurrency) => ({ type: ADD_CURRENCY, payload: ShowCurrency });
