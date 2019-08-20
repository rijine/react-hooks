import { useState, useEffect } from 'react';

export const useLocalStorage = (key: string): [string, Function] => {
  const [state, setState] = useState(localStorage.getItem('info') || '');

  useEffect(() => {
    localStorage.setItem('info', state);
    return () => {};
  }, [key, state]);

  return [state, setState];
};
