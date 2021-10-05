import { createSlice } from '@reduxjs/toolkit';
import { ADD_CURRENCY } from './types';
import { readSelectedCurrency } from '../../utils/localStore';
import { ICurrency } from '../../types/currency';

const initialState: ICurrency = {
    currentCurrency: readSelectedCurrency().currency,
    currencyTo: {
        currency_name: '',
        conversion_rate: 0,
    },
};

export const slice = createSlice({
    name: ADD_CURRENCY,
    initialState,
    reducers: {
        addCurrency: (state, action) => {
            state.currentCurrency = action.payload;
        },
        addCurrencyTo: (state, action) => {
            state.currencyTo = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { addCurrency, addCurrencyTo } = slice.actions;

export const currency = slice.reducer;
