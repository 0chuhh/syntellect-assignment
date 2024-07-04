import React, {FC, HTMLAttributes} from 'react'
import classes from './style.module.css';

export type IButtonProps = HTMLAttributes<HTMLButtonElement>

export const Button:FC<IButtonProps> = ({className,children,...restProps}) => {
    return (
        <button 
        {...restProps}
        className={[classes.button, className].join(' ')}
        >
            {children}
        </button>
    )
}