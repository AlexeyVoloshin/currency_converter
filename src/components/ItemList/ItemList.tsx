import React from 'react';
import { ListItem, ListItemText } from '@mui/material';
import { IItemCurrency } from '../../types/currency';

export const ItemList: React.FC<IItemCurrency> = (props): React.ReactElement => {
    // const classes = useStyles();
    return (
        <ListItem disablePadding>
            <ListItemText primary={props.currencyName} />
            <ListItemText primary={props.currencyValue} />
        </ListItem>
    );
};
