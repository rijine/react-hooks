import React from 'react';

export interface GlobalProps {
  products: any[];
  cart: any[];
  user: any;
}

export const GlobalContext = React.createContext<Partial<GlobalProps>>({
  user: null
});
