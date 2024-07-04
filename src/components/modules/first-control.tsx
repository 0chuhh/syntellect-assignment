import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { useRef } from 'react';

export const FirstControl = () => {

    const inputRef1 = useRef<HTMLInputElement>(null);
    const inputRef2 = useRef<HTMLInputElement>(null);

    const handleClear = () => {
        if (!inputRef2.current) return;
        inputRef2.current.value = "";
    };

    const handleHelloWorld = () => {
        if (!inputRef2.current) return;
        inputRef2.current.value = "Hello, world!";
    };

    const handleAlertTextInInput = () => {
        if (!inputRef1.current) return;
        window.alert(inputRef1.current.value);
    };

    const handleAlertIsNumber = () => {
        if (!inputRef1.current) return;
        const isNumber = !Number.isNaN(Number(inputRef1.current.value));
        window.alert((inputRef1.current.value !== '' && isNumber) ? 'it is a number' : 'not a number');
    };

    return (
        <div>
            <h1>FIRST</h1>
            <Input
                fullWidth
                ref={inputRef2}
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
                fullWidth
                ref={inputRef1}
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