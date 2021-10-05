import { createAsyncThunk } from '@reduxjs/toolkit';
import { GET_CONVERSION } from './types';
import { formatApiError } from '../../utils/formatApiError';
import { IConversionProps } from '../../types/currency';
import { getConversionResult } from '../../api';

export const conversionResultThunk = createAsyncThunk(
    GET_CONVERSION,
    async (currency: IConversionProps, { rejectWithValue, fulfillWithValue }) => {
        try {
            const response = await getConversionResult(currency);
            fulfillWithValue(response);
            return response.data;
        } catch (err) {
            return rejectWithValue(formatApiError(err));
        }
    },
);
