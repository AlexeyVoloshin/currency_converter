import { IConversionData } from '../types/utils';

export const converterCurrency = (data: IConversionData): number => {
    return +(data.sum * data.conversion_rate).toFixed(2);
};

export const reverseConverterCurrency = (data: IConversionData): number => {
    return +(data.sum / data.conversion_rate).toFixed(2);
};
