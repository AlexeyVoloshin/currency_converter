import React from 'react';
import { useStyles } from './styles';
import InputTextField from '../../components/InputTextField';
import BasicButton from '../../components/BasicButton';
import { Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { useHistory } from 'react-router-dom';
import { routes } from '../../core/routes';
import { converterCurrency, reverseConverterCurrency } from '../../utils/converterCurrency';
import { IConversion, IConversionProps } from '../../types/currency';
import { conversionRateThunk } from './thunk';
import { addBaseCode, addConversionCurrency } from '../CurrencySelectionPage/slice';
import { IApiErrorMessage } from '../../types/apiError';
import { AlertMessage } from '../../core/components/AlertMessage';

export const DetailedConverterPage: React.FC = (): React.ReactElement => {
    const classes = useStyles();
    const history = useHistory();
    const { conversion_currency, base_code: selectCurrency } = useSelector((state: RootState) => state.currency);
    const [inputFrom, setInputFrom] = React.useState<number>(0);
    const [inputTo, setInputTo] = React.useState<number>(0);
    const [errorMessage, setErrorMessage] = React.useState('');
    const dispatch: AppDispatch = useDispatch();

    const extractCurrency = (): IConversionProps => {
        const pathname = history.location.pathname;
        const idx = pathname.indexOf('_');
        const idxLast = pathname.lastIndexOf('/');
        return {
            base_code: pathname.slice(idxLast + 1, idx),
            target_code: pathname.slice(idx + 1),
        };
    };

    const getConversionRate = async () => {
        const code: IConversionProps = extractCurrency();
        try {
            const result = await dispatch(
                conversionRateThunk({ base_code: code.base_code, target_code: code.target_code }),
            );

            if ((result as IApiErrorMessage).error) {
                setErrorMessage('Entered currency does not exist!!!');
                return;
            }
            setErrorMessage('');
            dispatch(
                addConversionCurrency({
                    currency_name: (result.payload as IConversion).target_code,
                    conversion_rate: (result.payload as IConversion).conversion_rate,
                }),
            );
            dispatch(addBaseCode((result.payload as IConversion).base_code));
        } catch (error) {
            console.error('error: ', error);
        }
    };

    React.useEffect(() => {
        if (!conversion_currency.conversion_rate) {
            getConversionRate();
        }
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        switch (e.target.id) {
            case 'from': {
                setInputFrom(+e.target.value);
                setInputTo(
                    converterCurrency({
                        sum: +e.target.value,
                        conversion_rate: conversion_currency.conversion_rate,
                    }),
                );
                break;
            }
            case 'to': {
                setInputTo(+e.target.value);
                setInputFrom(
                    reverseConverterCurrency({
                        sum: +e.target.value,
                        conversion_rate: conversion_currency.conversion_rate,
                    }),
                );
                break;
            }
            default:
                break;
        }
    };

    return (
        <div className={classes.root}>
            <div className={classes.mainContent}>
                <header className={classes.header}>
                    <Typography variant={'h4'} textAlign={'center'} className={classes.title}>
                        Сonversion details
                    </Typography>
                </header>
                {!errorMessage && (
                    <div className={classes.containerSelect}>
                        <div className={classes.input}>
                            <label htmlFor={'from'}>{selectCurrency ? selectCurrency : 'Select currency'}</label>
                            <InputTextField
                                id={'from'}
                                onChange={handleChange}
                                value={inputFrom ? inputFrom : undefined}
                            />
                        </div>
                        <div className={classes.input}>
                            <label htmlFor={'to'}>
                                {conversion_currency.currency_name
                                    ? conversion_currency.currency_name
                                    : 'Select currency'}
                            </label>
                            <InputTextField id={'to'} onChange={handleChange} value={inputTo ? inputTo : undefined} />
                        </div>
                    </div>
                )}
                <AlertMessage message={errorMessage} severity="error" />
                <div className={classes.containerButton}>
                    <BasicButton
                        className={classes.button}
                        variant={'outlined'}
                        text={'Back'}
                        handleClick={() => history.push(routes.static.home)}
                    />
                </div>
            </div>
        </div>
    );
};
