import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { ISelectTextField } from './types';

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
                <MenuItem value={'UAH'}>UAH</MenuItem>
                <MenuItem value={'USD'}>USD</MenuItem>
                <MenuItem value={'RUB'}>RUB</MenuItem>
            </Select>
        </FormControl>
    );
};
