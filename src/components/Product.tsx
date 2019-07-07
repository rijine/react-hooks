import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const Product: React.FC = () => {
  const context = useContext(GlobalContext);
  return <div>{JSON.stringify(context)}</div>;
};

export default Product;
