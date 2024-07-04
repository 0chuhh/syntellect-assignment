import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { useRef } from 'react';

export const FirstControl = () => {

    const inputRef = useRef<HTMLInputElement>(null);

    const handleClear = () => {
        if (!inputRef.current) return;
        inputRef.current.value = "";
    };

    const handleHelloWorld = () => {
        if (!inputRef.current) return;
        inputRef.current.value = "Hello, world!";
    };

    const handleAlertTextInInput = () => {
        if (!inputRef.current) return;
        window.alert(inputRef.current.value);
    };

    const handleAlertIsNumber = () => {
        if (!inputRef.current) return;
        const isNumber = !Number.isNaN(Number(inputRef.current.value));
        window.alert(isNumber ? 'it is a number' : 'not a number');
    };

    return (
        <div>
            <h1>FIRST</h1>
            <Input
                ref={inputRef}
                label='first'
                placeholder='placeholder'
                endAdornment={
                    <>
                        <Button onClick={handleClear} style={{ background: 'red' }}>clear</Button>
                        <Button onClick={handleHelloWorld}>Hello world</Button>
                    </>
                }
            />
            <hr />
            <Input
                ref={inputRef}
                label='second'
                placeholder='placeholder'
                startAdornment={
                    <Button onClick={handleAlertIsNumber} style={{ background: 'rgb(151, 173, 72)' }}>IS NUMBER ALERT</Button>
                }
                endAdornment={
                        <Button onClick={handleAlertTextInInput}>ALERT TEXT IN INPUT</Button>
                }
            />
        </div>
    );
};