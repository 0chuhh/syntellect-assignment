import React, { FC, forwardRef, HTMLAttributes } from 'react';
import classes from './style.module.css';

export interface IInputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label?: string,
    fullWidth?: boolean,
    startAdornment?: React.ReactElement | React.ReactElement[];
    endAdornment?: React.ReactNode | React.ReactNode[];
}

export const Input = React.memo(forwardRef<HTMLInputElement, IInputProps>(({
    label = '',
    fullWidth = true,
    startAdornment,
    endAdornment,
    className,
    ...restProps
}, ref) => {
    return (
        <div className={[classes.wrapper, fullWidth ? classes.fullwidth : ''].join(' ')}>
            {startAdornment && <div className={classes.adornment}>{startAdornment}</div>}
            <fieldset className={classes.fieldset}>
                <legend>{label}</legend>
                <input ref={ref} {...restProps} className={[classes.input, className].join(' ')} />
            </fieldset>
            {endAdornment && <div className={classes.adornment}>{endAdornment}</div>}
        </div>
    );
}));