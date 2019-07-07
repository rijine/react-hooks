import React, { useReducer } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import Product from './Product';
import { productsReducer, AddProduct } from '../reducers/productsReducer';

const Products: React.FC = () => {
  const [state, dispatch] = useReducer(productsReducer, { products: [] });
  return (
    <div>
      {JSON.stringify(state)}
      <Product />
      <button
        onClick={() =>
          dispatch({
            type: AddProduct,
            payload: { id: new Date() }
          })
        }
      >
        Add
      </button>
    </div>
  );
};

export default Products;
