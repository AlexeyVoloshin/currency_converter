import React from 'react';
import { useStyles } from './styles';

export const DetailedConverterPage: React.FC = (): React.ReactElement => {
    const classes = useStyles();
    return <div className={classes.title}>Currency selection page</div>;
};
