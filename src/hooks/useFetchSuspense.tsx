import { GlobalContext } from '../context/GlobalContext';
import { useContext } from 'react';

export const useFetchSuspense = (url: string) => {
  const context = useContext(GlobalContext);

  const value = { data: null, loaded: false };

  console.log('useFetch', value.loaded);

  if (value.loaded) {
    return value;
  }

  const promise = fetch(url).then(res => res.json());

  promise.then(data => {
    value.data = data;
    value.loaded = true;
    // context.products = [ value ];
  });

  throw promise;
};
