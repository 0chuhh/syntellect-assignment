import { Primitive } from "types/primitive";
import { IAutocompleteOptionProps, AutocompleteOption } from "./option";

type OptionWithLabel = { 
    label: string;
    [key: string]: any; 
}

type OptionWithId = { 
    id: number;
    [key: string]: any; 
}

function isOptionWithLabel(option:any): option is OptionWithLabel {
    return option.label !== undefined;
}

function isOptionWithId(option:any): option is OptionWithId {
    return option.id !== undefined;
}

export function defaultGetOptionLabel<Value>(option: Value): Primitive | null | undefined {
    if (!option) return undefined;

    const isObject = typeof option === 'object' && !Array.isArray(option) && option !== null;

    if (!isObject) return option.toString();

    if (isOptionWithLabel(option)) return option.label;

    else throw new Error('option must contain property "label", or you can pass your own getOptionLabel prop');
};



export function defaultRenderOption<Value>(option: Value, optionProps:IAutocompleteOptionProps<Value>) {
    return <AutocompleteOption {...optionProps}/>;
}