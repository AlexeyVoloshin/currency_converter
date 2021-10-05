import React from 'react';
import { useStyles } from './styles';
import { SelectTextField } from '../../components/SelectTextField/SelectTextField';
import { useDispatch, useSelector } from 'react-redux';
import { addCurrency, addCurrencyTo } from './slice';
import { addSelectedCurrency } from '../../utils/localStore';
import { currentCurrencyThunk } from './thunks';
import { AppDispatch, RootState } from '../../redux/store';
import { ConversionRates, ICurrencyOptions, IItemCurrency } from '../../types/currency';
import { popularCurrency } from '../../components/SelectTextField/localData';
import { ListComponent } from '../../components/ListComponent/ListComponent';
import { useHistory } from 'react-router-dom';
import { routes } from '../../core/routes';

const CurrencySelectionPage: React.FC = (): React.ReactElement => {
    const classes = useStyles();
    const history = useHistory();
    const stateCurrency = useSelector((state: RootState) => state.currency);
    const [selectCurrency, setSelectCurrency] = React.useState(stateCurrency.currentCurrency);
    const [dataCurrency, setDataCurrency] = React.useState<IItemCurrency[]>([]);
    const dispatch: AppDispatch = useDispatch();

    const handleClick = (selectCurrencyName: string, conversion_rate: number) => {
        if (selectCurrencyName) {
            dispatch(
                addCurrencyTo({
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
        // eslint-disable-next-line array-callback-return
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
            const result = await dispatch(currentCurrencyThunk({ currency: select }));

            setDataCurrency(filterItems(result.payload as ICurrencyOptions));
        } catch (error) {
            console.log(error);
        }
    };

    React.useEffect(() => {
        getAllCurrency(selectCurrency);
    }, [selectCurrency]);

    React.useEffect(() => {
        dispatch(addCurrency(selectCurrency));
        /*
         * TODO : implement adding to the store after removing the component
         * */
        return addSelectedCurrency({
            currency: selectCurrency,
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
                <div className={classes.wrapList}>
                    <ListComponent data={dataCurrency} handleClick={handleClick} />
                </div>
            </div>
        </div>
    );
};

export default CurrencySelectionPage;
