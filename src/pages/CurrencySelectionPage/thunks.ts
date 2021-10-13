import { createAsyncThunk } from '@reduxjs/toolkit';
import { GET_CURRENT_CURRENCY } from './types';
import { formatApiError } from '../../utils/formatApiError';
import { ICurrentCurrency } from '../../types/currency';
import { getSelectCurrency } from '../../api';

export const currentCurrencyThunk = createAsyncThunk(
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
