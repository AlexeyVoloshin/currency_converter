import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { ISelectTextField } from './types';
import { popularCurrency } from './localData';

export const SelectTextField: React.FC<ISelectTextField> = (props): React.ReactElement => {
    const handleChange = (event: SelectChangeEvent) => {
        props.setCurrency(event.target.value as string);
    };

    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Currency</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={props.currency}
                label="Currency"
                onChange={handleChange}
            >
                {popularCurrency.map((item) => (
                    <MenuItem key={item.id} value={item.currencyName}>
                        {item.currencyName}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};
