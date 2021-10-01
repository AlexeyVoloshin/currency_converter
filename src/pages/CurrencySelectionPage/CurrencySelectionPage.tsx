import React from 'react';
import { useStyles } from './styles';
import { SelectTextField } from '../components/SelectTextField/SelectTextField';
import { useDispatch, useSelector } from 'react-redux';
import { addCurrency } from '../../redux/slice';
import { addSelectedCurrency } from '../../utils/localStore';
import Box from '@mui/material/Box';
import { CurrentCurrencyThunk } from '../../redux/thunks';
import { ICurrencyOptions } from '../../types/currency';
import { RootState } from '../../redux/store';

export const CurrencySelectionPage: React.FC = (): React.ReactElement => {
    const classes = useStyles();
    const currentCurrency = useSelector((state: RootState) => state.currency);
    const [currency, setCurrency] = React.useState(currentCurrency.current);
    const [errorMessage, setErrorMessage] = React.useState('');
    const [dataCurrency, setDataCurrency] = React.useState<ICurrencyOptions>();
    const dispatch = useDispatch();

    const getAllCurrency = async () => {
        try {
            const result = await dispatch(CurrentCurrencyThunk({ currency: 'USD' }));
            if ((result as any).error) {
                // const error = result.payload as IApiError;
                setErrorMessage('error');
                return;
            }
            setDataCurrency(result.payload);
        } catch (error) {
            console.log(error);
        }
        setErrorMessage('');
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
                    {}
                </Box>
            </div>
        </div>
    );
};
