export interface ICurrencyOptions {
    result: string;
    documentation: string;
    terms_of_use: string;
    time_last_update_unix: number;
    time_last_update_utc: string;
    time_next_update_unix: number;
    time_next_update_utc: string;
    base_code: string;
    conversion_rate?: number;
    conversion_rates: ConversionRates | number;
}

export interface IConversion extends ICurrencyOptions {
    target_code: string;
    conversion_result: number;
}

export interface ConversionRates {
    [key: string]: number;
}

export interface IConversionProps {
    base_code: string;
    target_code: string;
}

export interface IAllCurrencyOptions {
    [key: string]: ICurrencyOptions;
}

export interface ICurrency {
    base_code: string;
    conversion_currency: IItemCurrency;
}

export interface ICurrentCurrency {
    base_code: string;
}

export interface IItemCurrency {
    conversion_rate: number;
    currency_name: string;
}
