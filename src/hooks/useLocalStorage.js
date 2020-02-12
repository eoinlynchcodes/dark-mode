// This hook allows state to maintain through page refreshes.

import React, { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
    const [storageValue, setStorageValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });
    return [storageValue];
}

const setValue = value => {
    setStorageValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
}