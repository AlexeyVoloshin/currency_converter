import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select'

export const SelectTextField: React.FC = (): React.ReactElement => {
    const [currency, setCurrency] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setCurrency(event.target.value as string);
    };
    return (<FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Currency</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={currency}
            label="Currency"
            onChange={handleChange}
        >
            <MenuItem value={10}>UAH</MenuItem>
            <MenuItem value={20}>USD</MenuItem>
            <MenuItem value={30}>RUB</MenuItem>
        </Select>
    </FormControl>)
}