import React, { FC } from 'react';
import { Primitive } from 'types/primitive';

export interface IAutocompleteOptionProps<Value> {
    label: Primitive | null | undefined;
    className:string;
    value:Value;
    onClick:()=>void;
}

export const AutocompleteOption = React.memo(function AutocompleteOption<Value>({ label, className, value, onClick }: IAutocompleteOptionProps<Value>) {
    return (
        <div onClick={onClick} key={label?.toString()} className={className}>{label}</div>
    );
})