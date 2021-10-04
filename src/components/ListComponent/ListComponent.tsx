import React from 'react';
import { List } from '@mui/material';
import { ItemList } from '../ItemList/ItemList';
import { IItemCurrency } from '../../types/currency';
// import { useStyles } from './styles';

interface IPropsList {
    data: IItemCurrency[];
}

export const ListComponent: React.FC<IPropsList> = (props): React.ReactElement => {
    return (
        <List>
            {props.data.map((item, index) => (
                <ItemList key={index} currencyValue={item.currencyValue} currencyName={item.currencyName} />
            ))}
        </List>
    );
};
