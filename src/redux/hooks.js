import { useEffect } from 'react';

export function useEffectAsync(effect) {
    useEffect(() => {
        effect();
    }, []);
}