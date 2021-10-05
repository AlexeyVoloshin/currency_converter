import React from 'react';
import { useStyles } from './styles';
import InputTextField from '../../components/InputTextField';
import BasicButton from '../../components/BasicButton';
import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useHistory } from 'react-router-dom';
import { routes } from '../../core/routes';
import { converterCurrency } from '../../utils/converterCurrency';

export const DetailedConverterPage: React.FC = (): React.ReactElement => {
    const classes = useStyles();
    const history = useHistory();
    const stateCurrency = useSelector((state: RootState) => state.currency);
    const [selectCurrency, setSelectCurrency] = React.useState(stateCurrency.currentCurrency);
    const [currencyTo, setCurrencyTo] = React.useState(stateCurrency.currencyTo);
    const [conversionResult, setConversionResult] = React.useState<number>(0);

    const handleChange = (value: React.ChangeEvent<HTMLInputElement>) => {
        switch (value.target.id) {
            case 'from': {
                setConversionResult(
                    converterCurrency({
                        from: +value.target.value,
                        to: currencyTo.conversion_rate,
                    }),
                );
                break;
            }
            case 'to': {
                setConversionResult(converterCurrency({ from: currencyTo.conversion_rate, to: +value.target.value }));
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
                <div className={classes.containerSelect}>
                    <InputTextField
                        id={'from'}
                        onChange={handleChange}
                        label={selectCurrency}
                        text={selectCurrency}
                        value={conversionResult ? conversionResult : null}
                    />
                    <InputTextField
                        id={'to'}
                        onChange={handleChange}
                        label={currencyTo.currency_name}
                        text={currencyTo.currency_name}
                        value={conversionResult ? conversionResult : null}
                    />
                </div>
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
