import React from 'react';

export interface IButtonProps {
    variant: string;
    text: string;
    className?: string;
    handleClick: (event: React.MouseEvent) => void;
}
