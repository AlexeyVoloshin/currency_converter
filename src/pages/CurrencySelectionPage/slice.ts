import { createSlice } from '@reduxjs/toolkit';
import { ADD_CURRENCY } from './types';
import { readSelectedCurrency } from '../../utils/localStore';
import { ICurrency } from '../../types/currency';

const initialState: ICurrency = {
    base_code: readSelectedCurrency().base_code,
    conversion_currency: {
        currency_name: '',
        conversion_rate: 0,
    },
};

export const slice = createSlice({
    name: ADD_CURRENCY,
    initialState,
    reducers: {
        addBaseCode: (state, action) => {
            state.base_code = action.payload;
        },
        addConversionCurrency: (state, action) => {
            state.conversion_currency = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { addBaseCode, addConversionCurrency } = slice.actions;

export const currency = slice.reducer;
