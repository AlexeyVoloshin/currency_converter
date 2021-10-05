import React from 'react';
import { List } from '@mui/material';
import { ItemList } from '../ItemList/ItemList';
import { IItemCurrency } from '../../types/currency';
// import { useStyles } from './styles';

interface IPropsList {
    data: IItemCurrency[];
    handleClick: (currencyName: string, conversion_rate: number) => void;
}

export const ListComponent: React.FC<IPropsList> = (props): React.ReactElement => {
    return (
        <List>
            {props.data.map((item, index) => (
                <ItemList
                    handleClick={props.handleClick}
                    key={index}
                    conversion_rate={item.conversion_rate}
                    currency_name={item.currency_name}
                />
            ))}
        </List>
    );
};
