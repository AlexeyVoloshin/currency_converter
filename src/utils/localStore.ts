import { ICurrentCurrency } from '../types/currency';

const selectedCurrency = 'selectedCurrency';

export const addSelectedCurrency = (data: ICurrentCurrency) => {
    localStorage.setItem(selectedCurrency, JSON.stringify(data));
};

export const readSelectedCurrency = (): ICurrentCurrency => {
    const currency = localStorage.getItem(selectedCurrency);

    return currency !== null ? JSON.parse(currency) : '';
};
