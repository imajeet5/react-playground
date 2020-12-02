import { useCallback, useEffect, useState } from 'react';

export default function useLocalStorage(key, initialValue = '') {
  const [value, setValue] = useState(() => {
    console.log('Use state runs');
    return window.localStorage.getItem(key) || initialValue;
  });

  const setItem = (newValue) => {
    setValue(newValue);
    window.localStorage.setItem(key, newValue);
  };

  useEffect(() => {
    const valueAtLocalStorage = window.localStorage.getItem(key);
    if (value !== valueAtLocalStorage) {
      setValue(valueAtLocalStorage || initialValue);
    }
  });

  const handleStorage = useCallback(
    (event) => {
      if (event.key === key && event.newValue !== value) {
        setValue(event.newValue || initialValue);
      }
    },
    [value]
  );

  useEffect(() => {
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, [handleStorage]);

  return [value, setItem];
}

export function LocalStorageExample() {
  const [item, setItem] = useLocalStorage('name', 'abc');
  return (
    <div>
      <h1>Set Name to store in Local Storage</h1>
      <div>
        <label>
          Name:{' '}
          <input
            type="text"
            placeholder="Enter your name"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
        </label>
      </div>
    </div>
  );
}
