import React, { ChangeEvent, FC, Fragment, SyntheticEvent, useCallback, useEffect, useRef, useState } from 'react';
import { IInputProps, Input } from '../input';
import classes from './style.module.css';
import { Primitive } from 'types/primitive';
import { AutocompleteOption, IAutocompleteOptionProps } from './option';
import { useDebounce } from 'hooks/use-debounce';
import { defaultGetOptionLabel, defaultRenderOption } from './utils';
import { useClickAway } from 'hooks/use-click-away';


export interface IAutocompleteProps<Value> extends Omit<IInputProps, 'ref' | 'value' | 'onChange' | 'onInput'> {
    options: ReadonlyArray<Value>;
    limitOptions?: number;
    getOptionLabel?: typeof defaultGetOptionLabel<Value>;
    renderOption?: typeof defaultRenderOption<Value>;
    value?: Value,
    onChange?: (value: Value) => void,
    onInput?: (value: string) => void,
    isLoading?: boolean;
}

export function Autocomplete<Value>({
    options,
    limitOptions = 10,
    getOptionLabel = defaultGetOptionLabel,
    renderOption = defaultRenderOption,
    value,
    onChange,
    onInput,
    isLoading = false,
    ...inputProps
}: IAutocompleteProps<Value>) {

    const autocompleteRef = useRef<HTMLDivElement>(null);

    const [isOptionListHidden, setIsOptionListHidden] = useState<boolean>(true);

    const [inputValue, setInputValue] = useState<string>('');

    const debouncedValue = useDebounce(inputValue);

    const [selectedValue, setSelectedValue] = useState<Value | null>(value ?? null);

    useEffect(() => {
        if (onInput) onInput(debouncedValue);
        if (debouncedValue && isOptionListHidden) {
            if (selectedValue && getOptionLabel(selectedValue) === debouncedValue) return;
            if (!selectedValue) setIsOptionListHidden(false);
        }
    }, [debouncedValue]);

    const handleChangeValue = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }, []);

    const handleSelectOption = useCallback((option: Value) => () => {
        setInputValue(`${getOptionLabel(option)}`);
        setSelectedValue(option);
        if (onChange) onChange(option);
        setIsOptionListHidden(true);
    }, []);

    const handleClick = useCallback(() => {
        if(!isOptionListHidden) return;
        if (onInput) onInput(inputValue);
        if (inputValue !== '') setIsOptionListHidden(false);
    }, [inputValue]);

    const handleBlur = useCallback(() => setIsOptionListHidden(true), []);

    useClickAway(autocompleteRef, handleBlur);

    return (
        <div ref={autocompleteRef} className={[classes.wrapper, inputProps.fullWidth ? classes.fullwidth : ''].join(' ')}>
            <Input value={inputValue} onChange={handleChangeValue} onClick={handleClick} {...inputProps} />
            <div className={classes.optionList}>
                {!isOptionListHidden && !isLoading && options.length === 0 && <div className={classes.noOptions}>Не найдено совпадений</div>}
                {!isOptionListHidden && isLoading && <div className={classes.loading}>Загрузка...</div>}
                {!isOptionListHidden && (!isLoading &&
                    options.slice(0, limitOptions).map((option, index) => (
                        <Fragment key={index}>
                            {renderOption(option, {
                                className: classes.option,
                                label: getOptionLabel(option),
                                value: option,
                                onClick: handleSelectOption(option)
                            })}
                        </Fragment>
                    )))
                }
            </div>
        </div>
    );
}