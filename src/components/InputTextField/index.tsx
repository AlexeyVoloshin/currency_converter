import React from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { IInputProps } from './types';

type IPropsInput = IInputProps & TextFieldProps;

const InputTextField: React.FC<IPropsInput> = (props): React.ReactElement => {
    return (
        <div className={props.className}>
            <TextField id={props.id} variant={props.variant} onChange={props.onChange} value={props.value} />
        </div>
    );
};

export default InputTextField;
