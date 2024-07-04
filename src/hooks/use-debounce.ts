import { useEffect, useRef, useState } from 'react';

/**
 * @param value state value
 * @param delay milliseconds
 * @returns debouncedValue
 */
export function useDebounce<T>(value: T, delay: number = 500): T {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    const timerRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if(timerRef.current) clearTimeout(timerRef.current);

        timerRef.current = setTimeout(() => setDebouncedValue(value), delay);

        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, [value, delay]);

    return debouncedValue;
}