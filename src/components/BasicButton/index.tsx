import React from 'react';
import ArrowBack from '@mui/icons-material/ArrowBack';
import Button, { ButtonProps } from '@mui/material/Button';
import { IButtonProps } from './types';

type IButton = IButtonProps & ButtonProps;

const BasicButton: React.FC<IButton> = (props): React.ReactElement => {
    return (
        <div className={props.className}>
            <Button onClick={props.handleClick} variant={props.variant} startIcon={<ArrowBack />}>
                {props.text}
            </Button>
        </div>
    );
};

export default BasicButton;
