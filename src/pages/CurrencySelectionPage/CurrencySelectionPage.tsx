import React from 'react';
import { useStyles } from './styles';
import { SelectTextField } from '../../components/SelectTextField/SelectTextField';

export const CurrencySelectionPage: React.FC = (): React.ReactElement => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <header className={classes.header}>
                <div className={classes.title}>Currency selection page</div>
            </header>
            <div className={classes.mainContent}>
                <div className={classes.select}>
                    <SelectTextField />
                </div>
            </div>
        </div>
    );
};
