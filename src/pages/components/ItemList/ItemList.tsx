import React from 'react';
import { Icon, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { ICurrencyOptions } from '../../../types/currency';

interface IPropsItemList {
    baseCode: string;
}

export const ItemList: React.FC<ICurrencyOptions> = (props): React.ReactElement => {
    // const classes = useStyles();
    return (
        <ListItem disablePadding>
            {/*<ListItemIcon>*/}
            {/*    <Icon>{props.conversion_rates.currency}</Icon>*/}
            {/*</ListItemIcon>*/}
            <ListItemText primary={props.base_code} />
        </ListItem>
    );
};
