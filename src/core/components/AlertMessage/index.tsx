import React from 'react';
import { useStyles } from './styles';
import { Alert, AlertProps, Collapse } from '@mui/material';

interface IAlertMessageProps extends AlertProps {
    message: string;
}

export const AlertMessage: React.FC<IAlertMessageProps> = ({ message, ...rest }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Collapse in={!!message}>
                <Alert {...rest}>{message}</Alert>
            </Collapse>
        </div>
    );
};
