import React from 'react';
import { ListItem, ListItemButton, ListItemText } from '@mui/material';
import { IItemCurrency } from '../../types/currency';
import { useStyles } from './styles';

type IPropsItem = IItemCurrency & {
    handleClick: (nameCurrency: string, conversion_rate: number) => void;
};

export const ItemList: React.FC<IPropsItem> = (props): React.ReactElement => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ListItemButton onClick={() => props.handleClick(props.currency_name, props.conversion_rate)}>
                <ListItem disablePadding>
                    <ListItemText primary={props.currency_name} />
                    <ListItemText primary={props.conversion_rate} />
                </ListItem>
            </ListItemButton>
        </div>
    );
};
