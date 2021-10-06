import { createAsyncThunk } from '@reduxjs/toolkit';
import { GET_CONVERSION_RATE } from './types';
import { formatApiError } from '../../utils/formatApiError';
import { IConversionProps } from '../../types/currency';
import { getConversionResult } from '../../api';

export const conversionRateThunk = createAsyncThunk(
    GET_CONVERSION_RATE,
    async (currency: IConversionProps, { rejectWithValue }) => {
        try {
            const response = await getConversionResult(currency);
            return response.data;
        } catch (err) {
            return rejectWithValue(formatApiError(err));
        }
    },
);
