import { PayloadAction } from '@reduxjs/toolkit'
import {ADDRCONFIG} from "dns";
import {ADD_CURRENCY} from "../types";

const initialState = {
    ShowCurrency: []
}

const rootReducer = (state = initialState, action: PayloadAction<string>) => {
    switch (action.type) {
        case ADD_CURRENCY:
            return {
                ...state,
                ShowCurrency: [
                    ...state.ShowCurrency,
                    action.payload
                ]
            };
        default:
            return state;
    }
};

export default rootReducer;