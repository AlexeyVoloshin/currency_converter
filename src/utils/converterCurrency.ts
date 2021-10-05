import { IConversionData } from '../types/utils';

export const converterCurrency = (data: IConversionData): number => {
    return data.from * data.to;
};
