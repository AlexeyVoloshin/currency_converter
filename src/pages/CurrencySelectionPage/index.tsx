import React from 'react';
import { useStyles } from './styles';
import { SelectTextField } from '../../components/SelectTextField';
import { useDispatch, useSelector } from 'react-redux';
import { addBaseCode, addConversionCurrency } from './slice';
import { addSelectedCurrency } from '../../utils/localStore';
import { currentCurrencyThunk } from './thunks';
import { AppDispatch, RootState } from '../../redux/store';
import { ConversionRates, ICurrencyOptions, IItemCurrency } from '../../types/currency';
import { popularCurrency } from '../../components/SelectTextField/localData';
import { useHistory } from 'react-router-dom';
import { Preloader } from '../../core/components/Preloader';
import { IApiErrorMessage } from '../../types/apiError';
import { AlertMessage } from '../../core/components/AlertMessage';
import { ListComponent } from '../../components/ListComponent';

export const CurrencySelectionPage: React.FC = (): React.ReactElement => {
    const classes = useStyles();
    const history = useHistory();
    const stateCurrency = useSelector((state: RootState) => state.currency);
    const [selectCurrency, setSelectCurrency] = React.useState(stateCurrency.base_code);
    const [dataCurrency, setDataCurrency] = React.useState<IItemCurrency[]>([]);
    const [isLoading, setIsLoading] = React.useState<boolean>(true);
    const [errorMessage, setErrorMessage] = React.useState('');
    const dispatch: AppDispatch = useDispatch();

    const handleClick = (selectCurrencyName: string, conversion_rate: number) => {
        if (selectCurrencyName) {
            dispatch(
                addConversionCurrency({
                    currency_name: selectCurrencyName,
                    conversion_rate,
                }),
            );
            history.push(`/detail/${selectCurrency}_${selectCurrencyName}`);
        }
    };

    const filterItems = (data: ICurrencyOptions) => {
        const conversion_rates: ConversionRates | number | undefined = data!.conversion_rates;
        const result: IItemCurrency[] = [];

        popularCurrency.map((item): void => {
            if (conversion_rates[item.currencyName as keyof typeof conversion_rates]) {
                result.push({
                    conversion_rate: conversion_rates[item.currencyName as keyof typeof conversion_rates] as number,
                    currency_name: item.currencyName,
                });
            }
        });
        return result;
    };

    const getAllCurrency = async (select = 'USD'): Promise<void> => {
        try {
            const result = await dispatch(currentCurrencyThunk({ base_code: select }));
            if ((result as IApiErrorMessage).error) {
                setErrorMessage('Data loading error!!!');
                return;
            }
            setIsLoading(false);
            setDataCurrency(filterItems(result.payload as ICurrencyOptions));
        } catch (error) {
            console.error(error);
        }
    };

    React.useEffect(() => {
        if (selectCurrency) {
            getAllCurrency(selectCurrency);
        }
    }, [selectCurrency]);

    React.useEffect(() => {
        if (selectCurrency) {
            dispatch(addBaseCode(selectCurrency));
        }
        return addSelectedCurrency({
            base_code: selectCurrency,
        });
    }, [selectCurrency, dispatch]);

    return (
        <div className={classes.root}>
            <header className={classes.header}>
                <div className={classes.title}>Currency selection page</div>
            </header>
            <div className={classes.mainContent}>
                <p>Currency:</p>
                <div className={classes.select}>
                    <SelectTextField currency={selectCurrency} setCurrency={setSelectCurrency} />
                </div>
                <AlertMessage message={errorMessage} severity="error" />
                <div className={classes.wrapList}>
                    {isLoading ? <Preloader /> : <ListComponent data={dataCurrency} handleClick={handleClick} />}
                </div>
            </div>
        </div>
    );
};
