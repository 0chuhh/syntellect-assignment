import React, { FC } from 'react';
import { IInputProps } from '../input';

export interface IAutocompleteProps<Value> extends IInputProps {
    options: ReadonlyArray<Value>;
    getOptionLabel?: (option: Value) => string;
    renderOption?: (option: Value) => React.ReactNode;
}

export function Autocomplete<Value>(props: IAutocompleteProps<Value>) {

    const getOptionLabel = (option: Value): string | null => {
        if (props.getOptionLabel) return props.getOptionLabel(option);
        return null;
    };

    return (
        <div>

        </div>
    );
}