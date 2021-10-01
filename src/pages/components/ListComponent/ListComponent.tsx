import React from 'react';
import { List } from '@mui/material';
import { ItemList } from '../ItemList/ItemList';
import { ICurrencyOptions } from '../../../types/currency';
// import { useStyles } from './styles';

export const ListComponent: React.FC<ICurrencyOptions> = (props): React.ReactElement => {
    // const classes = useStyles();

    return <List>{/*<ItemList currencyName={} currencySymbol={} id={} />*/}</List>;
};
