import { createSlice } from '@reduxjs/toolkit';
import { ADD_CURRENCY } from './types';
import { readSelectedCurrency } from '../utils/localStore';
import { ICurrency } from '../types/currency';

const initialState: ICurrency = {
    current: readSelectedCurrency().currency,
};

export const slice = createSlice({
    name: ADD_CURRENCY,
    initialState,
    reducers: {
        addCurrency: (state, action) => {
            state.current = action.payload.current;
        },
    },
});

// Action creators are generated for each case reducer function
export const { addCurrency } = slice.actions;

export const currency = slice.reducer;
