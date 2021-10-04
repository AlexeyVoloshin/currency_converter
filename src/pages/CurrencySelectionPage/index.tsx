import React from 'react';
import { useStyles } from './styles';
import { SelectTextField } from '../../components/SelectTextField/SelectTextField';
import { useDispatch, useSelector } from 'react-redux';
import { addCurrency } from './slice';
import { addSelectedCurrency } from '../../utils/localStore';
import Box from '@mui/material/Box';
import { currentCurrencyThunk } from './thunks';
import { AppDispatch, RootState } from '../../redux/store';
import { ConversionRates, ICurrencyOptions, IItemCurrency } from '../../types/currency';
import { popularCurrency } from '../../components/SelectTextField/localData';
import { ListComponent } from '../../components/ListComponent/ListComponent';

export const Index: React.FC = (): React.ReactElement => {
    const classes = useStyles();
    const currentCurrency = useSelector((state: RootState) => state.currency);
    const [currency, setCurrency] = React.useState(currentCurrency.current);
    const [dataCurrency, setDataCurrency] = React.useState<IItemCurrency[]>([]);
    const dispatch: AppDispatch = useDispatch();

    const filterItems = (data: ICurrencyOptions) => {
        debugger;
        const conversion_rates: ConversionRates | undefined = data!.conversion_rates;
        const result: IItemCurrency[] = [];
        popularCurrency.map((item) => {
            if (conversion_rates[item.currencyName]) {
                result.push({
                    currencyValue: conversion_rates[item.currencyName],
                    currencyName: item.currencyName,
                });
            }
        });
        return result;
    };

    const getAllCurrency = async () => {
        debugger;
        try {
            const result = await dispatch(currentCurrencyThunk({ currency: 'USD' }));

            setDataCurrency(filterItems(result.payload as ICurrencyOptions));
        } catch (error) {
            console.log(error);
        }
    };

    React.useEffect(() => {
        getAllCurrency();
    }, []);

    React.useEffect(() => {
        dispatch(
            addCurrency({
                current: currency,
            }),
        );
        /*
         * TODO : implement adding to the store after removing the component
         * */
        return addSelectedCurrency({
            currency,
        });
    }, [currency, dispatch]);

    return (
        <div className={classes.root}>
            <header className={classes.header}>
                <div className={classes.title}>Currency selection page</div>
            </header>
            <div className={classes.mainContent}>
                <p>Currency:</p>
                <div className={classes.select}>
                    <SelectTextField currency={currency} setCurrency={setCurrency} />
                </div>
                <div>
                    <p>Result select</p>
                    <p>Currency:</p>
                    {currentCurrency.current}
                </div>
                <Box
                    sx={{
                        width: '100%',
                        maxWidth: 360,
                        maxHeight: 400,
                        bgcolor: 'background.paper',
                        overflow: 'height',
                    }}
                >
                    <ListComponent data={dataCurrency} />
                </Box>
            </div>
        </div>
    );
};
