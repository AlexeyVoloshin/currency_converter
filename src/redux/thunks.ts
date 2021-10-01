import {createAsyncThunk} from '@reduxjs/toolkit';
import {GET_ALL_CURRENCY, GET_CURRENT_CURRENCY} from './types';
import {formatApiError} from '../utils/formatApiError';
import {getAllCurrency, getSelectCurrency} from '../api';
import {config} from '../config';
import {ICurrentCurrency} from '../types/currency';

export const AllCurrencyThunk = createAsyncThunk(GET_ALL_CURRENCY, async (_, { rejectWithValue, fulfillWithValue }) => {
    try {
        const requestConfig = {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Access-Control-Max-Age': '86400',
                'Access-Control-Allow-Headers': 'X-PINGOTHER, Content-Type',
                mode: 'no-cors',
                'Content-Type': 'application/json',
            },
            crossdomain: true,
            params: { access_key: config.apiKey },
        };
        const response = await getAllCurrency(requestConfig);

        const userResponse = response.data;

        fulfillWithValue(userResponse);
        return userResponse;
    } catch (err) {
        return rejectWithValue(formatApiError(err));
    }
});

export const CurrentCurrencyThunk = createAsyncThunk(
    GET_CURRENT_CURRENCY,
    async (currency: ICurrentCurrency, { rejectWithValue }) => {
        try {
            const response = await getSelectCurrency(currency);

            return response.data;
        } catch (err) {
            return rejectWithValue(formatApiError(err));
        }
    },
);
