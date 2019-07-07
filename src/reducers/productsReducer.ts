export const AddProduct = 'Add product';
export const RemoveProduct = 'Remove product';

export function productsReducer(state: any, action: any) {
  switch (action.type) {
    case AddProduct: {
      return {
        ...state,
        products: [...state.products, action.payload]
      };
    }
    default:
      break;
  }
}
